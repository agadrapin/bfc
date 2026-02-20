---
layout: layouts/review.njk
title: "SE7EN"
permalink: /directors/fincher/se7en.html
directorSlug: fincher
film:
  title: "Se7en"
  year: 1995
  runtime: 127
  country: USA
  genres: ["Thriller", "Crime"]
  tagline: "Evil doesn't need to be seen to be felt."
season:
  number: 4
  position: 1
  total: 3
ratings:
  anticipation: 4
  enjoyment: 5
  retrospect: 5
  verdict: "An essential."
breadcrumbs:
  - text: David Fincher
    url: /directors/fincher/
  - text: SE7EN
---

{% set dir = directors[directorSlug] %}

<!-- ═══ HERO ══════════════════════════════════════════ -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-ghost">SE7EN</div>

  <div class="hero-content">
    <div>
      {% include "partials/breadcrumb.njk" %}

      <div class="hero-season-tag">
        <div class="season-dot"></div>
        <span class="season-label">Season {{ season.number | pad(2, '0') }} · Film {{ season.position | pad(2, '0') }} of {{ season.total | pad(2, '0') }}</span>
      </div>

      <h1 class="hero-title">
        <span class="line1">{{ film.title | upper }}</span>
      </h1>

      <p class="hero-tagline">
        {{ film.tagline }}
      </p>
    </div>

    <!-- FACTS PANEL -->
    <div class="hero-facts">
      <div class="facts-header">Film Facts <div class="facts-dot"></div></div>
      <div class="fact-row">
        <div class="fact-cell">
          <label>Director</label>
          <span>David Fincher</span>
        </div>
        <div class="fact-cell">
          <label>Year</label>
          <span class="gold">{{ film.year }}</span>
        </div>
      </div>
      <div class="fact-row">
        <div class="fact-cell">
          <label>Runtime</label>
          <span>{{ film.runtime }} min</span>
        </div>
        <div class="fact-cell">
          <label>Country</label>
          <span>{{ film.country }}</span>
        </div>
      </div>
      <div class="fact-row">
        <div class="fact-cell">
          <label>Genre</label>
          <span>{{ film.genres | join(" · ") }}</span>
        </div>
        <div class="fact-cell">
          <label>Club Rating</label>
          <span class="gold">{{ ratings | totalRating }} / 15</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ ARTICLE ════════════════════════════════════════ -->
<div class="article-wrap">
  <article class="article-main" id="articleMain">

    <!-- INTRO -->
    <div class="review-intro" id="section-intro">
      <div class="section-tag">
        <div class="tag-line"></div>
        <span class="tag-text">Season {{ season.number | pad(2, '0') }} — David Fincher</span>
      </div>
      <h2 class="intro-heading">The Architecture of Dread</h2>
      <div class="prose">
        <p class="drop-cap">David Fincher has a remarkable talent for constructing films that feel inevitable. His compositions are clinical, his lighting oppressive, and his narratives engineered with the precision of a Swiss watch. In <em>Se7en</em> (1995), Fincher established the template for what would become his signature: a world saturated with dread, populated by men chasing truths that will only destroy them.</p>
        <p>The film operates as both a procedural thriller and a meditation on evil — not as spectacle, but as the quiet accumulation of consequence.</p>
      </div>
    </div>

    <!-- FILM REVIEW -->
    <div class="film-section" id="section-review">
      <div class="film-section-header">
        <div class="film-section-number">Film {{ season.position | pad(2, '0') }} of {{ season.total | pad(2, '0') }}</div>
        <div class="film-section-title">SE7EN</div>
        <div class="film-section-meta">{{ film.year }} · {{ film.runtime }} min · {{ film.genres | join(" · ") }} · {{ film.country }}</div>
      </div>

      <div class="prose">
        <p class="drop-cap">What Fincher understood — and what makes Se7en so unbearably effective — is that evil doesn't need to be seen to be felt. We never witness the crimes in real time. We arrive after, into silence and consequence, and that absence is worse than anything that could have been shown. Somerset and Mills don't chase a monster. They follow a sermon. The killer isn't aberrant; he believes he's correct. That's what lingers.</p>
        <p>The rain never stops. The city has no name. Time becomes elastic, smeared across scene after scene of rotting evidence and fractured lives. Fincher shoots the whole thing like a procedural autopsy — methodical, detached, clinical — which only makes the final act's emotional violence land harder.</p>
      </div>

      <div class="pull-quote">
        <p class="pull-quote-text">Somerset and Mills don't chase a monster. They follow a sermon. The killer isn't aberrant — he believes he's correct. That's what lingers.</p>
        <span class="pull-quote-accent"></span>
      </div>

      <div class="prose">
        <p>The performances anchor everything. Morgan Freeman's Somerset carries the weight of exhaustion — a man counting down the days until he can stop looking. Brad Pitt's Mills is all righteous fury, young enough to still believe in good guys and bad guys. Their dynamic isn't buddy-cop; it's generational argument, and the film sides with neither.</p>
        <p>And then there's Kevin Spacey's John Doe, appearing only in the final act with the calm of a man who knows he's already won. His sermons about sin feel uncomfortably coherent. Fincher doesn't let us dismiss him as insane. That's the real horror.</p>
      </div>

      <div class="pull-quote">
        <p class="pull-quote-text">The box isn't the ending. The choice is. And that choice haunts precisely because there's no right answer — only degrees of loss.</p>
        <span class="pull-quote-accent"></span>
      </div>

      <div class="prose">
        <p>On first watch, I came away shaken but uncertain whether I'd witnessed a masterpiece or a very effective genre exercise. That uncertainty evaporated on rewatch. Se7en isn't just a thriller. It's a thesis on moral entropy, dressed in procedural clothes and delivered with relentless craft.</p>
      </div>
    </div>

    <!-- CLUB RATING -->
    <div class="rating-section" id="section-rating">
      <div class="section-tag" style="margin-bottom:1.5rem;">
        <div class="tag-line"></div>
        <span class="tag-text">Club Rating</span>
      </div>

      <div class="rating-card">
        <div class="rating-header">
          <span class="rating-header-label">{{ film.title }} · Club Rating</span>
          <div class="rating-total" id="totalDisplay">{{ ratings | totalRating }} <span>/ 15</span></div>
        </div>
        <div class="rating-body">
          <div class="radar-wrap">
            {% include "partials/radar-chart.njk" %}
          </div>
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
              <span class="score-desc">Gripping from first frame to devastating last.</span>
            </div>
            <div class="score-item">
              <div class="score-item-top">
                <span class="score-label retrospect">Retrospect</span>
                <span class="score-value retrospect">{{ ratings.retrospect }}/5</span>
              </div>
              <div class="score-bar-track"><div class="score-bar-fill retrospect" id="barR"></div></div>
              <span class="score-desc">Improves with every rewatch. Essential cinema.</span>
            </div>
          </div>
        </div>
        <div class="rating-footer-bar">
          <span class="rating-footnote">Each dimension max 5 pts</span>
          <span class="rating-verdict">{{ ratings.verdict }}</span>
        </div>
      </div>
    </div>

    <!-- OTHER REVIEWS -->
    <div class="other-reviews" id="section-next">
      <div class="section-tag" style="margin-bottom: 1.5rem;">
        <div class="tag-line"></div>
        <span class="tag-text">Season {{ season.number | pad(2, '0') }} — Also Reviewed</span>
      </div>

      <div class="other-reviews-grid">
        <a href="/directors/fincher/fight-club.html" class="other-card">
          <div class="other-card-vis">
            <div class="other-card-year">1999</div>
          </div>
          <div class="other-card-body">
            <div class="other-card-meta">1999 · 139 min · Drama</div>
            <div class="other-card-title">Fight Club</div>
            <div class="other-card-rating">
              <span class="ocr-label">Club Rating</span>
              <span class="ocr-score">12 <span>/ 15</span></span>
              <div class="ocr-dims">
                <span class="cr-dim a"><span class="cr-dim-dot"></span>A·3</span>
                <span class="cr-dim e"><span class="cr-dim-dot"></span>E·5</span>
                <span class="cr-dim r"><span class="cr-dim-dot"></span>R·4</span>
              </div>
            </div>
          </div>
        </a>
        <a href="/directors/fincher/zodiac.html" class="other-card">
          <div class="other-card-vis">
            <div class="other-card-year">2007</div>
          </div>
          <div class="other-card-body">
            <div class="other-card-meta">2007 · 157 min · Crime</div>
            <div class="other-card-title">Zodiac</div>
            <div class="other-card-rating">
              <span class="ocr-label">Club Rating</span>
              <span class="ocr-score">12 <span>/ 15</span></span>
              <div class="ocr-dims">
                <span class="cr-dim a"><span class="cr-dim-dot"></span>A·3</span>
                <span class="cr-dim e"><span class="cr-dim-dot"></span>E·4</span>
                <span class="cr-dim r"><span class="cr-dim-dot"></span>R·5</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

  </article>

  <!-- STICKY SIDEBAR -->
  <aside class="article-aside">
    <div class="aside-sticky">
      <div class="aside-label">In this review</div>
      <nav class="aside-sections">
        <a href="#section-intro" class="aside-link active">Introduction</a>
        <a href="#section-review" class="aside-link">The Review</a>
        <a href="#section-rating" class="aside-link">Club Rating</a>
        <a href="#section-next" class="aside-link">Other Reviews</a>
      </nav>
      <div class="aside-label">Season {{ season.number | pad(2, '0') }}</div>
      <nav class="aside-sections">
        <a href="/directors/fincher/se7en.html" class="aside-link" style="color:var(--gold)">Se7en</a>
        <a href="/directors/fincher/fight-club.html" class="aside-link">Fight Club</a>
        <a href="/directors/fincher/zodiac.html" class="aside-link">Zodiac</a>
      </nav>
    </div>
  </aside>

</div>

<script>
  // READING PROGRESS BAR
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
  });

  // RADAR CHART
  const CX = 100, CY = 100, MAX_R = 72;
  const ANGLES = [-90, 30, 150].map(a => a * Math.PI / 180);
  const LABELS = ['Anticipation', 'Enjoyment', 'Retrospect'];
  const COLORS = ['#a86bff', '#ff5cc8', '#e8c97a'];
  const SCORES = [{{ ratings.anticipation }}, {{ ratings.enjoyment }}, {{ ratings.retrospect }}];

  function polarToXY(angle, r) {
    return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) };
  }

  function pointsStr(pts) {
    return pts.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
  }

  function buildGrid() {
    const rings = document.getElementById('gridRings');
    const axes = document.getElementById('axisLines');
    const labs = document.getElementById('axisLabels');

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
      line.setAttribute('stroke-width', '0.5');
      axes.appendChild(line);

      const labelPt = polarToXY(angle, MAX_R + 18);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', labelPt.x);
      text.setAttribute('y', labelPt.y);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('font-family', 'Space Mono, monospace');
      text.setAttribute('font-size', '6.5');
      text.setAttribute('letter-spacing', '1');
      text.setAttribute('fill', COLORS[i]);
      text.setAttribute('opacity', '0.8');
      text.textContent = LABELS[i].toUpperCase();
      labs.appendChild(text);
    });
  }

  function drawPoly(scores) {
    const pts = ANGLES.map((angle, i) => polarToXY(angle, (scores[i] / 5) * MAX_R));
    const str = pointsStr(pts);
    document.getElementById('radarPoly').setAttribute('points', str);
    document.getElementById('radarPolyBorder').setAttribute('points', str);

    const vd = document.getElementById('vertexDots');
    vd.innerHTML = '';
    pts.forEach((p, i) => {
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', p.x); c.setAttribute('cy', p.y);
      c.setAttribute('r', '3');
      c.setAttribute('fill', COLORS[i]);
      c.setAttribute('filter', 'url(#glowFill)');
      vd.appendChild(c);
    });
  }

  let radarDrawn = false;
  const radarObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !radarDrawn) {
        radarDrawn = true;
        const start = performance.now();
        const duration = 1000;
        function ease(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
        function step(now) {
          const t = ease(Math.min((now - start) / duration, 1));
          drawPoly(SCORES.map(s => s * t));
          if (t < 1) requestAnimationFrame(step);
          else drawPoly(SCORES);
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

  // ACTIVE SIDEBAR LINKS
  const sections = ['section-intro','section-review','section-rating','section-next'];
  const links = document.querySelectorAll('.aside-link');

  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.aside-link[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObs.observe(el);
  });
</script>
