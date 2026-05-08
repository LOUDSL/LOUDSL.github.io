/* ═══════════════════════════════════════════
   partyloud.at — main.js
   Handles: language toggle · FAQ · hamburger menu · chatbot
   ═══════════════════════════════════════════ */

/* ── TRANSLATIONS ── */
const translations = {
  de: {
    'nav.range': 'Range',
    'nav.packages': 'Pakete',
    'nav.how': 'Ablauf',
    'nav.book': 'Jetzt buchen',
    'hero.pill': 'Zentral in Wien — einfach erreichbar',
    'hero.sub': 'Sound, Licht & Effekte mieten — einfach online buchen & zentral in Wien abholen.',
    'hero.cta': 'Pakete ansehen',
    'hero.trust': 'Keine Kaution · Abholung Wien · Sofort verfügbar',
    'trust.1.title': 'Keine Kaution',
    'trust.1.sub': 'Einfach buchen & loslegen',
    'trust.2.title': 'Lieferung ab €49',
    'trust.2.sub': 'Aufbau & Soundcheck ab €99',
    'trust.3.title': 'Plug & Play',
    'trust.3.sub': 'Kein technisches Wissen nötig',
    'trust.4.title': 'Kostenlose Abholung',
    'trust.4.sub': 'Zentral in Wien — einfach erreichbar',
    'how.label': 'So einfach geht\'s',
    'how.title': 'In 3 Schritten zur perfekten Party',
    'how.sub': 'Kein technisches Vorwissen nötig. Wir kümmern uns um den Rest.',
    'how.1.title': 'Online buchen',
    'how.1.body': 'Paket auswählen, Datum checken, direkt online bezahlen — in unter 3 Minuten erledigt. Keine Anfrage, kein Warten.',
    'how.2.title': 'Abholen oder liefern lassen',
    'how.2.body': 'Kostenlose Abholung zentral in Wien — oder wir liefern zu dir ab €49. Aufbau & Soundcheck gibt\'s on top ab €99.',
    'how.3.title': 'Feiern & genießen',
    'how.3.body': 'Du kümmerst dich um deine Gäste. Wir holen alles danach wieder ab. Kein Stress, kein Aufräumen.',
    'pkg.label': 'Unsere Pakete',
    'pkg.title': 'Alles dabei. Einfach buchen.',
    'pkg.sub': 'Komplette Setups — abgestimmt auf deine Eventgröße. Oder stell dir dein eigenes Paket zusammen.',
    'pkg.loud.desc': 'Hauspartys & Geburtstage bis 50 Personen — drinnen, wo die JBL Lichter für Stimmung sorgen',
    'pkg.louder.desc': 'Garten- & Outdoor-Events bis 100 Personen — kein Strom nötig, überall einsetzbar',
    'pkg.addon.desc': 'Mach mehr aus deinem Paket — einfach dazubuchen',
    'range.title': 'Was planst du?',
    'range.1.sub': 'Drinnen · bis 50 Personen',
    'range.1': 'Hausparty',
    'range.2.sub': 'Draußen · kein Strom nötig · bis 100 Personen',
    'range.2': 'Gartenparty',
    'range.3.sub': 'PA · Monitore · Extra Equipment',
    'range.3': 'DJ Setup',
    'range.4.sub': 'Hochzeit · Firmenfeier · Großevent',
    'range.4': 'Individuell anfragen',
    'del.label': 'Lieferung & Aufbau',
    'del.title': 'Wir kommen zu dir.',
    'del.f1': 'Wien — €49 Flatrate, alle Bezirke',
    'del.f2': 'Niederösterreich — Preis nach Entfernung',
    'del.f3': 'Aufbau & Soundcheck auf Wunsch ab €99',
    'del.f4': 'Buchung bis 18:00 Uhr = Lieferung nächsten Tag',
    'del.f5': 'Abholung nach dem Event inklusive',
    'del.cta': '💬 Lieferung anfragen',
    'rev.label': 'Kundenstimmen',
    'rev.title': 'Was unsere Kunden sagen',
    'cov.label': 'Einsatzgebiet',
    'cov.title': 'Wien & ganz NÖ',
    'cov.sub': 'Wir liefern in alle Bezirke Wiens und in ganz Niederösterreich. Abholung kostenlos an unserem Standort in Wien 5.',
    'cov.cta': 'Jetzt Equipment buchen →',
    'faq.label': 'Häufige Fragen',
    'premium.title': 'Großes Event geplant?',
    'premium.sub': 'Firmenfeiern, Hochzeiten, Outdoor-Events — schreib uns und wir erstellen ein individuelles Angebot.',
    'premium.cta': '✉️ Anfrage per E-Mail',
    'footer.tagline': 'Party Equipment mieten in Wien und Niederösterreich. Einfach, schnell, professionell.',
    'footer.wa': '💬 WhatsApp uns',
    'chatbot.greeting': 'Hey! 👋 Welche Art von Event planst du?',
    'chatbot.placeholder': 'Schreib eine Nachricht…',
    'chatbot.title': 'Party Assistent',
    'chatbot.subtitle': 'Online · Antwortet sofort',
    'chatbot.error': 'Ups, da ist was schiefgegangen. Schreib uns direkt auf WhatsApp! 💬',
  },
  en: {
    'nav.range': 'Range',
    'nav.packages': 'Packages',
    'nav.how': 'How it works',
    'nav.book': 'Book now',
    'hero.pill': 'Central Vienna — easy pickup',
    'hero.sub': 'Rent sound, lighting & effects — book online in minutes, pick up in central Vienna.',
    'hero.cta': 'See packages',
    'hero.trust': 'No deposit · Free pickup Vienna · Available now',
    'trust.1.title': 'No deposit',
    'trust.1.sub': 'Just book and go',
    'trust.2.title': 'Delivery from €49',
    'trust.2.sub': 'Setup & soundcheck from €99',
    'trust.3.title': 'Plug & Play',
    'trust.3.sub': 'No technical knowledge needed',
    'trust.4.title': 'Free pickup',
    'trust.4.sub': 'Central Vienna — easy to reach',
    'how.label': 'Simple as that',
    'how.title': '3 steps to the perfect party',
    'how.sub': 'No technical knowledge needed. We take care of the rest.',
    'how.1.title': 'Book online',
    'how.1.body': 'Choose your package, pick a date, pay online — done in under 3 minutes. No back and forth, no waiting.',
    'how.2.title': 'Pick up or get it delivered',
    'how.2.body': 'Free pickup in central Vienna — or we deliver to you from €49. Want us to set up and do the soundcheck too? That\'s from €99 on top.',
    'how.3.title': 'Party & enjoy',
    'how.3.body': 'Focus on your guests. We collect everything afterwards. No stress, no cleanup.',
    'pkg.label': 'Our packages',
    'pkg.title': 'Everything included. Just book.',
    'pkg.sub': 'Complete setups tailored to your event size. Or build your own package.',
    'pkg.loud.desc': 'House parties & birthdays up to 50 people — indoors, where the JBL lights set the mood',
    'pkg.louder.desc': 'Garden & outdoor events up to 100 people — no power needed, works anywhere',
    'pkg.addon.desc': 'Upgrade your package — add what you need',
    'range.title': 'What are you planning?',
    'range.1.sub': 'Indoors · up to 50 people',
    'range.1': 'House party',
    'range.2.sub': 'Outdoors · no power needed · up to 100 people',
    'range.2': 'Garden party',
    'range.3.sub': 'PA · Monitors · Extra gear',
    'range.3': 'DJ Setup',
    'range.4.sub': 'Wedding · Corporate · Large event',
    'range.4': 'Get a custom quote',
    'del.label': 'Delivery & Setup',
    'del.title': 'We come to you.',
    'del.f1': 'Vienna — €49 flat rate, all districts',
    'del.f2': 'Lower Austria — price by distance',
    'del.f3': 'Setup & soundcheck available from €99',
    'del.f4': 'Book by 6pm = delivery next day',
    'del.f5': 'Collection after your event included',
    'del.cta': '💬 Request delivery',
    'rev.label': 'Reviews',
    'rev.title': 'What our customers say',
    'cov.label': 'Coverage',
    'cov.title': 'Vienna & all of Lower Austria',
    'cov.sub': 'We deliver to all Vienna districts and all of Lower Austria. Free pickup at our location in Vienna 5.',
    'cov.cta': 'Book equipment now →',
    'faq.label': 'FAQ',
    'premium.title': 'Planning a big event?',
    'premium.sub': 'Corporate events, weddings, large outdoor events — we\'ll put together a custom proposal for you.',
    'premium.cta': '✉️ Send an enquiry',
    'footer.tagline': 'Party equipment rental in Vienna and Lower Austria. Simple, fast, professional.',
    'footer.wa': '💬 WhatsApp us',
    'chatbot.greeting': 'Hey! 👋 What kind of event are you planning?',
    'chatbot.placeholder': 'Write a message…',
    'chatbot.title': 'Party Assistant',
    'chatbot.subtitle': 'Online · Replies instantly',
    'chatbot.error': 'Something went wrong. Message us directly on WhatsApp! 💬',
  }
};

let currentLang = 'de';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
  localStorage.setItem('loud-lang', lang);

  if (window.chatbot) window.chatbot.updateLang(lang);
}

/* ── FAQ ACCORDION ── */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('open'));
  });
}

/* ── HAMBURGER MENU ── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const overlay = document.getElementById('nav-overlay');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeHamburger);
  });
}

function closeHamburger() {
  const btn = document.getElementById('hamburger');
  const overlay = document.getElementById('nav-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  btn && btn.classList.remove('open');
  btn && btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ── AGB MODAL ── */
function openAGB(e) {
  e && e.preventDefault();
  const modal = document.getElementById('agb-modal');
  if (modal) { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeAGB() {
  const modal = document.getElementById('agb-modal');
  if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
}

/* ── CHATBOT ── */
class Chatbot {
  constructor() {
    this.isOpen = false;
    this.history = []; // {role, content} pairs for API
    this.lang = currentLang;
    this.busy = false;
    this.render();
    this.attachEvents();
  }

  render() {
    const el = document.createElement('div');
    el.id = 'chatbot-root';
    el.innerHTML = `
      <button class="chatbot-trigger" id="chatbot-trigger" aria-label="Chat öffnen">💬</button>
      <div class="chatbot-window" id="chatbot-window" role="dialog" aria-label="Party Assistent">
        <div class="chatbot-header">
          <div class="chatbot-avatar">🎉</div>
          <div class="chatbot-title">
            <strong id="cb-title" data-i18n="chatbot.title">${translations[this.lang]['chatbot.title']}</strong>
            <span id="cb-subtitle" data-i18n="chatbot.subtitle">${translations[this.lang]['chatbot.subtitle']}</span>
          </div>
          <button class="chatbot-close" id="chatbot-close" aria-label="Schließen">✕</button>
        </div>
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <div class="chatbot-input-area">
          <input type="text" class="chatbot-input" id="chatbot-input"
            placeholder="${translations[this.lang]['chatbot.placeholder']}"
            data-i18n-placeholder="chatbot.placeholder"
            autocomplete="off" maxlength="400">
          <button class="chatbot-send" id="chatbot-send" aria-label="Senden">↑</button>
        </div>
      </div>
    `;
    document.body.appendChild(el);
  }

  attachEvents() {
    document.getElementById('chatbot-trigger').addEventListener('click', () => this.open());
    document.getElementById('chatbot-close').addEventListener('click', () => this.close());

    const input = document.getElementById('chatbot-input');
    const send = document.getElementById('chatbot-send');

    send.addEventListener('click', () => this.submitInput());
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.submitInput(); } });
  }

  open() {
    this.isOpen = true;
    document.getElementById('chatbot-trigger').classList.add('hidden');
    document.getElementById('chatbot-window').classList.add('open');
    document.getElementById('chatbot-input').focus();
    if (this.history.length === 0) this.addGreeting();
  }

  close() {
    this.isOpen = false;
    document.getElementById('chatbot-trigger').classList.remove('hidden');
    document.getElementById('chatbot-window').classList.remove('open');
  }

  addGreeting() {
    const greeting = translations[this.lang]['chatbot.greeting'];
    this.addMessage('bot', greeting);
    this.history.push({ role: 'assistant', content: greeting });
  }

  addMessage(role, text) {
    const msgs = document.getElementById('chatbot-messages');
    const div = document.createElement('div');
    div.className = `chat-msg ${role}`;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  showTyping() {
    const msgs = document.getElementById('chatbot-messages');
    const div = document.createElement('div');
    div.className = 'chatbot-typing';
    div.id = 'chatbot-typing';
    div.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  hideTyping() {
    const t = document.getElementById('chatbot-typing');
    if (t) t.remove();
  }

  setBusy(busy) {
    this.busy = busy;
    const send = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');
    if (send) send.disabled = busy;
    if (input) input.disabled = busy;
  }

  submitInput() {
    if (this.busy) return;
    const input = document.getElementById('chatbot-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    this.addMessage('user', text);
    this.history.push({ role: 'user', content: text });
    this.sendToAPI();
  }

  async sendToAPI() {
    this.setBusy(true);
    this.showTyping();
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: this.history, language: this.lang })
      });
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const reply = data.response || translations[this.lang]['chatbot.error'];
      this.hideTyping();
      this.addMessage('bot', reply);
      this.history.push({ role: 'assistant', content: reply });
    } catch {
      this.hideTyping();
      this.addMessage('bot', translations[this.lang]['chatbot.error']);
    } finally {
      this.setBusy(false);
    }
  }

  updateLang(lang) {
    this.lang = lang;
    const titleEl = document.getElementById('cb-title');
    const subtitleEl = document.getElementById('cb-subtitle');
    const inputEl = document.getElementById('chatbot-input');
    if (titleEl) titleEl.textContent = translations[lang]['chatbot.title'];
    if (subtitleEl) subtitleEl.textContent = translations[lang]['chatbot.subtitle'];
    if (inputEl) inputEl.placeholder = translations[lang]['chatbot.placeholder'];
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Language auto-detect
  const saved = localStorage.getItem('loud-lang');
  const browser = navigator.language?.startsWith('de') ? 'de' : 'en';
  setLang(saved || browser);

  initFAQ();
  initHamburger();

  // AGB modal backdrop close
  const agbModal = document.getElementById('agb-modal');
  if (agbModal) {
    agbModal.addEventListener('click', e => { if (e.target === agbModal) closeAGB(); });
  }

  // Chatbot
  window.chatbot = new Chatbot();
});
