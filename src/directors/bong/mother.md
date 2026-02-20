---
layout: layouts/review.njk
title: "MOTHER"
permalink: /directors/bong/mother.html
directorSlug: bong
film:
  title: "Mother"
  year: 2009
  runtime: 129
  country: South Korea
  genres: ["Crime", "Drama"]
  tagline: "A mother's love knows no bounds. That's the problem."
season:
  number: 1
  position: 2
  total: 2
ratings:
  anticipation: 4
  enjoyment: 4
  retrospect: 4
  verdict: "Devastating and unforgettable."
breadcrumbs:
  - text: Bong Joon-ho
    url: /directors/bong/
  - text: MOTHER
---

{% set dir = directors[directorSlug] %}

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-ghost">MOTHER</div>

  <div class="hero-content">
    <div>
      {% include "partials/breadcrumb.njk" %}

      <div class="hero-season-tag">
        <div class="season-dot"></div>
        <span class="season-label">Season {{ season.number | pad(2, '0') }} · Film {{ season.position | pad(2, '0') }} of {{ season.total | pad(2, '0') }}</span>
      </div>

      <h1 class="hero-title">
        <span class="line1">MOTHER</span>
      </h1>

      <p class="hero-tagline">{{ film.tagline }}</p>
    </div>

    <div class="hero-facts">
      <div class="facts-header">Film Facts <div class="facts-dot"></div></div>
      <div class="fact-row">
        <div class="fact-cell"><label>Director</label><span>Bong Joon-ho</span></div>
        <div class="fact-cell"><label>Year</label><span class="gold">{{ film.year }}</span></div>
      </div>
      <div class="fact-row">
        <div class="fact-cell"><label>Runtime</label><span>{{ film.runtime }} min</span></div>
        <div class="fact-cell"><label>Country</label><span>{{ film.country }}</span></div>
      </div>
      <div class="fact-row">
        <div class="fact-cell"><label>Genre</label><span>{{ film.genres | join(" · ") }}</span></div>
        <div class="fact-cell"><label>Club Rating</label><span class="gold">{{ ratings | totalRating }} / 15</span></div>
      </div>
    </div>
  </div>
</section>

<div class="article-wrap">
  <article class="article-main" id="articleMain">

    <div class="review-intro" id="section-intro">
      <div class="section-tag">
        <div class="tag-line"></div>
        <span class="tag-text">Season {{ season.number | pad(2, '0') }} — Bong Joon-ho</span>
      </div>
      <h2 class="intro-heading">The Weight of Unconditional Love</h2>
      <div class="prose">
        <p class="drop-cap">A mother's love is supposed to be unconditional. Bong Joon-ho takes that premise and follows it to its logical, devastating conclusion. <em>Mother</em> (2009) is a thriller about devotion pushed past all reasonable limits — and the terrible things that devotion can justify.</p>
        <p>Kim Hye-ja delivers a performance of such raw intensity that it redefines what we expect from the maternal figure in cinema.</p>
      </div>
    </div>

    <div class="film-section" id="section-review">
      <div class="film-section-header">
        <div class="film-section-number">Film {{ season.position | pad(2, '0') }} of {{ season.total | pad(2, '0') }}</div>
        <div class="film-section-title">MOTHER</div>
        <div class="film-section-meta">{{ film.year }} · {{ film.runtime }} min · {{ film.genres | join(" · ") }}</div>
      </div>

      <div class="prose">
        <p class="drop-cap">The unnamed mother lives alone with her intellectually disabled son Do-joon. When a young girl is found murdered and Do-joon is arrested as the prime suspect, she embarks on a desperate investigation to prove his innocence. What she discovers along the way forces her to confront not just the truth about her son, but the truth about herself.</p>
        <p>Bong constructs the film as a slow burn, alternating between dark comedy and genuine horror. The small-town setting feels both specific and archetypal — a place where everyone knows everyone, and secrets have a way of surfacing.</p>
      </div>

      <div class="pull-quote">
        <p class="pull-quote-text">The film asks a simple question: how far would you go for someone you love? Then it shows you the answer is further than you think — and further than you should.</p>
        <span class="pull-quote-accent"></span>
      </div>

      <div class="prose">
        <p>Kim Hye-ja's performance is the film's centre of gravity. She manages to make the mother sympathetic even as her actions become increasingly morally questionable. We understand her, even when we're horrified by her.</p>
        <p>The final act delivers one of Bong's most unsettling reveals — not a twist in the conventional sense, but a recalibration of everything we thought we understood. The dancing that bookends the film takes on an entirely different meaning by the end.</p>
      </div>

      <div class="pull-quote">
        <p class="pull-quote-text">The dancing that bookends the film is the key to everything. In the beginning, it's strange. By the end, it's an act of survival — a desperate attempt to forget.</p>
        <span class="pull-quote-accent"></span>
      </div>

      <div class="prose">
        <p><em>Mother</em> is Bong at his most restrained and his most devastating. It's a film about the lies we tell ourselves to survive, and the costs of love that refuses to see clearly.</p>
      </div>
    </div>

    <div class="rating-section" id="section-rating">
      <div class="section-tag" style="margin-bottom:1.5rem;">
        <div class="tag-line"></div>
        <span class="tag-text">Club Rating</span>
      </div>

      <div class="rating-card">
        <div class="rating-header">
          <span class="rating-header-label">{{ film.title }} · Club Rating</span>
          <div class="rating-total">{{ ratings | totalRating }} <span>/ 15</span></div>
        </div>
        <div class="rating-body">
          <div class="radar-wrap">{% include "partials/radar-chart.njk" %}</div>
          <div class="score-breakdown">
            <div class="score-item">
              <div class="score-item-top">
                <span class="score-label anticipation">Anticipation</span>
                <span class="score-value anticipation">{{ ratings.anticipation }}/5</span>
              </div>
              <div class="score-bar-track"><div class="score-bar-fill anticipation" id="barA"></div></div>
              <span class="score-desc">Strong reputation — expected something special.</span>
            </div>
            <div class="score-item">
              <div class="score-item-top">
                <span class="score-label enjoyment">Enjoyment</span>
                <span class="score-value enjoyment">{{ ratings.enjoyment }}/5</span>
              </div>
              <div class="score-bar-track"><div class="score-bar-fill enjoyment" id="barE"></div></div>
              <span class="score-desc">Gripping throughout. Kim Hye-ja is extraordinary.</span>
            </div>
            <div class="score-item">
              <div class="score-item-top">
                <span class="score-label retrospect">Retrospect</span>
                <span class="score-value retrospect">{{ ratings.retrospect }}/5</span>
              </div>
              <div class="score-bar-track"><div class="score-bar-fill retrospect" id="barR"></div></div>
              <span class="score-desc">Haunts you afterward. The ending stays with you.</span>
            </div>
          </div>
        </div>
        <div class="rating-footer-bar">
          <span class="rating-footnote">Each dimension max 5 pts</span>
          <span class="rating-verdict">{{ ratings.verdict }}</span>
        </div>
      </div>
    </div>

    <div class="other-reviews" id="section-next">
      <div class="section-tag" style="margin-bottom: 1.5rem;">
        <div class="tag-line"></div>
        <span class="tag-text">Season {{ season.number | pad(2, '0') }} — Also Reviewed</span>
      </div>

      <div class="other-reviews-grid">
        <a href="/directors/bong/memories-of-murder.html" class="other-card">
          <div class="other-card-vis"><div class="other-card-year">2003</div></div>
          <div class="other-card-body">
            <div class="other-card-meta">2003 · 132 min · Crime</div>
            <div class="other-card-title">Memories of Murder</div>
            <div class="other-card-rating">
              <span class="ocr-label">Club Rating</span>
              <span class="ocr-score">14 <span>/ 15</span></span>
            </div>
          </div>
        </a>
      </div>
    </div>

  </article>

  <aside class="article-aside">
    <div class="aside-sticky">
      <div class="aside-label">In this review</div>
      <nav class="aside-sections">
        <a href="#section-intro" class="aside-link active">Introduction</a>
        <a href="#section-review" class="aside-link">The Review</a>
        <a href="#section-rating" class="aside-link">Club Rating</a>
        <a href="#section-next" class="aside-link">Other Reviews</a>
      </nav>
    </div>
  </aside>
</div>

<script>
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    document.getElementById('progressBar').style.width = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100) + '%';
  });

  const CX = 100, CY = 100, MAX_R = 72;
  const ANGLES = [-90, 30, 150].map(a => a * Math.PI / 180);
  const COLORS = ['#a86bff', '#ff5cc8', '#e8c97a'];
  const SCORES = [{{ ratings.anticipation }}, {{ ratings.enjoyment }}, {{ ratings.retrospect }}];

  function polarToXY(angle, r) { return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) }; }
  function pointsStr(pts) { return pts.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' '); }

  function buildGrid() {
    const rings = document.getElementById('gridRings');
    const axes = document.getElementById('axisLines');
    const labs = document.getElementById('axisLabels');
    const LABELS = ['Anticipation', 'Enjoyment', 'Retrospect'];

    for (let i = 1; i <= 5; i++) {
      const r = (i / 5) * MAX_R;
      const pts = ANGLES.map(a => polarToXY(a, r));
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      poly.setAttribute('points', pointsStr(pts));
      poly.setAttribute('fill', 'none');
      poly.setAttribute('stroke', i === 5 ? '#2a2a40' : '#1e1e2e');
      rings.appendChild(poly);
    }

    ANGLES.forEach((angle, i) => {
      const tip = polarToXY(angle, MAX_R);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', CX); line.setAttribute('y1', CY);
      line.setAttribute('x2', tip.x); line.setAttribute('y2', tip.y);
      line.setAttribute('stroke', '#1e1e2e');
      axes.appendChild(line);

      const labelPt = polarToXY(angle, MAX_R + 18);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', labelPt.x);
      text.setAttribute('y', labelPt.y);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-family', 'Space Mono');
      text.setAttribute('font-size', '6.5');
      text.setAttribute('fill', COLORS[i]);
      text.textContent = LABELS[i].toUpperCase();
      labs.appendChild(text);
    });
  }

  function drawPoly(scores) {
    const pts = ANGLES.map((angle, i) => polarToXY(angle, (scores[i] / 5) * MAX_R));
    document.getElementById('radarPoly').setAttribute('points', pointsStr(pts));
    document.getElementById('radarPolyBorder').setAttribute('points', pointsStr(pts));
    const vd = document.getElementById('vertexDots');
    vd.innerHTML = '';
    pts.forEach((p, i) => {
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', p.x); c.setAttribute('cy', p.y); c.setAttribute('r', '3');
      c.setAttribute('fill', COLORS[i]);
      vd.appendChild(c);
    });
  }

  let radarDrawn = false;
  const radarObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !radarDrawn) {
        radarDrawn = true;
        const start = performance.now();
        function step(now) {
          const t = Math.min((now - start) / 1000, 1);
          drawPoly(SCORES.map(s => s * t));
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        setTimeout(() => {
          document.getElementById('barA').style.width = ({{ ratings.anticipation }}/5*100)+'%';
          document.getElementById('barE').style.width = ({{ ratings.enjoyment }}/5*100)+'%';
          document.getElementById('barR').style.width = ({{ ratings.retrospect }}/5*100)+'%';
        }, 100);
      }
    });
  }, { threshold: 0.3 });

  buildGrid();
  radarObs.observe(document.getElementById('radarSvg'));
</script>
