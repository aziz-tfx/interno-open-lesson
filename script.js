// ===== I18N =====
// The dictionary (dict, cityNames), NEXT_LESSON config, boot lang/city
// resolution and applyLang() live in an inline <head> script in index.html so
// localization applies synchronously before the hero is painted.

document.querySelectorAll('.lang__btn').forEach(b=>{
  b.addEventListener('click',()=>applyLang(b.dataset.lang));
});

// City switcher
const citySel = document.getElementById('citySelect');
function setCity(code){
  try { localStorage.setItem('interno_city', code); } catch(_) {}
  document.documentElement.setAttribute('data-city', code);
  if(citySel) citySel.value = code;
  applyLang(document.documentElement.lang);
}
if(citySel){
  citySel.addEventListener('change',()=>setCity(citySel.value));
}

// Full pass over the complete DOM (head inline passes may have run before
// some sections were parsed).
applyLang(document.documentElement.lang);

// ===== UTM: persist first touch, expose getter, fill hidden form fields =====
const UTM_KEYS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
(function(){
  const params = new URLSearchParams(location.search);
  UTM_KEYS.forEach(k=>{
    const v = params.get(k);
    if(v) try { sessionStorage.setItem('interno_' + k, v); } catch(_) {}
  });
})();
function getUtm(){
  const params = new URLSearchParams(location.search);
  const utm = {};
  UTM_KEYS.forEach(k=>{
    let v = params.get(k);
    if(!v) try { v = sessionStorage.getItem('interno_' + k); } catch(_) {}
    if(v) utm[k] = v;
  });
  return utm;
}
// Hidden utm_* inputs inside each form — sent along with the lead.
(function(){
  const utm = getUtm();
  document.querySelectorAll('form').forEach(f=>{
    UTM_KEYS.forEach(k=>{
      if(f.elements[k] && utm[k]) f.elements[k].value = utm[k];
    });
  });
})();

// ===== QUIZ =====
let quizScore = 0;
let quizStep = 1;
const quizSteps = document.querySelectorAll('.quiz__step');
const quizBar = document.getElementById('quizBar');
const quizStepLbl = document.getElementById('quizStep');
const quizVerdict = document.getElementById('quizVerdict');

function goQuizStep(n){
  quizSteps.forEach(s=>s.classList.remove('is-active'));
  if(n==='final'){
    document.querySelector('.quiz__final').classList.add('is-active');
    quizBar.style.width = '100%';
    quizStepLbl.textContent = '5';
    const lang = document.documentElement.lang;
    // One-sentence verdict from the answers: 5 scored questions, 1 point each.
    const key = quizScore>=4 ? 'verdict.high' : quizScore>=2 ? 'verdict.mid' : 'verdict.low';
    quizVerdict.innerHTML = dict[lang][key];
  } else {
    document.querySelector(`.quiz__step[data-step="${n}"]`).classList.add('is-active');
    quizBar.style.width = (n*20)+'%';
    quizStepLbl.textContent = n;
  }
}

let quizStarted = false;
document.querySelectorAll('.quiz__opt').forEach(opt=>{
  opt.addEventListener('click',()=>{
    if(!quizStarted){
      quizStarted = true;
      if(window.fbq) window.fbq('trackCustom','QuizStart');
    }
    quizScore += parseInt(opt.dataset.score||'0');
    if(opt.dataset.city){
      setCity(opt.dataset.city);
    }
    if(quizStep < 5){
      quizStep++;
      goQuizStep(quizStep);
    } else {
      goQuizStep('final');
      if(window.fbq) window.fbq('trackCustom','QuizComplete', { score: quizScore });
    }
  });
});

document.getElementById('quizRestart')?.addEventListener('click',()=>{
  quizScore = 0;
  quizStep = 1;
  goQuizStep(1);
});

// ===== COUNTDOWN — weekly cycle, counts down to the next lesson (Tashkent, UTC+5) =====
let target = nextLessonTarget();

function tick(){
  const now = new Date();
  let render = false;
  if(target - now <= 0){
    // Lesson time passed while the page was open — roll to next week's lesson.
    target = new Date(target.getTime() + 7*86400000);
    NEXT_LESSON.date = lessonDateStr(target);
    render = true;
  }
  // Места «заполняются» в течение недели; перерисовываем страницу только
  // когда число реально изменилось (несколько раз в сутки).
  const seats = lessonSeatsLeft(target);
  if(seats !== NEXT_LESSON.seatsLeft){
    NEXT_LESSON.seatsLeft = seats;
    render = true;
  }
  if(render) applyLang(document.documentElement.lang);
  let diff = Math.max(0,target-now);
  const d = Math.floor(diff/86400000); diff%=86400000;
  const h = Math.floor(diff/3600000); diff%=3600000;
  const m = Math.floor(diff/60000); diff%=60000;
  const s = Math.floor(diff/1000);
  const pad = n => String(n).padStart(2,'0');
  document.getElementById('cdDays').textContent = pad(d);
  document.getElementById('cdHours').textContent = pad(h);
  document.getElementById('cdMin').textContent = pad(m);
  document.getElementById('cdSec').textContent = pad(s);
}
tick(); setInterval(tick,1000);

// ===== PHONE MASK =====
// Fixed +998 prefix rendered outside the input; the input holds exactly the
// 9 subscriber digits masked as "90 123 45 67".
function maskPhone(input){
  input.addEventListener('input',e=>{
    let v = e.target.value.replace(/\D/g,'');
    if(v.startsWith('998')) v = v.slice(3);
    v = v.slice(0,9);
    let out = v.slice(0,2);
    if(v.length>2) out += ' '+v.slice(2,5);
    if(v.length>5) out += ' '+v.slice(5,7);
    if(v.length>7) out += ' '+v.slice(7,9);
    e.target.value = out;
    e.target.closest('label')?.classList.remove('has-error');
  });
}
document.querySelectorAll('input[type="tel"]').forEach(maskPhone);

function phoneDigits(form){
  return (form.elements.phone?.value || '').replace(/\D/g,'').replace(/^998/,'');
}

// ===== FAQ accordion (single open) — keep details default
// FAQ already works via <details>

// ===== FORMS =====
const AMOCRM_FORM = {
  endpoint: 'https://forms.amocrm.ru/queue/add',
  form_id: '1705506',
  hash: '37df3dcc789078355483c5cbdb3fe57b',
  fields: {
    name: 'fields[name_1]',
    phone: 'fields[875427_1][1182433]',
    note: 'fields[note_2]',
  },
};
const CITY_LABEL = { tsh:'Ташкент', smr:'Самарканд', frg:'Фергана' };
const LANG_LABEL = { ru:'Русский', uz:'Oʻzbek' };

// Yandex.Metrika counter id — set window.YM_COUNTER_ID (or hardcode here) once
// the counter is installed on the page. Goal name: 'lead'.
function ymReachGoal(goal, params){
  try {
    if(typeof window.ym !== 'function') return;
    let ids = [];
    if(window.YM_COUNTER_ID) ids = [window.YM_COUNTER_ID];
    else if(window.Ya && window.Ya._metrika && window.Ya._metrika.counters)
      ids = Object.keys(window.Ya._metrika.counters).map(Number);
    ids.forEach(id => window.ym(id, 'reachGoal', goal, params));
  } catch(_) {}
}

function detectLeadMeta(form){
  const cityCode = form.elements.city?.value || localStorage.getItem('interno_city') || 'tsh';
  const langCode = (form.elements.lang?.value) || document.documentElement.lang || localStorage.getItem('interno_lang') || 'ru';
  return {
    cityCode, langCode,
    cityLabel: CITY_LABEL[cityCode] || cityCode,
    langLabel: LANG_LABEL[langCode] || langCode,
  };
}

function buildAmoNote(form, meta){
  const parts = [
    `🏙 Город: ${meta.cityLabel}   ·   🗣 Язык: ${meta.langLabel}`,
    '—',
    `Источник: ${form.id || 'form'}`,
    `URL: ${location.href}`,
  ];
  if(document.referrer) parts.push(`Referrer: ${document.referrer}`);
  const utmObj = getUtm();
  const utm = UTM_KEYS.map(k => utmObj[k] ? `${k}=${utmObj[k]}` : null).filter(Boolean);
  if(utm.length) parts.push(utm.join(' · '));
  return parts.join('\n');
}

async function sendToAmo(form){
  const meta = detectLeadMeta(form);
  const fd = new FormData();
  fd.append('form_id', AMOCRM_FORM.form_id);
  fd.append('hash', AMOCRM_FORM.hash);
  fd.append('user_origin', '');
  const name = form.elements.name?.value?.trim();
  const phone = '+998' + phoneDigits(form);
  // Append city + lang to the name so the resulting deal title in amoCRM
  // contains the city (used by triggers to auto-assign a city manager).
  // Format: "Гузал · Самарканд · UZ"
  const langTag = (meta.langCode || 'ru').toUpperCase();
  const nameWithMeta = name
    ? `${name} · ${meta.cityLabel} · ${langTag}`
    : `${meta.cityLabel} · ${langTag}`;
  fd.append(AMOCRM_FORM.fields.name, nameWithMeta);
  fd.append(AMOCRM_FORM.fields.phone, phone);
  fd.append(AMOCRM_FORM.fields.note, buildAmoNote(form, meta));
  // utm_* as dedicated fields too (picked up by amo form ingester when the
  // form has matching hidden fields; the note above is the fallback).
  const utm = getUtm();
  UTM_KEYS.forEach(k => { if(utm[k]) fd.append(k, utm[k]); });
  // Tags — sent both as legacy comma-separated and array form so amoCRM picks
  // up whichever shape its form ingester supports. Fallback is the note above.
  const tagList = [meta.cityLabel, `Язык: ${meta.langLabel}`, `Форма: ${form.id || 'unknown'}`];
  fd.append('tags', tagList.join(','));
  tagList.forEach(t => fd.append('tags[]', t));
  try {
    await fetch(AMOCRM_FORM.endpoint, { method:'POST', body:fd, mode:'no-cors', credentials:'omit' });
  } catch(err) { console.warn('amoCRM submit failed', err); }
}

// Send the same lead to our Telegram notifier (Vercel serverless function).
// Runs in parallel with amoCRM — failure here must not break the user flow.
async function sendToTelegram(form){
  const meta = detectLeadMeta(form);
  const name = form.elements.name?.value?.trim() || '';
  const phone = '+998' + phoneDigits(form);
  const payload = {
    name, phone,
    city: meta.cityLabel,
    lang: meta.langLabel,
    source: form.id || 'form',
    url: location.href,
    referrer: document.referrer || '',
    utm: getUtm(),
  };
  try {
    await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true, // survive page navigation to thanks.html
    });
  } catch(err) { console.warn('telegram notify failed', err); }
}

function genEventId(){
  return 'lead_' + Date.now() + '_' + Math.random().toString(36).slice(2,10);
}

// Fires all analytics on a successful lead: Meta Pixel + gtag + Metrika goal.
// gtag/ym calls are guarded — they activate as soon as GA4 / Metrika snippets
// are added to the page.
function fireLeadAnalytics(form, meta, eventId){
  const utm = getUtm();
  const digits = '998' + phoneDigits(form);
  const name = (form.elements.name?.value || '').trim().toLowerCase();
  if(window.fbq){
    // Re-init with Advanced Matching parameters (fbq hashes them client-side)
    try { window.fbq('init', '4251277901808457', { ph: digits, fn: name, ct: meta.cityLabel, country: 'uz' }); } catch(_){}
    window.fbq('track','Lead', {
      content_name: 'open_lesson',
      content_category: meta.cityLabel,
      currency: 'USD',
      value: 1,
    }, { eventID: eventId });
  }
  if(typeof window.gtag === 'function'){
    window.gtag('event', 'generate_lead', Object.assign({
      currency: 'USD',
      value: 1,
      form_id: form.id || 'form',
      city: meta.cityCode,
      lang: meta.langCode,
    }, utm));
  }
  ymReachGoal('lead', Object.assign({
    form: form.id || 'form',
    city: meta.cityCode,
    lang: meta.langCode,
  }, utm));
}

function handleForm(form){
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    // Phone validation: exactly 9 digits after the fixed +998 prefix.
    const digits = phoneDigits(form);
    if(digits.length !== 9){
      const phoneInput = form.elements.phone;
      phoneInput?.closest('label')?.classList.add('has-error');
      phoneInput?.focus();
      return;
    }
    const meta = detectLeadMeta(form);
    const eventId = genEventId();
    sessionStorage.setItem('interno_last_lead_eid', eventId);
    sessionStorage.setItem('interno_last_lead_ph', '998' + digits);
    sessionStorage.setItem('interno_last_lead_fn', (form.elements.name?.value || '').trim().toLowerCase());

    fireLeadAnalytics(form, meta, eventId);
    // Fire amoCRM + Telegram in parallel; navigate as soon as both settle.
    // keepalive on the TG fetch ensures it survives the redirect even if slow.
    await Promise.allSettled([ sendToAmo(form), sendToTelegram(form) ]);
    window.location.href = 'thanks.html';
  });
}
handleForm(document.getElementById('form'));
handleForm(document.getElementById('quizForm'));
handleForm(document.getElementById('modalForm'));

// ===== MODAL =====
const modal = document.getElementById('signupModal');
function openModal(){
  if(!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  if(window.fbq) window.fbq('track','InitiateCheckout', {
    content_name: 'open_lesson_modal',
    currency: 'USD',
    value: 1,
  });
  setTimeout(()=>modal.querySelector('input[name="name"]')?.focus(),300);
}
function closeModal(){
  if(!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
document.addEventListener('click', e=>{
  if(e.target.closest('[data-modal="signup"]')){
    e.preventDefault(); openModal();
  } else if(e.target.closest('[data-modal-close]')){
    closeModal();
  }
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape' && modal?.classList.contains('is-open')) closeModal();
});

// ===== HERO PARALLAX (subtle mouse-follow on scene) =====
const heroVisual = document.getElementById('heroVisual');
if(heroVisual && window.matchMedia('(hover:hover) and (min-width:980px)').matches){
  const scene = heroVisual.querySelector('.hero-scene');
  heroVisual.classList.add('is-parallax');
  let rect = heroVisual.getBoundingClientRect();
  window.addEventListener('resize', ()=>{ rect = heroVisual.getBoundingClientRect(); });
  document.addEventListener('mousemove', e=>{
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const dx = (e.clientX - cx) / window.innerWidth;
    const dy = (e.clientY - cy) / window.innerHeight;
    if(scene){
      scene.style.setProperty('--px', (dx * 22) + 'px');
      scene.style.setProperty('--py', (dy * 16) + 'px');
    }
  });
}

// ===== STICKY MOBILE CTA =====
// Appears after scrolling one viewport height; hidden while the modal is open
// (CSS: body.modal-open) or while the quiz / bottom-form sections are in
// view; click smooth-scrolls to the quiz.
(function(){
  const sticky = document.getElementById('stickyCta');
  if(!sticky) return;
  let formsInView = false;
  function update(){
    const scrolledPastHero = window.scrollY > window.innerHeight;
    sticky.classList.toggle('is-visible', scrolledPastHero && !formsInView);
  }
  window.addEventListener('scroll', update, { passive:true });
  window.addEventListener('resize', update, { passive:true });
  if('IntersectionObserver' in window){
    const visible = new Map();
    const io = new IntersectionObserver(entries=>{
      entries.forEach(en=>visible.set(en.target, en.isIntersecting));
      formsInView = [...visible.values()].some(Boolean);
      update();
    },{ threshold:.15 });
    ['quiz','cta'].forEach(id=>{
      const el = document.getElementById(id);
      if(el) io.observe(el);
    });
  }
  sticky.addEventListener('click',()=>{
    document.getElementById('quiz')?.scrollIntoView({ behavior:'smooth', block:'start' });
  });
  update();
})();

// ===== PRACTICE VIDEOS: click-to-play (replace poster with native video) =====
document.querySelectorAll('.practice-card__player').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const src = btn.dataset.videoSrc;
    if(!src) return;
    const video = document.createElement('video');
    video.className = 'practice-card__video';
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'auto';
    btn.replaceWith(video);
    video.play().catch(()=>{});
    if(window.fbq) window.fbq('trackCustom','VideoPlay', { src: src.split('/').pop() });
  }, { once:true });
});

// ===== META PIXEL: ViewContent on key sections (fires once per section) =====
(function(){
  const targets = document.querySelectorAll('[data-viewcontent]');
  if(!targets.length || !('IntersectionObserver' in window)) return;
  const seen = new Set();
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      const key = en.target.dataset.viewcontent;
      if(seen.has(key)) return;
      seen.add(key);
      if(window.fbq) window.fbq('track','ViewContent', {
        content_name: key,
        content_category: 'landing_section',
      });
    });
  },{threshold:.5});
  targets.forEach(t=>io.observe(t));
})();

// ===== META PIXEL: Scroll depth (25/50/75/90) =====
(function(){
  const marks = [25,50,75,90];
  const fired = new Set();
  let ticking = false;
  function check(){
    ticking = false;
    const h = document.documentElement;
    const scrolled = (h.scrollTop || document.body.scrollTop);
    const max = (h.scrollHeight - h.clientHeight) || 1;
    const pct = Math.round((scrolled / max) * 100);
    marks.forEach(m=>{
      if(pct >= m && !fired.has(m)){
        fired.add(m);
        if(window.fbq) window.fbq('trackCustom','ScrollDepth', { percent: m });
      }
    });
  }
  window.addEventListener('scroll', ()=>{
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(check);
  }, { passive:true });
})();

// ===== META PIXEL: Time-on-page milestone (30s) — engagement signal =====
setTimeout(()=>{
  if(window.fbq) window.fbq('trackCustom','EngagedSession', { seconds: 30 });
}, 30000);
