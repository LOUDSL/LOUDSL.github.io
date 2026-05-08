/* Netlify Function — chatbot proxy for Anthropic API
   Accessed via /api/chat (redirect configured in netlify.toml)
   Requires env var: ANTHROPIC_API_KEY
*/

const SYSTEM_PROMPT = `Du bist der freundliche Assistent von LOUD Sound und Licht e.U. (partyloud.at) in Wien. Du hilfst Kunden dabei, das richtige Equipment für ihre Party oder ihr Event zu finden. Antworte immer in der Sprache des Kunden (Deutsch oder Englisch). Sei kurz, freundlich und direkt — maximal 2-3 Sätze pro Antwort. Stelle Fragen um herauszufinden was der Kunde braucht.

Empfehle eines der drei Pakete:
- LOUD (€69/Tag, 2x JBL PartyBox Stage 320, Hauspartys bis 50 Personen, drinnen)
- LOUDER (€89/Tag, 2x Soundboks 4, Outdoor bis 100 Personen, kein Strom nötig)
- PARTYKART (€189/Tag, komplett kabelloses Outdoor-Setup: 2x Soundboks + Laserbar + Powerstation + Stative + Gartenwagen, ideal für Donauinsel, Prater, Rooftops)

Zusatz-Equipment: Laserbar €25/Tag, Nebelmaschine €15/Tag, Funkmikrofon €15/Tag.
Lieferung Wien €49 Flatrate, Aufbau+Soundcheck ab €99.
Keine Kaution, Selbstbehalt €150 (Verzicht €9 add-on beim Checkout).
Kostenlose Abholung: Schönbrunner Straße 36/23, 1050 Wien (2. Stiege durch den Innenhof).

Für große Events (Firmenfeiern, Hochzeiten) verweise auf office@partyloud.at.
Verlinke nie externe Websites außer partyloud.at.`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { messages } = body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'messages required' }) };
  }

  // Keep last 10 turns to control cost
  const trimmed = messages.slice(-10);

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: trimmed,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', err);
      return { statusCode: 502, body: JSON.stringify({ error: 'Upstream error' }) };
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || '';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response: reply }),
    };
  } catch (err) {
    console.error('Chat function error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
