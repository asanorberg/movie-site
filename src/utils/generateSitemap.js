import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
const BEARER = process.env.VITE_API_BEARER || import.meta.env.VITE_API_BEARER;

const BASE_URL = "https://movie-site-orpin.vercel.app/";

const staticPaths = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/favorites", changefreq: "weekly", priority: 0.8 },
];

async function fetchDynamicPaths() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results.map((movie) => ({
      url: `/movies/${movie.id}`, // Dynamisk URL baserad på film-ID
      changefreq: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error fetching dynamic paths:", error);
    return [];
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(
    path.join(__dirname, "../../public", "sitemap.xml")
  );

  sitemapStream.pipe(writeStream);

  staticPaths.forEach((path) => sitemapStream.write(path));

  const dynamicPaths = await fetchDynamicPaths();
  dynamicPaths.forEach((path) => sitemapStream.write(path));

  sitemapStream.end();
  await streamToPromise(sitemapStream);
  console.log("Sitemap generated successfully!");
})();
