# WORDPRESS + REACT = REACTPRESS 💛

Start a SEO-friendly Decoupled Wordpress with React in minutes.

## Gettings started

```sh
npm install
# start the dev server.
npm run dev
```

You're ready to go ! You can now start working by looking / hacking / editing **pages** and **components** and **css** directories ! <br /><br />

By default, reactpress uses a demo API, so code is working out of the box. To connect your own API, edit **reactpress.config.js** file and set
**REACTPRESS_WORDPRESS_API_URL** so that is points to your **REST API V2** Wordpress api endpoint.

```js
export default {
  REACTPRESS_WORDPRESS_API_URL:
    "https://dev-reactpress.pantheonsite.io/wp-json/wp/v2"
};
```

## Features

### current features

- Posts list, posts lists by category, posts lists by tag
- Page
- SEO Friendly : Server Side Rendering with Next.js
- Nices seo-friendly urls using wordpress slugs
- Page loader (progress bar)

### planned features

- authentification
- comments

## CSS

there several available ways to manage your css with Reactpress

- css-in-js with styled-jsx, which is shipped by default with Next : https://github.com/zeit/styled-jsx
- you can create classic css files and import them like this :

```js
import "../css/globals.css";
```
