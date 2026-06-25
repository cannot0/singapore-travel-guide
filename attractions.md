---
layout: default
title: 新加坡景点大全
subtitle: 打卡地标、人文街区、自然园区、购物夜游一站式游玩指南
---

<div class="page-container">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-subtitle">{{ page.subtitle }}</p>
  </header>

  <!-- 必游景点板块 -->
  <section class="section">
    <div class="section-header">
      <h2>必游景点</h2>
      <p>新加坡最具代表性的景点</p>
    </div>
    <div class="cards-grid">
      {% assign must_spot = site.data.attractions | where: "category", "必游景点" %}
      {% for spot in must_spot %}
        {% include attraction-card.html
          title=spot.name
          image=spot.image
          category=spot.category
          rating=spot.rating
          description=spot.description
          location=spot.location
        %}
      {% endfor %}
    </div>
  </section>

  <!-- 文化体验板块 -->
  <section class="section" style="background-color: var(--card-bg-alt);">
    <div class="section-header">
      <h2>文化体验</h2>
      <p>感受新加坡的多元文化</p>
    </div>
    <div class="cards-grid">
      {% assign culture_spot = site.data.attractions | where: "category", "文化体验" %}
      {% for spot in culture_spot %}
        {% include attraction-card.html
          title=spot.name
          image=spot.image
          category=spot.category
          rating=spot.rating
          description=spot.description
          location=spot.location
        %}
      {% endfor %}
    </div>
  </section>

  <!-- 自然风光板块 -->
  <section class="section">
    <div class="section-header">
      <h2>自然风光</h2>
      <p>探索新加坡的自然之美</p>
    </div>
    <div class="cards-grid">
      {% assign nature_spot = site.data.attractions | where: "category", "自然风光" %}
      {% for spot in nature_spot %}
        {% include attraction-card.html
          title=spot.name
          image=spot.image
          category=spot.category
          rating=spot.rating
          description=spot.description
          location=spot.location
        %}
      {% endfor %}
    </div>
  </section>

  <!-- 逛街休闲板块 -->
  <section class="section" style="background-color: var(--card-bg-alt);">
    <div class="section-header">
      <h2>逛街休闲</h2>
      <p>购物街区、河畔夜游、文艺小巷</p>
    </div>
    <div class="cards-grid">
      {% assign shop_spot = site.data.attractions | where: "category", "逛街休闲" %}
      {% for spot in shop_spot %}
        {% include attraction-card.html
          title=spot.name
          image=spot.image
          category=spot.category
          rating=spot.rating
          description=spot.description
          location=spot.location
        %}
      {% endfor %}
    </div>
  </section>
</div>