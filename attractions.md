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
      {% for attraction in site.data.attractions %}
        {% if attraction.category == "必游景点" %}
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
    </div>
  </section>

  <!-- 文化体验板块 -->
  <section class="section" style="background-color: var(--card-bg);">
    <div class="section-header">
      <h2>文化体验</h2>
      <p>感受新加坡的多元文化</p>
    </div>
    <div class="cards-grid">
      {% for attraction in site.data.attractions %}
        {% if attraction.category == "文化体验" %}
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
    </div>
  </section>

  <!-- 自然风光板块 -->
  <section class="section">
    <div class="section-header">
      <h2>自然风光</h2>
      <p>探索新加坡的自然之美</p>
    </div>
    <div class="cards-grid">
      {% for attraction in site.data.attractions %}
        {% if attraction.category == "自然风光" %}
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
    </div>
  </section>

  <!-- 逛街休闲板块 -->
  <section class="section" style="background-color: var(--card-bg);">
    <div class="section-header">
      <h2>逛街休闲</h2>
      <p>购物街区、河畔夜游、文艺打卡小巷</p>
    </div>
    <div class="cards-grid">
      {% for attraction in site.data.attractions %}
        {% if attraction.category == "逛街休闲" %}
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
    </div>
  </section>
</div>