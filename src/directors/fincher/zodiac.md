---
layout: layouts/review.njk
title: "ZODIAC"
permalink: /directors/fincher/zodiac.html
directorSlug: fincher
film:
  title: "Zodiac"
  year: 2007
  runtime: 157
  country: USA
  genres: ["Crime", "Mystery"]
  tagline: "Some mysteries aren't meant to be solved."
season:
  number: 4
  position: 3
  total: 3
ratings:
  anticipation: 3
  enjoyment: 4
  retrospect: 5
  verdict: "Fincher's quiet masterwork."
breadcrumbs:
  - text: David Fincher
    url: /directors/fincher/
  - text: ZODIAC
---

{% set dir = directors[directorSlug] %}

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-ghost">ZODIAC</div>

  <div class="hero-content">
    <div>
      {% include "partials/breadcrumb.njk" %}

      <div class="hero-season-tag">
        <div class="season-dot"></div>
        <span class="season-label">Season {{ season.number | pad(2, '0') }} · Film {{ season.position | pad(2, '0') }} of {{ season.total | pad(2, '0') }}</span>
      </div>

      <h1 class="hero-title">
        <span class="line1">ZODIAC</span>
      </h1>

      <p class="hero-tagline">{{ film.tagline }}</p>
    </div>

    <div class="hero-facts">
      <div class="facts-header">Film Facts <div class="facts-dot"></div></div>
      <div class="fact-row">
        <div class="fact-cell"><label>Director</label><span>David Fincher</span></div>
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
        <span class="tag-text">Season {{ season.number | pad(2, '0') }} — David Fincher</span>
      </div>
      <h2 class="intro-heading">The Weight of Unsolved Things</h2>
      <div class="prose">
        <p class="drop-cap">Zodiac is Fincher's most quietly devastating film precisely because it refuses to give you what you came for. There is no resolution. There is no catharsis. There is only Graysmith at his drawing board, years later, still at it — a man who handed his marriage, his sanity, and eventually his youth to a puzzle that was never going to be solved.</p>
        <p>Fincher makes you feel every year of it.</p>
      </div>
    </div>

    <div class="film-section" id="section-review">
      <div class="film-section-header">
        <div class="film-section-number">Film {{ season.position | pad(2, '0') }} of {{ season.total | pad(2, '0') }}</div>
        <div class="film-section-title">ZODIAC</div>
        <div class="film-section-meta">{{ film.year }} · {{ film.runtime }} min · {{ film.genres | join(" · ") }}</div>
      </div>

      <div class="prose">
        <p class="drop-cap">Based on Robert Graysmith's obsessive investigation into the Zodiac killings, Fincher's film spans decades without ever feeling like it's moving forward. That's intentional. The passage of time is the villain. Leads go cold. Evidence gets lost. Careers end. Marriages collapse.</p>
        <p>The film asks what obsession costs — and then shows you, in painstaking detail, the bill.</p>
      </div>

      <div class="pull-quote">
        <p class="pull-quote-text">The passage of time is the villain. Leads go cold. Evidence gets lost. And still Graysmith keeps looking, long after everyone else has stopped.</p>
        <span class="pull-quote-accent"></span>
      </div>

      <div class="prose">
        <p>Jake Gyllenhaal plays Graysmith as a man possessed — not by darkness, but by the simple inability to accept not knowing. Mark Ruffalo's Inspector Toschi is the weary counterweight, a cop who knows when to walk away and can't understand why Graysmith won't. Robert Downey Jr.'s Paul Avery is the cynical middle ground, a journalist who burns out before the mystery does.</p>
        <p>Fincher shoots the whole thing with clinical detachment, but the emotional weight accumulates. By the final act, you're exhausted in the way the characters are — battered by false endings and almost-there moments that never quite land.</p>
      </div>

      <div class="pull-quote">
        <p class="pull-quote-text">What makes Zodiac endure is precisely what makes it uncomfortable: it doesn't resolve. Not because Fincher couldn't find an ending, but because the real story didn't have one.</p>
        <span class="pull-quote-accent"></span>
      </div>

      <div class="prose">
        <p>This is Fincher's most mature film. It's also his least satisfying in the conventional sense — and that's exactly why it works. Some mysteries aren't meant to be solved. Some obsessions only end when the obsessed do.</p>
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
              <span class="score-desc">Underrated in the Fincher canon — came in curious.</span>
            </div>
            <div class="score-item">
              <div class="score-item-top">
                <span class="score-label enjoyment">Enjoyment</span>
                <span class="score-value enjoyment">{{ ratings.enjoyment }}/5</span>
              </div>
              <div class="score-bar-track"><div class="score-bar-fill enjoyment" id="barE"></div></div>
              <span class="score-desc">Gripping but demanding. Requires patience.</span>
            </div>
            <div class="score-item">
              <div class="score-item-top">
                <span class="score-label retrospect">Retrospect</span>
                <span class="score-value retrospect">{{ ratings.retrospect }}/5</span>
              </div>
              <div class="score-bar-track"><div class="score-bar-fill retrospect" id="barR"></div></div>
              <span class="score-desc">Grows in estimation with every rewatch.</span>
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
        <a href="/directors/fincher/se7en.html" class="other-card">
          <div class="other-card-vis"><div class="other-card-year">1995</div></div>
          <div class="other-card-body">
            <div class="other-card-meta">1995 · 127 min · Thriller</div>
            <div class="other-card-title">Se7en</div>
            <div class="other-card-rating">
              <span class="ocr-label">Club Rating</span>
              <span class="ocr-score">14 <span>/ 15</span></span>
            </div>
          </div>
        </a>
        <a href="/directors/fincher/fight-club.html" class="other-card">
          <div class="other-card-vis"><div class="other-card-year">1999</div></div>
          <div class="other-card-body">
            <div class="other-card-meta">1999 · 139 min · Drama</div>
            <div class="other-card-title">Fight Club</div>
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
    const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
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
      poly.setAttribute('stroke-width', i === 5 ? '1' : '0.5');
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
      text.setAttribute('font-family', 'Space Mono, monospace');
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
      c.setAttribute('fill', COLORS[i]); c.setAttribute('filter', 'url(#glowFill)');
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
