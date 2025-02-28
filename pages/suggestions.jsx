import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Suggestions = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY; // API key from .env.local

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`
        );

        const data = await response.json();
        if (data?.feed) {
          setNews(data.feed);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-6 h-full flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Latest Stock Market News</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex-1 overflow-y-auto border p-4 rounded-lg shadow-inner h-[500px] scrollbar-hide">
            <ul className="space-y-4 max-w-2xl mx-auto">
              {news.map((article, index) => (
                <li
                  key={index}
                  className="p-4 border rounded-lg shadow-md flex gap-4 items-start overflow-hidden"
                >
                  {/* Image Container - Keeps Image Inside Content Width */}
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={article.banner_image || "/fallback-image.png"}
                      alt="News Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* News Content */}
                  <div className="flex-1 min-w-0">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold text-lg block"
                    >
                      {article.title}
                    </a>
                    <p className="text-gray-600">{article.summary}</p>
                    <p className="text-sm text-gray-500">
                      Source: {article.source}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Suggestions;
