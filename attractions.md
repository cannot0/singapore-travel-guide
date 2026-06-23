---
layout: default
title: 景点推荐
subtitle: 探索新加坡的精彩景点
---

<div class="page-container">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-subtitle">{{ page.subtitle }}</p>
  </header>

  <section class="section">
    <div class="section-header">
      <h2>必游景点</h2>
      <p>新加坡最具代表性的景点</p>
    </div>

    <div class="cards-grid">
      {% for attraction in site.data.attractions %}
        {% if attraction.featured %}
          {% include attraction-card.html
            title=attraction.name
            image=attraction.image
            category=attraction.category
            rating=attraction.rating
            description=attraction.description
            location=attraction.location
            url=attraction.url
          %}
        {% endif %}
      {% endfor %}

      <!-- Placeholder cards for demonstration -->
      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #10b981 0%, #059669 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🌸
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">花园</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★★</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/gardens-by-the-bay/' | relative_url }}">滨海湾花园</a>
          </h3>
          <p class="card-description">
            新加坡的标志性景点，拥有壮观的超级树和室内花园。占地101公顷，是新加坡最热门的旅游景点之一。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>滨海湾地区</span>
          </div>
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
          <span class="card-category">度假胜地</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/sentosa/' | relative_url }}">圣淘沙岛</a>
          </h3>
          <p class="card-description">
            集娱乐、购物、海滩于一体的度假胜地。拥有环球影城、S.E.A.海洋馆等众多景点。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>圣淘沙岛</span>
          </div>
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
          <span class="card-category">地标</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★★</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/merlion-park/' | relative_url }}">鱼尾狮公园</a>
          </h3>
          <p class="card-description">
            新加坡的象征，必打卡的地标性景点。鱼尾狮雕像是新加坡的标志，位于滨海湾。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>滨海湾</span>
          </div>
          <a href="{{ '/attractions/merlion-park/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background-color: var(--card-bg);">
    <div class="section-header">
      <h2>文化体验</h2>
      <p>感受新加坡的多元文化</p>
    </div>

    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🏛️
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">文化</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/little-india/' | relative_url }}">小印度</a>
          </h3>
          <p class="card-description">
            感受印度文化的魅力，这里有色彩斑斓的建筑、香料市场和传统服饰。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>小印度区</span>
          </div>
          <a href="{{ '/attractions/little-india/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🏮
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">文化</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/chinatown/' | relative_url }}">牛车水</a>
          </h3>
          <p class="card-description">
            新加坡的唐人街，保留了浓厚的中华文化传统，有古老的寺庙和传统店铺。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>牛车水区</span>
          </div>
          <a href="{{ '/attractions/chinatown/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🕌
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">文化</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/kampong-glam/' | relative_url }}">甘榜格南</a>
          </h3>
          <p class="card-description">
            马来文化区，这里有美丽的苏丹回教堂和特色商店。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>甘榜格南区</span>
          </div>
          <a href="{{ '/attractions/kampong-glam/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-header">
      <h2>自然风光</h2>
      <p>探索新加坡的自然之美</p>
    </div>

    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🌿
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">自然</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★★</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/botanic-gardens/' | relative_url }}">新加坡植物园</a>
          </h3>
          <p class="card-description">
            联合国教科文组织世界遗产，拥有超过1万种植物，是城市中的绿洲。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>乌节路附近</span>
          </div>
          <a href="{{ '/attractions/botanic-gardens/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🌊
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">自然</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/singapore-zoo/' | relative_url }}">新加坡动物园</a>
          </h3>
          <p class="card-description">
            世界顶级的开放式动物园，拥有超过300种动物，体验与自然的亲密接触。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>万里区</span>
          </div>
          <a href="{{ '/attractions/singapore-zoo/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-image">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
            🦅
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">自然</span>
          <div class="card-rating">
            <span class="rating-stars">★★★★☆</span>
          </div>
          <h3 class="card-title">
            <a href="{{ '/attractions/bird-paradise/' | relative_url }}">裕廊飞禽公园</a>
          </h3>
          <p class="card-description">
            亚洲最大的飞禽公园，拥有超过5000只鸟类，是鸟类爱好者的天堂。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>裕廊区</span>
          </div>
          <a href="{{ '/attractions/bird-paradise/' | relative_url }}" class="card-link">查看详情 →</a>
        </div>
      </div>
    </div>
  </section>
</div>
