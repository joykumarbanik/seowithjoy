document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- typed search query in hero ---------- */
const queries = [
  "seo executive for ecommerce",
  "aeo geo specialist dhaka",
  "technical seo audit expert",
  "local seo consultant"
];
const typedEl = document.getElementById('typedQuery');
let qIndex = 0, charIndex = queries[0].length, deleting = false;

function typeLoop(){
  const current = queries[qIndex];
  if(!deleting){
    charIndex++;
    if(charIndex > current.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
  } else {
    charIndex--;
    if(charIndex < 0){ deleting = false; qIndex = (qIndex + 1) % queries.length; charIndex = 0; }
  }
  typedEl.textContent = current.slice(0, charIndex);
  setTimeout(typeLoop, deleting ? 35 : 55);
}
typedEl.textContent = queries[0];
setTimeout(typeLoop, 1600);

/* ---------- rank bar fill on scroll into view ---------- */
const rankBarFill = document.getElementById('rankBarFill');
const rankObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      rankBarFill.style.width = '96%';
      rankObserver.disconnect();
    }
  });
}, { threshold: 0.4 });
rankObserver.observe(document.querySelector('.serp-rank-card'));

/* ---------- metric count-up ---------- */
const metricNums = document.querySelectorAll('.metric-num');
const metricObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const tick = () => {
        current = Math.min(target, current + step);
        el.textContent = current;
        if(current < target) requestAnimationFrame(tick);
      };
      tick();
      metricObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
metricNums.forEach(el => metricObserver.observe(el));

/* ---------- render case studies from case-studies.js ---------- */
const csGrid = document.getElementById('csGrid');
if(typeof CASE_STUDIES !== 'undefined'){
  CASE_STUDIES.forEach(cs => {
    const card = document.createElement('article');
    card.className = 'cs-card';
    card.innerHTML = `
      <div class="cs-head">
        <span class="cs-client">${cs.client}</span>
        <span class="cs-tag mono">${cs.tag}</span>
      </div>
      <div class="cs-url mono">${cs.url}</div>
      <div class="cs-problem">
        <h4 class="mono">Situation</h4>
        <p>${cs.problem}</p>
      </div>
      <div class="cs-approach">
        <h4>Approach</h4>
        <ul>${cs.approach.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>
      <div class="cs-results" style="grid-column: 1 / -1;">
        <div>
          <h4 style="margin-bottom:12px;">Results</h4>
          <div style="display:flex; gap:20px; flex-wrap:wrap;">
            ${cs.results.map(r => `
              <div class="cs-result">
                <span class="cs-result-value">${r.value}</span>
                <span class="cs-result-label">${r.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    csGrid.appendChild(card);
  });
}

/* ---------- contact form -> mailto ---------- */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:Joykumarbanik62@gmail.com?subject=${subject}&body=${body}`;
});
