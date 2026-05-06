param()

Add-Type -AssemblyName System.Drawing

$source = @"
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;

public static class CharacterGridSlicer
{
    private static bool IsBackgroundCandidate(Color color)
    {
        if (color.A == 0)
        {
            return false;
        }

        int max = Math.Max(color.R, Math.Max(color.G, color.B));
        int min = Math.Min(color.R, Math.Min(color.G, color.B));
        return max >= 232 && (max - min) <= 24;
    }

    public static Bitmap RemoveEdgeConnectedBackground(Bitmap bitmap)
    {
        var output = new Bitmap(bitmap.Width, bitmap.Height, PixelFormat.Format32bppArgb);
        using (var graphics = Graphics.FromImage(output))
        {
            graphics.DrawImage(bitmap, 0, 0, bitmap.Width, bitmap.Height);
        }

        var visited = new bool[output.Width, output.Height];
        var queue = new Queue<Point>();

        Action<int, int> enqueue = (x, y) =>
        {
            if (x < 0 || x >= output.Width || y < 0 || y >= output.Height)
            {
                return;
            }

            if (visited[x, y])
            {
                return;
            }

            visited[x, y] = true;
            if (IsBackgroundCandidate(output.GetPixel(x, y)))
            {
                queue.Enqueue(new Point(x, y));
            }
        };

        int sideSeedLimit = (int)(output.Height * 0.82);

        for (int x = 0; x < output.Width; x++)
        {
            enqueue(x, 0);
        }

        for (int y = 0; y < sideSeedLimit; y++)
        {
            enqueue(0, y);
            enqueue(output.Width - 1, y);
        }

        while (queue.Count > 0)
        {
            var point = queue.Dequeue();
            var color = output.GetPixel(point.X, point.Y);
            if (!IsBackgroundCandidate(color))
            {
                continue;
            }

            output.SetPixel(point.X, point.Y, Color.Transparent);
            enqueue(point.X + 1, point.Y);
            enqueue(point.X - 1, point.Y);
            enqueue(point.X, point.Y + 1);
            enqueue(point.X, point.Y - 1);
        }

        return output;
    }
}
"@

Add-Type -TypeDefinition $source -ReferencedAssemblies System.Drawing

function Export-CharacterGrid {
    param(
        [Parameter(Mandatory = $true)]
        [string]$InputPath,
        [Parameter(Mandatory = $true)]
        [string]$OutputDir,
        [Parameter(Mandatory = $true)]
        [string[]]$Names
    )

    $resolvedInput = Resolve-Path $InputPath
    $bitmap = [System.Drawing.Bitmap]::FromFile($resolvedInput)

    try {
        $tileWidth = [int]($bitmap.Width / 3)
        $tileHeight = [int]($bitmap.Height / 3)
        New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

        for ($row = 0; $row -lt 3; $row++) {
            for ($column = 0; $column -lt 3; $column++) {
                $index = ($row * 3) + $column
                $name = $Names[$index]
                $rect = [System.Drawing.Rectangle]::new(
                    [int]($column * $tileWidth),
                    [int]($row * $tileHeight),
                    [int]$tileWidth,
                    [int]$tileHeight
                )
                $tile = $bitmap.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

                try {
                    $transparentTile = [CharacterGridSlicer]::RemoveEdgeConnectedBackground($tile)
                    try {
                        $outputPath = Join-Path $OutputDir ($name + '.png')
                        $transparentTile.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
                    }
                    finally {
                        $transparentTile.Dispose()
                    }
                }
                finally {
                    $tile.Dispose()
                }
            }
        }
    }
    finally {
        $bitmap.Dispose()
    }
}

$lilyNames = @(
    'lily-heart-hoodie',
    'lily-wave-sport',
    'lily-ok-sport',
    'lily-water-sport',
    'lily-salad-sport',
    'lily-phone-sport',
    'lily-mat-sport',
    'lily-dumbbell-sport',
    'lily-stretch-sport'
)

$lucyOtherNames = @(
    'lucy-formal-white',
    'lucy-athlete-black',
    'lucy-knit-cream',
    'lucy-wave-green',
    'lucy-coffee-blue',
    'lucy-tablet-purple',
    'lucy-blazer-beige',
    'lucy-think-blue',
    'lucy-cheer-black'
)

$lucyOthersNames = @(
    'lucy-crossed-white',
    'lucy-thumbs-up-white',
    'lucy-ok-white',
    'lucy-water-white',
    'lucy-salad-white',
    'lucy-phone-white',
    'lucy-mat-white',
    'lucy-dumbbell-white',
    'lucy-stretch-white'
)

Export-CharacterGrid -InputPath 'public/lily/lily-other.png' -OutputDir 'public/lily/cuts' -Names $lilyNames
Export-CharacterGrid -InputPath 'public/ann/lucy-other.png' -OutputDir 'public/ann/cuts/lucy-other' -Names $lucyOtherNames
Export-CharacterGrid -InputPath 'public/ann/lucy-others.png' -OutputDir 'public/ann/cuts/lucy-others' -Names $lucyOthersNames