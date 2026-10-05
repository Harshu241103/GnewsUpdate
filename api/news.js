export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { category = 'general', lang = 'en', q } = req.query;
  const apiKey = process.env.GNEWS_API_KEY || "f48d5fd5f338809cfd0cd8c90263139d";

  let url;
  if (q) {
    url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=${lang}&apikey=${apiKey}`;
  } else {
    url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&apikey=${apiKey}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch live news', details: error.message });
  }
}
