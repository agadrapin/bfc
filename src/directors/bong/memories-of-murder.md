---
layout: layouts/review.njk
title: "MEMORIES OF MURDER"
permalink: /directors/bong/memories-of-murder.html
directorSlug: bong
film:
  title: "Memories of Murder"
  year: 2003
  runtime: 132
  country: South Korea
  genres: ["Crime", "Drama"]
  tagline: "The truth doesn't always set you free."
season:
  number: 1
  position: 1
  total: 2
ratings:
  anticipation: 4
  enjoyment: 5
  retrospect: 5
  verdict: "An essential."
breadcrumbs:
  - text: Bong Joon-ho
    url: /directors/bong/
  - text: MEMORIES OF MURDER
---

{% set dir = directors[directorSlug] %}

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-ghost">MEMORIES</div>

  <div class="hero-content">
    <div>
      {% include "partials/breadcrumb.njk" %}

      <div class="hero-season-tag">
        <div class="season-dot"></div>
        <span class="season-label">Season {{ season.number | pad(2, '0') }} · Film {{ season.position | pad(2, '0') }} of {{ season.total | pad(2, '0') }}</span>
      </div>

      <h1 class="hero-title">
        <span class="line1">MEMORIES OF</span>
        <span class="line2" data-text="MURDER">MURDER</span>
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
      <h2 class="intro-heading">Shadows of Humanity</h2>
      <div class="prose">
        <p class="drop-cap">Bong Joon-ho has a remarkable talent for unearthing the darkness within the mundane. His films often begin with deceptively ordinary premises — small-town police work, a mother's devotion — but gradually peel back layers to reveal harrowing truths about human nature and societal failings. In <em>Memories of Murder</em> (2003), Bong masterfully explores themes of guilt, justice, and the fragile bonds that hold us together in the face of chaos.</p>
        <p>The film delves into the complexities of crime and its ripple effects on the lives of those entangled in it.</p>
      </div>
    </div>

    <div class="film-section" id="section-review">
      <div class="film-section-header">
        <div class="film-section-number">Film {{ season.position | pad(2, '0') }} of {{ season.total | pad(2, '0') }}</div>
        <div class="film-section-title">MEMORIES OF MURDER</div>
        <div class="film-section-meta">{{ film.year }} · {{ film.runtime }} min · {{ film.genres | join(" · ") }}</div>
      </div>

      <div class="prose">
        <p class="drop-cap">Based on the real-life Hwaseong serial murders, Bong's film transcends the conventions of the genre. The director is less concerned with the mechanics of solving the crime than with the impact it leaves on the men tasked with catching the killer. Song Kang-ho's Detective Park is an impulsive, small-town officer relying on brute force and gut instincts. Opposite him is Kim Sang-kyung's Detective Seo, a methodical outsider from Seoul who embodies the ideal of professional rigour.</p>
        <p>As the investigation unfolds, both men's approaches falter, their certainties eroded by the weight of their failures.</p>
      </div>

      <div class="pull-quote">
        <p class="pull-quote-text">The tone is one of Bong's great triumphs — harrowing but laced with moments of absurd humour. A bumbling police force, comically inept, feels plucked from the pages of Kafka.</p>
        <span class="pull-quote-accent"></span>
      </div>

      <div class="prose">
        <p>Bong's direction is meticulous, his lens capturing a starkly beautiful South Korean countryside drenched in rain and despair. The film exists in this murky in-between — something procedural, something pastoral, something quietly devastating.</p>
        <p>The film's heart lies in its refusal to offer easy answers. As the case grows colder, Bong shifts focus from the pursuit of justice to the scars left in its wake. The haunting final scene — Detective Park's gaze meeting the camera, confronting us with the weight of unresolved guilt — lingers long after the credits roll.</p>
      </div>

      <div class="pull-quote">
        <p class="pull-quote-text">The haunting final scene — Detective Park's gaze meeting the camera — confronts us with the weight of unresolved guilt. It lingers long after we leave.</p>
        <span class="pull-quote-accent"></span>
      </div>

      <div class="prose">
        <p>What makes <em>Memories of Murder</em> endure is precisely what makes it uncomfortable: it doesn't resolve. Not because Bong couldn't find an ending, but because the real story didn't have one. The killer was unknown for decades. That absence is the point.</p>
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
              <span class="score-desc">Already a legend — came in with high expectations.</span>
            </div>
            <div class="score-item">
              <div class="score-item-top">
                <span class="score-label enjoyment">Enjoyment</span>
                <span class="score-value enjoyment">{{ ratings.enjoyment }}/5</span>
              </div>
              <div class="score-bar-track"><div class="score-bar-fill enjoyment" id="barE"></div></div>
              <span class="score-desc">Gripping, funny, and deeply unsettling throughout.</span>
            </div>
            <div class="score-item">
              <div class="score-item-top">
                <span class="score-label retrospect">Retrospect</span>
                <span class="score-value retrospect">{{ ratings.retrospect }}/5</span>
              </div>
              <div class="score-bar-track"><div class="score-bar-fill retrospect" id="barR"></div></div>
              <span class="score-desc">The lack of resolution still unsettles on reflection.</span>
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
        <a href="/directors/bong/mother.html" class="other-card">
          <div class="other-card-vis"><div class="other-card-year">2009</div></div>
          <div class="other-card-body">
            <div class="other-card-meta">2009 · 129 min · Crime</div>
            <div class="other-card-title">Mother</div>
            <div class="other-card-rating">
              <span class="ocr-label">Club Rating</span>
              <span class="ocr-score">12 <span>/ 15</span></span>
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
      text.setAttribute('dominant-baseline', 'middle');
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
