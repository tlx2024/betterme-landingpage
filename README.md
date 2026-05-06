# BetterMe Landing Page

BetterMe Landing Page 是 BetterMe 对外官网与营销站项目，承接品牌展示、功能介绍、下载转化和线索收集。

当前代码已具备完整页面框架和视觉实现，但仍处于“高保真原型可运行”阶段，尚未完成正式产品化所需的数据、运营与增长能力接入。

## 1. 项目定位

- 站点类型：品牌官网 + 营销落地页
- 目标用户：潜在下载用户、合作方、内容流量用户
- 核心转化：下载 App、跳转小程序、进入线索与客服渠道
- 与主项目边界：
  - 本仓库只负责官网前端渲染与转化路径
  - 业务能力、用户体系与内容后台由 betterme 主项目承载

## 2. 技术栈

- React 19
- Vite 6
- TypeScript 5
- Tailwind CSS 4
- React Router 7
- motion
- lucide-react

## 3. 端口与环境规范

为避免与同机其它 BetterMe 项目冲突，统一如下：

- betterme-landingpage
  - dev: 3000
  - preview: 8080
- betterme 主站
  - web dev: 3010
  - api dev: 3101
- betterme-wx 小程序联调
  - 建议使用 IP:3101（真机）
  - 本机可用 127.0.0.1:3101（模拟器）

说明：生产部署可使用 Nginx 对外暴露 80/8080，内部服务端口通过反向代理隔离。

## 4. 本地开发

### 4.1 环境要求

- Node.js >= 18
- npm >= 9

### 4.2 安装依赖

```bash
npm install
```

### 4.2.1 配置环境变量

复制环境变量模板并按渠道补全真实下载地址：

```bash
cp .env.example .env
```

至少应配置：

- VITE_SUPPORT_EMAIL
- VITE_DOWNLOAD_URL_UNIVERSAL

可选配置（分渠道深链，优先级高于 universal）：

- VITE_DOWNLOAD_URL_APPLE
- VITE_DOWNLOAD_URL_GOOGLE_PLAY
- VITE_DOWNLOAD_URL_HUAWEI
- VITE_DOWNLOAD_URL_XIAOMI
- VITE_DOWNLOAD_URL_APP_BAO

### 4.3 启动开发

```bash
npm run dev
```

默认地址：http://localhost:3000/

### 4.4 构建与预览

```bash
npm run build
npm run preview
```

预览地址：http://localhost:8080/

### 4.5 类型检查

```bash
npm run lint
```

## 5. 脚本说明

- npm run dev: 启动 Vite 开发服务器（3000）
- npm run build: 生产构建到 dist
- npm run preview: 预览 dist（8080）
- npm run lint: TypeScript 类型检查
- npm run clean: 清理 dist

## 6. 目录结构

```text
src/
  App.tsx                 路由入口
  main.tsx                挂载入口
  index.css               全局样式
  assets/                 本地媒体映射
  components/             导航、页脚、复用组件
  config/                 站点链接与配置
  pages/                  各路由页面
public/                   静态资源
```

### 6.1 关键配置文件

- src/config/appLinks.ts: 路由锚点与外部下载/联系链接（环境变量驱动）
- src/config/siteConfig.ts: 品牌名称与站点基础文案
- .env.example: 下载渠道与支持邮箱模板

## 7. 页面状态矩阵（当前）

- 已实现视觉页面：11 个
  - /, /features, /solutions, /stories, /ai-assistant, /ai-customize, /pricing, /download, /help, /about, /articles
- 页面状态：
  - 视觉与交互：已完成（高保真）
  - 真实数据接入：未完成
  - SEO 完整化：未完成
  - 埋点与转化监控：未完成
  - 内容配置化（CMS/后台）：未完成

## 8. 占位符与开发缺口审计（2026-05）

以下为代码级审计结论，用于评估从“设计稿原型”到“正式上线站点”的差距。

### 8.1 量化结果（已更新）

- 通用商店外链占位：0 处（已改为环境变量配置）
  - 当前采用 universal + channel 两级配置，支持后续运营替换
- 明确的占位说明注释：1 处
  - About 页面 team 图占位注释
- 纯静态示例数据块：>= 30 组
  - 典型分布在 Home、Features、Solutions、Stories、Pricing、Download
- 仅 UI、无业务提交的输入/按钮：>= 8 处
  - 例如订阅邮箱、帮助中心搜索、联系客服、更多文章、排序按钮、部分 tab 仅切样式
- 真实后端 API 对接：0 处
- 埋点/分析 SDK 接入：0 处

### 8.2 关键风险

- 转化不可测：无曝光、点击、下载归因埋点
- 内容不可运营：文案和案例硬编码，无法后台更新
- 渠道不可控：下载链接为通用商店入口，无法对接真实包与投放参数
- SEO 能力不足：缺少结构化数据、canonical、站点地图与可配置 meta

## 9. 正式研发方案与里程碑

### M0 基线清理（1 周）

- 输出统一信息架构（路由、导航、转化漏斗）
- 替换项目占位命名、统一配置入口
- 建立环境配置规范（dev/staging/prod）
- 验收：开发、预发、生产构建流程可重复

### M1 内容实体化（1-2 周）

- 建立站点配置层（导航、下载链接、品牌信息、法务信息）
- 将案例/FAQ/计划等内容抽离为内容源（JSON/CMS）
- 完成页面内容模型定义与渲染解耦
- 验收：不改代码即可更新主要文案与链接

### M2 转化闭环（1-2 周）

- 接入下载跳转治理（平台识别、渠道参数、回流标记）
- 接入线索收集（邮箱订阅/表单）与后端提交
- 帮助中心搜索与分类联动（至少可用检索）
- 验收：关键 CTA 可追踪、可回溯、可配置

### M3 增长与 SEO（1 周）

- 接入分析埋点（PV、CTA、下载、滚动深度）
- 补齐 SEO：动态 meta、OG、sitemap、robots、structured data
- 建立 A/B 实验位（标题、主视觉、主 CTA）
- 验收：可产出周度转化报表

### M4 发布与运维（1 周）

- 完成 CI/CD、环境变量模板、发布回滚策略
- 增加质量门禁（lint/build/smoke/e2e 关键路径）
- 完成监控告警与错误追踪
- 验收：具备稳定发布与故障回滚能力

## 10. 质量门禁建议

- PR 必过：lint + build
- 发布必过：核心页面可访问、关键按钮可跳转、下载链路可追踪
- 上线后监控：错误率、下载点击率、首屏性能、核心页面跳出率

## 11. 当前结论

本项目可以继续作为视觉基础，但不建议直接按“正式官网”对外上线。建议按 M0-M4 分阶段推进，优先打通内容配置化与转化闭环，再进入增长优化。