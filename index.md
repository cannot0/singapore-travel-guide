---
layout: default
title: 首页
---

<!-- ===== Hero ===== -->
<div class="hero" style="background: linear-gradient(135deg, rgba(37,99,235,0.72) 0%, rgba(16,185,129,0.72) 100%), url({{ '/assets/images/新加坡.jpg' | relative_url }}) center/cover no-repeat;">
  <h1>欢迎来到新加坡</h1>
  <p>
    探索花园城市的精彩景点、品尝地道美食、了解便捷交通，规划您的完美旅程。
    新加坡，一个融合东西方文化的现代化都市，等待您的发现。
  </p>
  <div class="hero-buttons">
    <a href="{{ '/attractions/' | relative_url }}" class="btn btn-secondary">探索景点</a>
    <a href="{{ '/itinerary/' | relative_url }}" class="btn btn-secondary">规划行程</a>
  </div>
</div>

<!-- ===== 为什么选择新加坡 ===== -->
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

<!-- ===== 热门景点推荐（数据驱动） ===== -->
<section class="section" style="background-color: var(--card-bg);">
  <div class="container">
    <div class="section-header">
      <h2>热门景点推荐</h2>
      <p>不容错过的新加坡体验</p>
    </div>
    <div class="cards-grid">
      {% for attraction in site.data.attractions %}
        {% if attraction.featured %}
          {% include attraction-card.html
            hide_link=true
            title=attraction.name
            image=attraction.card_image
            category=attraction.category
            description=attraction.description
            location=attraction.location
            url=attraction.url
          %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<!-- ===== 必尝美食（数据驱动） ===== -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>必尝美食</h2>
      <p>舌尖上的新加坡之旅</p>
    </div>
    <div class="cards-grid">
      {% for food in site.data.foods %}
        {% if food.featured %}
          {% include food-card.html
            title=food.name
            image=food.card_image
            description=food.description
            location=food.location
            price=food.price
          %}
        {% endif %}
      {% endfor %}
    </div>
    <div style="text-align: center; margin-top: var(--spacing-xl);">
      <a href="{{ '/food/' | relative_url }}" class="btn btn-secondary">查看更多美食 →</a>
    </div>
  </div>
</section>

<!-- ===== 快速开始 ===== -->
<section class="section" style="background-color: var(--card-bg);">
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

<!-- ===== 旅行贴士 ===== -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>旅行小贴士</h2>
      <p>让您的新加坡之旅更加顺利</p>
    </div>
    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">🌤️</div>
          <h3 class="card-title">最佳时间</h3>
          <p class="card-description">
            全年温暖，2-4月和7-9月气候最舒适。记得携带防晒用品和雨具。
          </p>
        </div>
      </div>
      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">💳</div>
          <h3 class="card-title">支付方式</h3>
          <p class="card-description">
            新加坡广泛使用无现金支付，GrabPay、PayNow等均可用。
          </p>
        </div>
      </div>
      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">🗣️</div>
          <h3 class="card-title">语言沟通</h3>
          <p class="card-description">
            官方语言为英语、华语、马来语和泰米尔语，中文沟通基本无障碍。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
