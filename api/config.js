// File: api/config.js
export default function handler(req, res) {
  // This runs on Vercel's server, so it CAN read the environment variable
  const url = process.env.GAS_URL;
  
  if (!url) {
    return res.status(500).json({ error: "GAS_URL environment variable is missing" });
  }

  res.status(200).json({ scriptUrl: url });
}
