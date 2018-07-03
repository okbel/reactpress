module.exports = {
  // used by ./services/wpapi to create api url
  wordpressUrl: "https://dev-reactpress.pantheonsite.io",
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
    },
    {
      title: "Github",
      href: "https://github.com/nyl-auster/reactpress",
      as: ""
    }
  ],
  ui: {
    breakpoints: {
      smallScreen: "@media (max-width: 1000px)"
    }
  }
};
