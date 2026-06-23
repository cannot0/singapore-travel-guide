# 新加坡旅游指南

一个基于Jekyll构建的新加坡旅游攻略网站，为游客提供全面、实用的旅游信息。

## 项目特点

- 🌸 **景点推荐**：涵盖新加坡必游景点，包括滨海湾花园、圣淘沙岛、鱼尾狮公园等
- 🍜 **美食指南**：介绍海南鸡饭、叻沙、辣椒螃蟹等地道美食
- 🚇 **交通攻略**：提供地铁、公交、出租车等交通方式详解
- 🗺️ **地图导航**：嵌入Google Maps，直观查看景点位置
- 📅 **行程规划**：提供一日游、三日游、五日游等多种行程方案

## 技术栈

- **Jekyll**：静态站点生成器
- **HTML5/CSS3**：现代网页标准，响应式设计
- **JavaScript**：交互功能和动态效果
- **GitHub Pages**：免费托管和自动部署

## 项目结构

```
singapore-travel-guide/
├── _config.yml              # Jekyll配置文件
├── index.md                 # 首页
├── attractions.md           # 景点页
├── food.md                  # 美食页
├── transport.md             # 交通页
├── map.md                   # 地图页
├── itinerary.md             # 行程规划页
├── about.md                 # 关于页
│
├── _layouts/                # 布局文件
│   ├── default.html         # 默认布局
│   ├── page.html            # 页面布局
│   └── attraction.html      # 景点详情布局
│
├── _includes/               # 公共组件
│   ├── navbar.html          # 导航栏
│   ├── footer.html          # 页脚
│   ├── attraction-card.html # 景点卡片
│   └── food-card.html       # 美食卡片
│
├── _data/                   # 数据文件
│   ├── attractions.yml      # 景点数据
│   ├── foods.yml            # 美食数据
│   └── itinerary.yml        # 行程数据
│
└── assets/                  # 静态资源
    ├── css/style.css        # 样式文件
    ├── js/main.js           # JavaScript文件
    └── images/              # 图片资源
        ├── attractions/     # 景点图片
        ├── food/            # 美食图片
        └── banners/         # 横幅图片
```

## 本地运行

### 前提条件

- 安装Ruby（推荐2.7或更高版本）
- 安装Jekyll和Bundler

### 安装步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/cannot0/singapore-travel-guide.git
   cd singapore-travel-guide
   ```

2. 安装依赖：
   ```bash
   bundle install
   ```

3. 启动本地服务器：
   ```bash
   bundle exec jekyll serve
   ```

4. 在浏览器中访问：http://localhost:4000

## 部署到GitHub Pages

1. 在GitHub上创建仓库
2. 推送代码到仓库
3. 在仓库设置中启用GitHub Pages
4. 选择`main`分支作为源
5. 网站将自动部署到 `https://<username>.github.io/<repo-name>/`

## 页面说明

### 首页 (`index.md`)
- 展示新加坡城市概览
- 热门景点推荐
- 快速入口导航

### 景点页 (`attractions.md`)
- 按类别展示景点（必游景点、文化体验、自然风光）
- 景点卡片包含图片、评分、位置等信息
- 点击可查看景点详情

### 美食页 (`food.md`)
- 展示新加坡特色美食
- 包含美食图片、价格、位置等信息
- 按类别分类（必尝美食、特色小吃、甜品饮品）

### 交通页 (`transport.md`)
- 介绍各种交通方式（地铁、公交、出租车）
- 交通卡指南
- 实用出行建议

### 地图页 (`map.md`)
- 嵌入Google Maps
- 热门景点位置介绍
- 地铁线路图

### 行程规划页 (`itinerary.md`)
- 一日游、三日游、五日游行程推荐
- 时间安排和活动建议
- 旅行小贴士

### 关于页 (`about.md`)
- 项目介绍
- 团队成员
- 技术实现

## 团队分工

| 成员 | 职责 | 负责文件 |
|------|------|----------|
| 成员A（组长） | 项目统筹、首页设计、文档整理 | index.md, README.md, docs/* |
| 成员B | 景点模块、景点详情页 | attractions.md, _data/attractions.yml, _includes/attraction-card.html |
| 成员C | 美食模块、餐饮推荐 | food.md, _data/foods.yml, _includes/food-card.html |
| 成员D | 交通、地图、行程规划 | transport.md, map.md, itinerary.md, _data/itinerary.yml |
| 成员E | Jekyll配置、布局组件、样式统一 | _config.yml, _layouts/*, assets/css/style.css, assets/js/main.js |

## 响应式设计

本项目采用响应式设计，支持以下设备：
- 桌面电脑（1200px以上）
- 平板电脑（768px-1200px）
- 手机（768px以下）

## 贡献指南

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 许可证

本项目使用MIT许可证 - 详见LICENSE文件

## 联系方式

如有任何问题或建议，欢迎在GitHub上提交Issue。

---

**项目地址**：https://github.com/cannot0/singapore-travel-guide
