export default function manifest() {
  return {
    name:             "Indrajeet — Creative Designer",
    short_name:       "Indrajeet",
    description:      "Enterprise UX designer",
    start_url:        "/",
    display:          "standalone",
    background_color: "#080808",
    theme_color:      "#ff6b1a",
    lang:             "en",
    icons: [
      { src: "/photo/favicon.png", sizes: "192x192", type: "image/png" },
      { src: "/photo/favicon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
