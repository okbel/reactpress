# REACTPRESS

Start your SEO-friendly decoupled Wordpress site with React in minutes.

**Reactpress** is a minimalist and ready-to-use React front-end for **Wordpress REST API V2**

## Features

- Posts.
- Nices seo-friendly urls using wordpress slugs
- SEO Friendly : Server Side Rendering with Next.js

Planned :

- comments
- pages
- authentification

## Gettings started

Install all the dependencies:

```sh
npm install
```

edit reactpress.config.js file.
REACTPRESS_WORDPRESS_API_URL **MUST** points to your **REST API V2** Wordpress endpoint.

```js
export default {
  REACTPRESS_WORDPRESS_API_URL:
    "https://public-api.wordpress.com/wp/v2/sites/reactpressapi.wordpress.com"
};
```

start the dev server.

```
npm run dev
```
