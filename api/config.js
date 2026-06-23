// Runs on Vercel's serverless runtime. Reads the Apps Script web app URL
// from an environment variable at request time, so it's never hardcoded
// in the page's HTML/JS where anyone viewing source could find it.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const scriptUrl = process.env.SCRIPT_URL || '';
  if (!scriptUrl) {
    res.status(200).json({ error: 'SCRIPT_URL environment variable is not set in Vercel.' });
    return;
  }
  res.status(200).json({ scriptUrl });
}
