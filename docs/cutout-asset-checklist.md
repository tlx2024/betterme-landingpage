# BetterMe 手动抠图资源清单

## 说明

当前站点已经用本地 SVG 把主要视觉补齐，但 design 目录里的原稿仍有一批更适合用高清透明 PNG 或 WebP 的资源。下面这份清单按页面拆分，优先列出对还原度影响最大的素材。

建议统一规范：
- 格式：透明背景 PNG 或 WebP
- 颜色：尽量保留原稿柔和高光和皮肤过渡，不要二次压缩过度
- 分辨率：移动端可用 2x，桌面首屏建议至少 1800px 高
- 命名：按页面和用途命名，便于后续替换

## 已有原始 Lily 资产

目前 public/lily 目录里已经有 3 张可直接复用或切分的原始图：

1. lily-banner.png
用途：横版主视觉，适合首页、下载页、方案页首屏背景式人物图
尺寸：1721 x 914
备注：绿色运动背心挥手版，构图偏宽，适合做 hero 横幅

2. lily-sayhi.png
用途：AI 助手页、帮助页、AI 定制页的说明区或欢迎区
尺寸：1686 x 933
备注：绿色连帽衫挥手版，气质比当前占位图更适合产品说明类区块

3. lily-other.png
用途：九宫格角色库，可切成 9 张独立 PNG 供首页时间线、功能页、定制页和 CTA 使用
尺寸：1254 x 1254
切图规则：3 x 3 等分，每格 418 x 418，按从左到右、从上到下编号

建议切图命名：
- lily-other-01-heart-hoodie
- lily-other-02-wave-sport
- lily-other-03-water-sport
- lily-other-04-snack-hoodie
- lily-other-05-salad-sport
- lily-other-06-phone-hoodie
- lily-other-07-dumbbell-sport
- lily-other-08-point-hoodie
- lily-other-09-point-tee

建议页面映射：
- Home 首页 Hero / Solutions Hero：优先使用 lily-banner.png
- AiAssistant / Help / AICustomize 说明区：优先使用 lily-sayhi.png
- Pricing 底部 CTA：优先使用 lily-other-01-heart-hoodie
- Features 早安卡片：优先使用 lily-other-03-water-sport 或 lily-other-08-point-hoodie
- Features 餐前建议：优先使用 lily-other-05-salad-sport
- Features 社区或下载引导：优先使用 lily-other-06-phone-hoodie
- AICustomize 角色选择网格：优先从 lily-other 的 9 张切图里选 6 到 8 张

## Home 首页

1. home-hero-lily-fullbody
用途：首屏右侧挥手 Lily 主视觉
建议：半身到大半身透明图，至少 1800x2200
备注：绿色运动背心版，比当前 SVG 更接近 design/home.png

2. home-morning-lily-halfbody
用途：Lily 的一天 07:30 早安卡片
建议：半身透明图，至少 900x1200
备注：蓝色运动服、手持饮品版本

3. home-night-lily-halfbody
用途：Lily 的一天 22:00 睡前复盘卡片
建议：半身透明图，至少 900x1200
备注：夜间柔光、月亮灯或睡前复盘氛围版本

4. home-meal-bowl-photo
用途：11:45 饮食建议卡片中的食物主图
建议：正俯视或 3/4 俯视透明食物图，至少 1200x1200
备注：比当前插画更像真实轻食碗

5. home-meal-analysis-photo
用途：12:10 拍照识食卡片中的食物主图
建议：透明食物图或可直接抠出的菜品图，至少 1200x1200
备注：番茄炒蛋、米饭、菜心这一组

## Features 功能页

1. feature-hero-lily-hoodie
用途：功能页首屏右侧挥手 Lily
建议：半身透明图，至少 1600x2000
备注：浅绿色连帽衫版本

2. feature-morning-lily-cup
用途：早安卡片模块中的 Lily 角色
建议：半身透明图，至少 1000x1400
备注：蓝色吊带、手持杯子版本

3. feature-meal-lily-pointing
用途：餐前建议模块中的指路/举手 Lily
建议：半身透明图，至少 1000x1400
备注：绿色运动背心、抬手指向版

4. feature-sleep-lily-prayer
用途：睡前复盘模块中的闭眼/祈祷 Lily
建议：半身透明图，至少 1000x1400
备注：连帽衫闭眼放松姿态

5. feature-community-composite
用途：朋友餐桌模块右侧人物组合
建议：至少两张透明头像或半身图，至少 800x800
备注：一张 Lily，一张男性用户头像

## Solutions 方案页

1. solutions-hero-lily-pointing
用途：方案页首屏右侧主角色
建议：大半身透明图，至少 1800x2200
备注：绿色背心、单手上举指路版本

2. solutions-postpartum-mom-baby
用途：产后恢复计划卡片
建议：透明母婴合照，至少 1200x1400
备注：当前页面最缺原稿气质的一张

3. solutions-senior-man
用途：中老年健康计划卡片
建议：透明老年男性或中老年用户形象，至少 1200x1400
备注：建议保留笑容和轻松姿态

4. solutions-bottom-lily-peace
用途：底部 CTA 左侧 Lily
建议：半身透明图，至少 1000x1400
备注：比当前 SVG 更偏真实 3D 角色

## Pricing 定价页

1. pricing-hero-lily-resting
用途：定价页首屏右侧 Lily
建议：半身透明图，至少 1600x2000
备注：托腮、连帽衫版本

2. pricing-bottom-lily-heart
用途：底部 CTA 中间 Lily 比心
建议：半身透明图，至少 1200x1500
备注：这是定价页最关键的情感素材

## Download 下载页

1. download-hero-lily-heart
用途：下载页首屏主角色
建议：半身透明图，至少 1800x2200
备注：双手比心版本

2. download-phone-mockup
用途：下载页首屏右下角手机实体图
建议：带透明背景的手机真机或高质 mockup，至少 1400x2200
备注：当前页面是纯代码绘制，替换后精致度会明显提升

3. download-store-badges-official
用途：App Store / Google Play / 华为 / 小米 / 应用宝下载徽标
建议：官方 SVG 或透明 PNG
备注：如果后续有真实上架链接，建议同时提供对应品牌素材

## Stories 用户故事页

1. stories-hero-collage-4up
用途：首屏四宫格真实人物拼贴
建议：4 张独立透明人物图，各至少 1200x1400
备注：需要覆盖减脂女性、职场男性、宝妈、银发用户

2. stories-main-user-xiaotang
用途：主故事卡片 @小唐
建议：半身肖像透明图，至少 1200x1400
备注：白色上衣、清爽室内光线

3. stories-main-user-aken
用途：主故事卡片 @阿Ken
建议：半身肖像透明图，至少 1200x1400
备注：办公场景、轻商务休闲装

4. stories-main-user-sophie
用途：主故事卡片 @Sophie
建议：母婴透明图，至少 1200x1400
备注：与首页和方案页可共用一套高质量素材

5. stories-main-user-zhangyi
用途：主故事卡片 @张姨
建议：半身肖像透明图，至少 1200x1400
备注：户外或公园环境的抠图源更合适

6. stories-carousel-david-elaine
用途：下方更多故事横向卡片
建议：2 张半身透明图，各至少 1000x1200
备注：David 偏职场，Elaine 偏健身或自由职业

## AI Customize AI 形象定制页

1. ai-custom-hero-lily-hoodie
用途：定制页首屏 Lily 主视觉
建议：半身透明图，至少 1600x2000
备注：与 feature hero 可共用，但建议保留更正面角度版本

2. ai-custom-portrait-set-8
用途：头像选择网格
建议：8 张统一光线、统一画风的透明头像，至少 800x800
备注：短发、长发、编发、偏成熟等风格要统一摄影角度

3. ai-custom-preview-lily-clean
用途：右侧预览和底部预览卡
建议：1 张居中半身透明图，至少 1200x1400
备注：便于配合换色、换称呼等 UI 交互

## 优先级建议

第一优先级：Home 首屏 Lily、Features 四张角色图、Pricing 比心 Lily、Download 手机 mockup、Stories 四张主故事人物

第二优先级：Solutions 的母婴图和中老年图、AI Customize 的 8 张统一头像

第三优先级：真实食物图和官方下载徽标
