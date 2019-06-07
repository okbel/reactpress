**WARNING**: The current version is very much a WIP, this is NOT DONE (not even close). It will undergo many api modifications in the near future, while you are encouraged to use it, remember the possibility of these changes. The docs are not entirely updated, and there WILL be bugs! You can go and look around the different branchs to find a more working (but old) approach.

# ReactPress

**Reactpress** is a starter-kit to create a Next.js ( **SEO-optimized** React ) front-end backed by the Wordpress Graphql Plugin. The aim of the repository is to achieve a one-click front-end solution. 

*Reactpress* is built upon [Next.js](https://github.com/zeit/next.js/) for Server Side Rendering, so if your are not familiar with Next.js, you should take a quick look at it. ⚡ 


|                    REACT                     |                    NEXT                     |                    WORDPRESS                     |
| :------------------------------------------: | :-----------------------------------------: | :----------------------------------------------: |
| <img height="80" src="./images/react.svg" /> | <img height="70" src="./images/next.png" /> | <img height="70" src="./images/wordpress.svg" /> |



## GETTING STARTED

### Install and configure Wordpress

- Enable wp-graphql extension: https://wpgraphql.com/docs/getting-started/install-and-activate/
- Add the following to your wp-config.php to make sure CORS is enabled and pointing to your front-end or `*`:

```php
// allow CORS
header("Access-Control-Allow-Origin: *");
```

### Install ReactPress

```sh
yarn
# start the development server.
yarn dev
```

By default, reactpress will use a demo API. To connect your own API, create a `constants.ts` file on the `lib` folder and add a constant called: **WORDPRESS_GRAPHQL_BACKEND** so that it points to your wordpress graphql endpoint.

```ts
const WORDPRESS_GRAPHQL_BACKEND= "https://www.yourwebsite.com/graphql"
```

Make sure to insert the correc URL (Pay attention on HTTPS, www redirects, etc...)

If everything is installed correctly you are ready to go.

## Features

- 🧘 SEO Friendly: Server Side Rendered with Next.js.
- ⚡️ Posts, categories, posts by category and posts by tag.

### Planned Features

- Themes
- Easy to add plugins (Like Google Analytics, Adsense, etc...)
- Caching content.

## CSS

There are several available ways to manage your css with Next.js.

- You can create classic css files and import them like this in your component :

```js
import "../css/globals.css";
```

Or approach them the *css-in-js* way, which is available through styled-components.

## Deployment

```sh
# compile for production
yarn build

# start the production server
yarn start
```
*Main contributors*:
yann-yinn
itstimetogoleft