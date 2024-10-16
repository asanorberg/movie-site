import { defineConfig } from "cypress";

export default defineConfig({
  // projectId: "e5rhii",
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://movie-site-orpin.vercel.app/",
  },
});
