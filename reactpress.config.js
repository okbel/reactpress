module.exports = {
  // use demo site from wp-api
  REACTPRESS_WORDPRESS_API_URL:
    "https://dev-reactpress.pantheonsite.io/wp-json/wp/v2",
  siteInformations: {
    name: "REACTPRESS",
    slogan: "Start a SEO-friendly decoupled Wordpress with React in minutes"
  },
  mainMenuLinks: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About",
      href: "/page?slug=about",
      as: "/page/about"
    }
  ],
  ui: {
    breakpoints: {
      smallScreen: "@media (max-width: 1000px)"
    }
  }
};
