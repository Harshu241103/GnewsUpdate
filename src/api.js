import { API_KEY } from './config';

// Rich fallback articles for when API_KEY is default or rate-limited
const MOCK_NEWS = {
  en: {
    general: [
      {
        title: "Global Tech Summit 2026 Announces Breakthrough Innovations in AI & Renewable Energy",
        description: "Industry leaders gather to showcase next-generation artificial intelligence models and sustainable energy solutions transforming global infrastructure.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        publishedAt: new Date().toISOString(),
        source: { name: "TechDaily", url: "https://gnews.io" },
        url: "https://gnews.io"
      },
      {
        title: "Space Exploration Mission Discovers New Water Ice Deposits on Mars",
        description: "Scientists analyzing recent satellite telemetry confirm sub-surface ice reservoirs that could support future crewed planetary missions.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Science World", url: "https://gnews.io" },
        url: "https://gnews.io"
      },
      {
        title: "Global Economic Forum Highlights Strong Growth Outlook in Emerging Markets",
        description: "Financial analysts predict sustained digital expansion and manufacturing investments across South Asia and Latin America.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Global Finance", url: "https://gnews.io" },
        url: "https://gnews.io"
      }
    ],
    world: [
      {
        title: "International Climate Agreement Signed by 190 Nations",
        description: "Delegates commit to aggressive carbon reduction targets and renewable grid investments over the next decade.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        publishedAt: new Date().toISOString(),
        source: { name: "World News Network", url: "https://gnews.io" },
        url: "https://gnews.io"
      }
    ],
    business: [
      {
        title: "Stock Markets Reach Record Highs Following Strong Earnings Reports",
        description: "Major tech and green energy firms report historic quarterly revenue growth exceeding wall street expectations.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
        publishedAt: new Date().toISOString(),
        source: { name: "MarketWatch", url: "https://gnews.io" },
        url: "https://gnews.io"
      }
    ]
  },
  hi: {
    general: [
      {
        title: "तकनीक और नवाचार के क्षेत्र में भारत की नई उपलब्धि",
        description: "डिजिटल इंडिया और एआई अनुसंधान में देश भर के शोधकर्ताओं ने हासिल की बड़ी सफलता।",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        publishedAt: new Date().toISOString(),
        source: { name: "दैनिक समाचार", url: "https://gnews.io" },
        url: "https://gnews.io"
      }
    ]
  },
  gu: {
    general: [
      {
        title: "ગુજરાતમાં ટેકનોલોજી અને ઉદ્યોગ ક્ષેત્રે નવો વિકાસ",
        description: "નવીનતમ સંશોધન અને ઉદ્યોગ સાહસિકતા માટે રજૂ કરાઈ નવી યોજનાઓ.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        publishedAt: new Date().toISOString(),
        source: { name: "ગુજરાત સમાચાર", url: "https://gnews.io" },
        url: "https://gnews.io"
      }
    ]
  }
};

export async function fetchNews(category = 'general', lang = 'en') {
  const isKeyDefault = !API_KEY || API_KEY === "YOUR API KEY" || API_KEY.trim() === "";
  
  if (!isKeyDefault) {
    try {
      const res = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&apikey=${API_KEY.trim()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.articles && json.articles.length > 0) {
          return { articles: json.articles, isFallback: false };
        }
      }
    } catch (e) {
      console.warn("API fetch error, using fallback data:", e);
    }
  }

  // Fallback to sample news articles so the page is never blank
  const langNews = MOCK_NEWS[lang] || MOCK_NEWS['en'];
  const articles = langNews[category] || langNews['general'] || MOCK_NEWS['en']['general'];
  
  return { 
    articles, 
    isFallback: true, 
    keyMissing: isKeyDefault 
  };
}
