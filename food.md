---
layout: default
title: 美食推荐
subtitle: 品尝新加坡的地道美食
---

<div class="page-container">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-subtitle">{{ page.subtitle }}</p>
  </header>

  <section class="section">
    <div class="section-header">
      <h2>必尝美食</h2>
      <p>新加坡最具代表性的美食</p>
    </div>

    <div class="cards-grid">
      {% for food in site.data.foods %}
        {% if food.featured %}
          {% include food-card.html
            title=food.name
            image=food.image
            category=food.category
            rating=food.rating
            description=food.description
            location=food.location
            price=food.price
          %}
        {% endif %}
      {% endfor %}

      <!-- Placeholder cards for demonstration -->
      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🍜
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">面条</span>
          <span class="card-price">$5-10</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★★</span>
            <span class="rating-text">4.8/5</span>
          </div>
          <h3 class="card-title">海南鸡饭</h3>
          <p class="card-description">
            新加坡的国菜，嫩滑的鸡肉配上香喷喷的米饭，是必尝的美食。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>文东记</span>
          </div>
        </div>
      </div>

      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🍲
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">汤面</span>
          <span class="card-price">$8-12</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
            <span class="rating-text">4.5/5</span>
          </div>
          <h3 class="card-title">叻沙</h3>
          <p class="card-description">
            浓郁的椰奶咖喱汤底，配上米粉和各种配料，味道独特。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>328加东叻沙</span>
          </div>
        </div>
      </div>

      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🍛
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">咖喱</span>
          <span class="card-price">$6-10</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
            <span class="rating-text">4.6/5</span>
          </div>
          <h3 class="card-title">咖喱鱼头</h3>
          <p class="card-description">
            印度风味的咖喱料理，鱼头鲜嫩，汤汁浓郁，非常适合配饭。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>香蕉叶芭沙</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background-color: var(--card-bg);">
    <div class="section-header">
      <h2>特色小吃</h2>
      <p>街头巷尾的美味</p>
    </div>

    <div class="cards-grid">
      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🦀
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">海鲜</span>
          <span class="card-price">$15-25</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★★</span>
            <span class="rating-text">4.9/5</span>
          </div>
          <h3 class="card-title">辣椒螃蟹</h3>
          <p class="card-description">
            新加坡的标志性海鲜菜肴，酸甜辣味的酱汁配上新鲜螃蟹。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>珍宝海鲜</span>
          </div>
        </div>
      </div>

      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🍢
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">烧烤</span>
          <span class="card-price">$3-5</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
            <span class="rating-text">4.4/5</span>
          </div>
          <h3 class="card-title">沙爹</h3>
          <p class="card-description">
            马来风味的烤肉串，配上特制的花生酱，香气扑鼻。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>老巴刹</span>
          </div>
        </div>
      </div>

      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🍛
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">咖喱</span>
          <span class="card-price">$4-7</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
            <span class="rating-text">4.5/5</span>
          </div>
          <h3 class="card-title">咖喱鸡</h3>
          <p class="card-description">
            印度风味的咖喱鸡，香料丰富，肉质鲜嫩，是椰浆饭的经典搭配。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>土司工坊</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-header">
      <h2>甜品饮品</h2>
      <p>甜蜜的收尾</p>
    </div>

    <div class="cards-grid">
      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🍨
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">甜品</span>
          <span class="card-price">$3-5</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★★</span>
            <span class="rating-text">4.7/5</span>
          </div>
          <h3 class="card-title">摩摩喳喳</h3>
          <p class="card-description">
            东南亚特色甜品，用各种豆类、薯类和椰奶制成，清凉解暑。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>詹爷爷</span>
          </div>
        </div>
      </div>

      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🍵
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">饮品</span>
          <span class="card-price">$2-4</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
            <span class="rating-text">4.6/5</span>
          </div>
          <h3 class="card-title">拉茶</h3>
          <p class="card-description">
            马来西亚和新加坡的传统饮品，用红茶和炼乳制成，口感顺滑。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>各小贩中心</span>
          </div>
        </div>
      </div>

      <div class="food-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🍧
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">甜品</span>
          <span class="card-price">$2-4</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
            <span class="rating-text">4.5/5</span>
          </div>
          <h3 class="card-title">煎蕊</h3>
          <p class="card-description">
            绿色的米粉配上椰奶和棕榈糖，是新加坡的经典甜品。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>摩摩喳喳</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
