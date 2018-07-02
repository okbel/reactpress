# WORPRESS + REACT = REACTPRESS <3

Decoupled Wordpress with React in minutes : **Reactpress** is a React starter front-end for **Wordpress REST API V2**.<br /><br />

This is a minimalist MVP and i am waiting for users feedbacks to determine how best to move forward. If your are interested by this project please get in touch with me and let me know what features matters most for you, or simply add a star to this project to make me know you are interested.

## SEO matters

It is designed from the ground to be SEO-friendly, thanks to Next.js ( Server Side Rendering ) and friendly urls built upon wordpress slugs.

## Gettings started

```sh
npm install
# start the dev server.
npm run dev
```

By default, reactpress uses a demo API, so code is working out of the box.<br />
To connect it to your own API, edit **reactpress.config.js** file.<br />
REACTPRESS_WORDPRESS_API_URL variable **MUST** points to a **REST API V2** Wordpress endpoint.

```js
export default {
  REACTPRESS_WORDPRESS_API_URL:
    "https://public-api.wordpress.com/wp/v2/sites/reactpressapi.wordpress.com"
};
```

## Features

### current features

- Posts list and full page.
- SEO Friendly : Server Side Rendering with Next.js
- Nices seo-friendly urls using wordpress slugs
- page loader (progress bar)

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
