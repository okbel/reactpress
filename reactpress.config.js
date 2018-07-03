module.exports = {
  // use demo site from wp-api
  REACTPRESS_WORDPRESS_API_URL:
    "https://dev-reactpress.pantheonsite.io/wp-json/wp/v2",
  siteInformations: {
    name: "Reactpress",
    slogan: "Start a SEO-friendly decoupled Wordpress with React in minutes"
  },
  mainMenuLinks: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Politique de confidentialité",
      href: "/page?slug=politique-de-confidentialite",
      as: "/page/politique-de-confidentialite"
    },
    {
      title: "Page de démonstration",
      href: "/page?slug=une-page-de-demonstration",
      as: "/page/une-page-de-demonstration"
    }
  ],
  ui: {
    breakpoints: {
      smallScreen: "@media (max-width: 1000px)"
    }
  }
};
