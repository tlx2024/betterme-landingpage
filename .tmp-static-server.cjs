const http = require('http');
const fs = require('fs');
const path = require('path');
const root = 'D:/0workspace/repo/betterme-landingpage/dist';
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
  const u = new URL(req.url || '/', 'http://127.0.0.1:4177');
  let p = decodeURIComponent(u.pathname);
  let f = path.join(root, p);
  if (p === '/' || !path.extname(p)) f = path.join(root, 'index.html');
  fs.readFile(f, (err, data)=>{
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': mime[path.extname(f).toLowerCase()] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(4177, '127.0.0.1');
