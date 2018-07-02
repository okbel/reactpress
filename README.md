# WORPRESS + REACT = REACTPRESS <3

SEO-friendly Decoupled Wordpress with React in minutes : **Reactpress** is a React starter front-end for **Wordpress REST API V2**.<br /><br />

## Gettings started

```sh
npm install
# start the dev server.
npm run dev
```

By default, reactpress uses a demo API, so code is working out of the box.<br />
To connect your own API, edit **reactpress.config.js** file and set
**REACTPRESS_WORDPRESS_API_URL** so that is points to your **REST API V2** Wordpress api endpoint.

```js
export default {
  REACTPRESS_WORDPRESS_API_URL:
    "https://public-api.wordpress.com/wp/v2/sites/reactpressapi.wordpress.com"
};
```

You're ready to go ! You can now start working by looking / hacking / editing **pages** and **themes/minimalist** directories !

You can also create you own theme if you wish, see THEMES section below.

## Features

### current features

- Posts list and full page.
- SEO Friendly : Server Side Rendering with Next.js
- Nices seo-friendly urls using wordpress slugs
- Page loader (progress bar)

### planned features

- comments
- pages
- authentification

## CSS

there several available ways to manage your css with Reactpress

- css-in-js with styled-jsx, which is shipped by default with Next : https://github.com/zeit/styled-jsx
- you can create classic css files and import them like this :

```js
import "../css/globals.css";
```

## THEMES

Reactpress comes with a default "minimalist" theme (./themes/minimalist).
You can copy paste this theme and create your own, all you need is edit .babelrc file
and change @theme alias.

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "@theme": "./themes/minimalist"
        }
      }
    ]
  ]
}
```
