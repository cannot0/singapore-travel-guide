---
layout: default
title: 新加坡美食推荐
subtitle: 从小贩中心到海鲜餐厅，品尝狮城的多元风味
---

<div class="page-container">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-subtitle">{{ page.subtitle }}</p>
  </header>

  <section class="section">
    <div class="section-header">
      <h2>必尝美食</h2>
      <p>第一次来新加坡最值得优先安排的招牌味道</p>
    </div>

    <div class="cards-grid">
      {% assign must_try_foods = site.data.foods | where: "section", "必尝美食" %}
      {% for food in must_try_foods %}
        {% include food-card.html
          title=food.name
          image=food.image
          emoji=food.emoji
          category=food.category
          rating=food.rating
          description=food.description
          location=food.location
          price=food.price
        %}
      {% endfor %}
    </div>
  </section>

  <section class="section" style="background-color: var(--card-bg);">
    <div class="section-header">
      <h2>特色小吃</h2>
      <p>适合在熟食中心、夜市和街区边走边吃的本地小吃</p>
    </div>

    <div class="cards-grid">
      {% assign snack_foods = site.data.foods | where: "section", "特色小吃" %}
      {% for food in snack_foods %}
        {% include food-card.html
          title=food.name
          image=food.image
          emoji=food.emoji
          category=food.category
          rating=food.rating
          description=food.description
          location=food.location
          price=food.price
        %}
      {% endfor %}
    </div>
  </section>

  <section class="section">
    <div class="section-header">
      <h2>甜品饮品</h2>
      <p>炎热天气里的清凉甜品，以及新加坡式早餐茶饮</p>
    </div>

    <div class="cards-grid">
      {% assign dessert_foods = site.data.foods | where: "section", "甜品饮品" %}
      {% for food in dessert_foods %}
        {% include food-card.html
          title=food.name
          image=food.image
          emoji=food.emoji
          category=food.category
          rating=food.rating
          description=food.description
          location=food.location
          price=food.price
        %}
      {% endfor %}
    </div>
  </section>
</div>
