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
    'ps.badge': '⚡ Saubere Energie · Überall',
    'ps.title': 'POWER OHNE GRENZEN',
    'ps.desc': 'Keine Generatoren, kein Lärm, kein Diesel. Unsere Fossibot F2400 Powerstationen liefern saubere, portable Energie — für jede Location und jeden Anlass.',
    'ps.card1.title': 'Lautsprecher',
    'ps.card1.desc': 'Aktiv-Speaker & PA-Anlagen — stundenlang, kein Strom nötig',
    'ps.card2.title': 'Licht & Effekte',
    'ps.card2.desc': 'Laserbar, Nebel & LEDs — überall ohne Stromanschluss',
    'ps.card3.title': 'DJ Equipment',
    'ps.card3.desc': 'Controller, Mixer & Monitore — volle Performance im Freien',
    'ps.card4.title': 'Filming & Content',
    'ps.card4.desc': 'Kameras, Drohnen & Laptops — ideal für Drehtage on location',
    'ps.cta': '📅 Jetzt buchen',
    'ps.spec1': 'Ausgangsleistung',
    'ps.spec2': 'Kapazität',
    'ps.spec3': '100% sauber',
    'ps.spec3.sub': 'Kein Generator · Kein Lärm',
    'ps.spec4': 'Alle Gerätetypen',
    'booking.label': 'Direkt online buchen',
    'booking.title': 'Alle Geräte. Verfügbarkeit prüfen.',
    'booking.sub': 'Wähle dein Equipment, prüfe die Verfügbarkeit und buche direkt — ohne Umwege.',
    'pk.badge': '⚡ Neu — Exklusiv bei LOUD',
    'pk.desc': 'Donauinsel, Prater, Rooftop — 100% batteriebetrieben, kein Strom nötig, überall einsetzbar.',
    'pk.included': 'Was dabei ist — alles inklusive',
    'pk.item1.desc': '126dB · 40h Akku · Wetterfest',
    'pk.item2.desc': 'Profi Lichtshow · Plug & Play',
    'pk.item3.desc': '2400W · Versorgt alles stundenlang',
    'pk.item4.desc': 'Optimal ausgerichtet · Stabil',
    'pk.item5.desc': 'Gartenwagen · Kein Generator',
    'pk.for': 'Perfekt für:',
    'rev.google': '⭐ 5.0 · 12 Bewertungen auf Google',
    'rev.all': 'Alle Bewertungen auf Google ansehen →',
    'faq.1.q': 'Brauche ich technisches Wissen?',
    'faq.1.a': 'Kurz gesagt: nein. Unsere Systeme sind so einfach wie möglich gehalten — vor allem die Akku-Lautsprecher, die einfach per Bluetooth verbunden werden. Bei komplexeren Setups schicken wir dir vor der Abholung eine PDF-Anleitung mit Aufbau und Troubleshooting, damit du für alles gewappnet bist.',
    'faq.2.q': 'Gibt es eine Kaution oder einen Selbstbehalt?',
    'faq.2.a': 'Keine Kaution — du hinterlegst nichts im Voraus. Das Equipment ist vollversichert. Bei normaler Nutzung entstehen keinerlei Kosten. Nur bei grober Fahrlässigkeit greift ein Selbstbehalt von €150 — deutlich weniger als bei anderen Anbietern. Für nur €9 kannst du diesen beim Checkout auf €0 reduzieren.',
    'faq.3.q': 'Kann ich auch kurzfristig buchen?',
    'faq.3.a': 'Ja — du kannst theoretisch eine Stunde im Voraus buchen, solange das Equipment verfügbar ist. Bei Abholbuchungen kein Problem. Bei Lieferungen unter 24h im Voraus melden wir uns sofort und finden gemeinsam eine Lösung.',
    'faq.4.q': 'Wie funktioniert die Lieferung?',
    'faq.4.a': 'Lieferung & Abholung nach dem Event kostet €49 Flatrate in ganz Wien. Aufbau & Soundcheck gibt\'s ab €99 on top. Buchung bis 18:00 Uhr = Lieferung am nächsten Tag garantiert.',
    'faq.5.q': 'Liefert ihr auch außerhalb von Wien?',
    'faq.5.a': 'Ja — wir liefern innerhalb von 99km ab der Wiener Stadtgrenze, also ganz Niederösterreich. Den Lieferaufpreis kannst du direkt beim Checkout hinzufügen. Für größere Distanzen einfach anfragen.',
    'faq.6.q': 'Kann ich eigene Musik abspielen?',
    'faq.6.a': 'Absolut — fast alle unsere Speaker verbinden sich per Bluetooth, AUX oder USB. DJ-Controller oder Mixer anschließen geht auch — gib uns nach der Buchung kurz Bescheid welches Kabel du brauchst und wir legen\'s dazu.',
    'faq.7.q': 'Was passiert wenn etwas kaputt geht?',
    'faq.7.a': 'Passiert — kein Drama. Das Equipment ist versichert. Wichtig: meld dich sofort bei uns, damit wir schnell reagieren können. Bei normalen Gebrauchsspuren entstehen keine Kosten — der €150 Selbstbehalt greift nur bei grober Fahrlässigkeit.',
    'faq.8.q': 'Kann ich mein Paket anpassen?',
    'faq.8.a': 'Ja — beim Checkout kannst du direkt Extra-Equipment dazubuchen. Auf unserer Produktseite siehst du alles im Sortiment. Wenn du etwas Bestimmtes suchst, schick uns kurz eine WhatsApp oder Email — wir antworten schnell.',
    'footer.contact': 'Kontakt',
    'chatbot.greeting': 'Hey! 👋 Welche Art von Event planst du?',
    'chatbot.placeholder': 'Schreib eine Nachricht…',
    'chatbot.title': 'Bassi 🎵',
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
    'ps.badge': '⚡ Clean Energy · Anywhere',
    'ps.title': 'POWER WITHOUT LIMITS',
    'ps.desc': 'No generators, no noise, no diesel. Our Fossibot F2400 power stations deliver clean, portable energy — for any location and any occasion.',
    'ps.card1.title': 'Speakers',
    'ps.card1.desc': 'Active speakers & PA systems — hours of runtime, no mains needed',
    'ps.card2.title': 'Lights & Effects',
    'ps.card2.desc': 'Laser bar, fog machine & LEDs — anywhere, no power outlet required',
    'ps.card3.title': 'DJ Equipment',
    'ps.card3.desc': 'Controllers, mixers & monitors — full DJ performance outdoors',
    'ps.card4.title': 'Filming & Content',
    'ps.card4.desc': 'Cameras, drones & laptops — perfect for shoot days on location',
    'ps.cta': '📅 Book now',
    'ps.spec1': 'Output power',
    'ps.spec2': 'Capacity',
    'ps.spec3': '100% clean',
    'ps.spec3.sub': 'No generator · No noise',
    'ps.spec4': 'All device types',
    'booking.label': 'Book directly online',
    'booking.title': 'All equipment. Check availability.',
    'booking.sub': 'Browse equipment, check availability and book directly — no back and forth.',
    'pk.badge': '⚡ New — Exclusive to LOUD',
    'pk.desc': 'Donauinsel, Prater, rooftops — 100% battery powered, no mains needed, usable anywhere.',
    'pk.included': "What's included — everything",
    'pk.item1.desc': '126dB · 40h battery · Weatherproof',
    'pk.item2.desc': 'Pro light show · Plug & Play',
    'pk.item3.desc': '2400W · Powers everything for hours',
    'pk.item4.desc': 'Optimally positioned · Stable',
    'pk.item5.desc': 'Garden trolley · No generator',
    'pk.for': 'Perfect for:',
    'rev.google': '⭐ 5.0 · 12 reviews on Google',
    'rev.all': 'See all reviews on Google →',
    'faq.1.q': 'Do I need technical knowledge?',
    'faq.1.a': 'Short answer: no. Our systems are kept as simple as possible — especially the battery speakers, which just connect via Bluetooth. For more complex setups we send you a PDF guide with setup instructions and troubleshooting before pickup, so you\'re prepared for everything.',
    'faq.2.q': 'Is there a deposit or excess?',
    'faq.2.a': 'No deposit — you don\'t put anything down upfront. The equipment is fully insured. For normal use there are no costs whatsoever. Only in cases of gross negligence does an excess of €150 apply — far less than other providers. For just €9 you can reduce this to €0 at checkout.',
    'faq.3.q': 'Can I book last minute?',
    'faq.3.a': 'Yes — in theory you can book an hour in advance, as long as the equipment is available. For pickup bookings no problem at all. For deliveries with less than 24h notice we\'ll get in touch immediately and find a solution together.',
    'faq.4.q': 'How does delivery work?',
    'faq.4.a': 'Delivery & collection after your event costs €49 flat rate across all of Vienna. Setup & soundcheck is available from €99 on top. Book by 6pm = delivery next day guaranteed.',
    'faq.5.q': 'Do you deliver outside Vienna?',
    'faq.5.a': 'Yes — we deliver within 99km of the Vienna city boundary, covering all of Lower Austria. You can add the delivery surcharge directly at checkout. For longer distances just get in touch.',
    'faq.6.q': 'Can I play my own music?',
    'faq.6.a': 'Absolutely — almost all our speakers connect via Bluetooth, AUX or USB. Connecting a DJ controller or mixer works too — just let us know after booking which cable you need and we\'ll include it.',
    'faq.7.q': 'What happens if something breaks?',
    'faq.7.a': 'It happens — no drama. The equipment is insured. Important: let us know immediately so we can react quickly. Normal wear and tear has no costs — the €150 excess only applies in cases of gross negligence.',
    'faq.8.q': 'Can I customise my package?',
    'faq.8.a': 'Yes — at checkout you can add extra equipment directly. On our product page you can see everything we carry. If you\'re looking for something specific, send us a quick WhatsApp or email — we respond fast.',
    'footer.contact': 'Contact',
    'chatbot.greeting': 'Hey! 👋 What kind of event are you planning?',
    'chatbot.placeholder': 'Write a message…',
    'chatbot.title': 'Bassi 🎵',
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

/* ── HERO VIDEO — slow-mo loop between clip start and end ── */
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  const CLIP_START  = 3;   // seconds into the raw file
  const CLIP_END    = 11;  // seconds into the raw file
  const PLAY_RATE   = 0.4; // 0.4× = slow motion

  function startClip() {
    video.currentTime = CLIP_START;
    video.playbackRate = PLAY_RATE;
    video.play().catch(() => {}); // silently handle autoplay blocks
  }

  video.addEventListener('loadedmetadata', startClip);

  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= CLIP_END) {
      video.currentTime = CLIP_START;
    }
  });

  // Fallback: if metadata already loaded (cached)
  if (video.readyState >= 1) startClip();
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Language auto-detect
  const saved = localStorage.getItem('loud-lang');
  const browser = navigator.language?.startsWith('de') ? 'de' : 'en';
  setLang(saved || browser);

  initHeroVideo();
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
