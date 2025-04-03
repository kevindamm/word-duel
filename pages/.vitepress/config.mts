import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Word Duel",
  description: "fun with words and friends",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Games",
        items: [
          { text: "Shuffle", link: "/#" },
          { text: "Predict", link: "/#" },
          { text: "Search", link: "/#" },
          { text: "Cross x2", link: "/#" },
          { text: "Cross x3", link: "/#" },
          { text: "Quoted", link: "/#" },
          { text: "Beehive", link: "/#" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/kevindamm/word-duel" },
    ],
  },
});
