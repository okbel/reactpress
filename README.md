# REACTPRESS

Start you decoupled wordpress with React in minutes.
Reactpress is a React starter front for Wordpress API.

## Features

- list posts.
- nices urls
- SEO Friendly : Server Side Rendering with Next

## Gettings started

Install all the dependencies

```sh
npm install
```

edit reactpress.config.js file.
REACTPRESS_WORDPRESS_API_URL **MUST** points to your **REST API V2** Wordpress endpoint.

```js
export default {
  REACTPRESS_WORDPRESS_API_URL:
    "https://public-api.wordpress.com/wp/v2/sites/petitphilosophe.wordpress.com"
};
```

start the dev server

```
npm run dev
```
