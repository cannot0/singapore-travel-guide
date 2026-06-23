---
layout: default
title: 地图导航
subtitle: 直观查看新加坡景点位置
---

<div class="page-container">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-subtitle">{{ page.subtitle }}</p>
  </header>

  <section class="section">
    <div class="section-header">
      <h2>新加坡地图</h2>
      <p>探索新加坡的各个角落</p>
    </div>

    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127665.31251844858!2d103.81983635!3d1.3521026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a7c6c6c17d%3A0x2c7e89f1e8e8e8e8!2sSingapore!5e0!3m2!1sen!2ssg!4v1234567890"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>

  <section class="section" style="background-color: var(--card-bg);">
    <div class="section-header">
      <h2>热门景点位置</h2>
      <p>主要景点的地理位置</p>
    </div>

    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-content">
          <h3 class="card-title">滨海湾区域</h3>
          <p class="card-description">
            新加坡最繁华的商业区，拥有滨海湾金沙、鱼尾狮公园、滨海湾花园等著名景点。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>滨海湾 (Marina Bay)</span>
          </div>
          <ul>
            <li>滨海湾金沙酒店</li>
            <li>鱼尾狮公园</li>
            <li>滨海湾花园</li>
            <li>艺术科学博物馆</li>
          </ul>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content">
          <h3 class="card-title">圣淘沙岛</h3>
          <p class="card-description">
            新加坡的度假胜地，拥有环球影城、S.E.A.海洋馆、海滩等娱乐设施。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>圣淘沙 (Sentosa)</span>
          </div>
          <ul>
            <li>环球影城</li>
            <li>S.E.A.海洋馆</li>
            <li>水上探险乐园</li>
            <li>巴拉湾海滩</li>
          </ul>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content">
          <h3 class="card-title">文化区</h3>
          <p class="card-description">
            新加坡的多元文化区，包括牛车水、小印度、甘榜格南等特色区域。
          </p>
          <div class="card-location">
            <span class="icon">📍</span>
            <span>市中心 (City Centre)</span>
          </div>
          <ul>
            <li>牛车水（唐人街）</li>
            <li>小印度</li>
            <li>甘榜格南</li>
            <li>克拉码头</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-header">
      <h2>地铁线路图</h2>
      <p>新加坡地铁系统</p>
    </div>

    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-content">
          <h3 class="card-title">东西线 (EWL)</h3>
          <p class="card-description">
            绿色线路，连接樟宜机场和西部地区，是游客最常用的线路。
          </p>
          <div class="card-location">
            <span class="icon">🚇</span>
            <span>绿色线路</span>
          </div>
          <ul>
            <li>樟宜机场</li>
            <li>市中心</li>
            <li>裕廊东</li>
            <li>Boon Lay</li>
          </ul>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content">
          <h3 class="card-title">南北线 (NSL)</h3>
          <p class="card-description">
            红色线路，连接北部和市中心，经过乌节路购物区。
          </p>
          <div class="card-location">
            <span class="icon">🚇</span>
            <span>红色线路</span>
          </div>
          <ul>
            <li>乌节路</li>
            <li>义顺</li>
            <li>宏茂桥</li>
            <li>碧山</li>
          </ul>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content">
          <h3 class="card-title">东北线 (NEL)</h3>
          <p class="card-description">
            紫色线路，连接东北部和市中心，经过牛车水和小印度。
          </p>
          <div class="card-location">
            <span class="icon">🚇</span>
            <span>紫色线路</span>
          </div>
          <ul>
            <li>牛车水</li>
            <li>小印度</li>
            <li>实龙岗</li>
            <li>榜鹅</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background-color: var(--card-bg);">
    <div class="section-header">
      <h2>实用地图工具</h2>
      <p>帮助您更好地导航</p>
    </div>

    <div class="cards-grid">
      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">📱</div>
          <h3 class="card-title">Google Maps</h3>
          <p class="card-description">
            最常用的导航应用，支持实时公交信息和路线规划。
          </p>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">🚗</div>
          <h3 class="card-title">Grab</h3>
          <p class="card-description">
            东南亚最大的网约车应用，支持叫车和外卖服务。
          </p>
        </div>
      </div>

      <div class="attraction-card">
        <div class="card-content">
          <div class="transport-icon">🗺️</div>
          <h3 class="card-title">MyTransport.SG</h3>
          <p class="card-description">
            新加坡官方交通应用，提供实时公交和地铁信息。
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
