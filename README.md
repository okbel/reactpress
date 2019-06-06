**WARNING**: The current version is very much a WIP, this is NOT DONE (not even close). It will undergo many api modifications in the near future, while you are encouraged to use it, remember the possibility of these changes. The docs are not entirely updated, and there WILL be bugs! You can go and look around the different branchs to find a more working (but old) approach.

# ReactPress

**Reactpress** is a starter-kit to create a Next.js ( **SEO-friendly** React ) front-end backed by the Wordpress Graphql Plugin. 

*Reactpress* is built upon [Next.js](https://github.com/zeit/next.js/) for Server Side Rendering, so if your are not familiar with Next.js, you should take a quick look at it. ⚡ 

<center>

|                    REACT                     |                    NEXT                     |                    WORDPRESS                     |
| :------------------------------------------: | :-----------------------------------------: | :----------------------------------------------: |
| <img height="80" src="./images/react.svg" /> | <img height="70" src="./images/next.png" /> | <img height="70" src="./images/wordpress.svg" /> |

</center>


## GETTING STARTED

### Install and configure Wordpress

- Enable wp-graphql extension : https://wpgraphql.com/docs/getting-started/install-and-activate/
- Add this to your wp-config.php to make sure CORS are enabled :

```php
// allow CORS
header("Access-Control-Allow-Origin: *");
```

### Install ReactPress

```sh
npm install
# start the dev server.
npm run dev
```

By default, reactpress uses a demo API. To connect your own API, edit **reactpress.config.js** file and edit variable **wordpressGraphqlEndpoint** so that it points to your wordpress graphql endpoint.

```js
export default {
  wordpressGraphqlEndpoint: "https://dev-reactpress.pantheonsite.io/graphql"
};
```

You're ready to go ! You can now start working by looking / hacking / editing files from **themes/starter** directory.

## Features

- 🧘 SEO Friendly : Server Side Rendered with Next.js
- ⚡️ Post, Posts list, posts by category, posts by tag
- 💅 **Easy to customize.** Create and use real customizable themes.

## CSS

There are several available ways to manage your css with Next.js.

- You can create classic css files and import them like this in your component :

```js
import "../css/globals.css";
```

- *css-in-js* available through styled-components.

## Deployment

```sh
# compile for production
npm run build

# start the production server
npm run start
```

*Reactpress* needs a node server, because on the first page load, html is served by a node server (that's why search engines are able to crawl your content).

If you don't want to manage a server yourself, Next.js plays really well with `now` : this is a very easy way to deploy a *next.js* app : https://zeit.co/now