---
layout: default
title: 首页
---

<div class="hero">
  <h1>🇸🇬 欢迎来到新加坡</h1>
  <p>
    探索花园城市的精彩景点、品尝地道美食、了解便捷交通，规划您的完美旅程。
    新加坡，一个融合东西方文化的现代化都市，等待您的发现。
  </p>
  <div class="hero-buttons">
    <a href="{{ '/attractions/' | relative_url }}" class="btn btn-primary">探索景点</a>
    <a href="{{ '/itinerary/' | relative_url }}" class="btn btn-secondary">规划行程</a>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>为什么选择新加坡？</h2>
      <p>一个让你流连忘返的花园城市</p>
    </div>

    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">🌳</div>
          <h3 class="card-title">花园城市</h3>
          <p class="card-description">
            新加坡以其整洁的市容和丰富的绿化而闻名于世。
            从滨海湾花园到植物园，处处都能感受到大自然的气息。
          </p>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">🍜</div>
          <h3 class="card-title">美食天堂</h3>
          <p class="card-description">
            汇集了中餐、马来菜、印度菜等多种美食文化。
            从米其林餐厅到街头小吃，满足您的味蕾。
          </p>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">🚇</div>
          <h3 class="card-title">便捷交通</h3>
          <p class="card-description">
            发达的公共交通系统让出行变得轻松简单。
            地铁、公交、出租车，多种选择任您搭配。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background-color: var(--card-bg);">
  <div class="container">
    <div class="section-header">
      <h2>热门推荐</h2>
      <p>不容错过的新加坡体验</p>
    </div>

    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #10b981 0%, #059669 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🌸
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">必游景点</span>
          <h3 class="card-title">
            <a href="{{ '/attractions/gardens-by-the-bay/' | relative_url }}">滨海湾花园</a>
          </h3>
          <p class="card-description">
            新加坡的标志性景点，拥有壮观的超级树和室内花园。
          </p>
          <a href="{{ '/attractions/gardens-by-the-bay/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🎡
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">热门景点</span>
          <h3 class="card-title">
            <a href="{{ '/attractions/sentosa/' | relative_url }}">圣淘沙岛</a>
          </h3>
          <p class="card-description">
            集娱乐、购物、海滩于一体的度假胜地。
          </p>
          <a href="{{ '/attractions/sentosa/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🦁
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">经典景点</span>
          <h3 class="card-title">
            <a href="{{ '/attractions/merlion-park/' | relative_url }}">鱼尾狮公园</a>
          </h3>
          <p class="card-description">
            新加坡的象征，必打卡的地标性景点。
          </p>
          <a href="{{ '/attractions/merlion-park/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>快速开始</h2>
      <p>轻松规划您的新加坡之旅</p>
    </div>

    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-content text-center">
          <div class="transport-icon">1</div>
          <h3 class="card-title">探索景点</h3>
          <p class="card-description">
            浏览新加坡的热门景点，找到您感兴趣的地方。
          </p>
          <a href="{{ '/attractions/' | relative_url }}" class="btn btn-primary" style="display: inline-block;">开始探索</a>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content text-center">
          <div class="transport-icon">2</div>
          <h3 class="card-title">品尝美食</h3>
          <p class="card-description">
            发现新加坡的特色美食，体验多元文化。
          </p>
          <a href="{{ '/food/' | relative_url }}" class="btn btn-primary" style="display: inline-block;">发现美食</a>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content text-center">
          <div class="transport-icon">3</div>
          <h3 class="card-title">规划行程</h3>
          <p class="card-description">
            根据您的时间和兴趣，制定完美的旅行计划。
          </p>
          <a href="{{ '/itinerary/' | relative_url }}" class="btn btn-primary" style="display: inline-block;">规划行程</a>
        </div>
      </div>
    </div>
  </div>
</section>
