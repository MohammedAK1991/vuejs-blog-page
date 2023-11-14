# ex-app-nuxt

This is the code test we have for the senior level candidates.

In the next section we will describe some requirements written from the perspective of a Product Manager.

### Requirements

The following requirements need to be fulfilled in order to pass the test:

- [ ] We want to show ads in the blog page, the same way we show them in the other 2 pages, one sidebar ad with the id `ad-placement-id-FAEEC2623F` and an in content block ad after the first paragraph, with the id `ad-placement-id-342AEA22AA`.
- [ ] We need to make sure that the ads are repainted on each navigation.
- [ ] We want to achieve a CLS score below 0.1 on each page.
- [ ] We want to make sure we don't render ads in positions that are not visible depending on the device.
- [ ] We need the content of the page, meta title, and meta description to be served through a REST API. Both the content and meta information must be available on the first render of the page.
- [ ] We want the site to be hosted on the cloud without having to manage servers.
- [ ] We would like to keep track of the infrastructure changes in the same way we keep track of the code changes (IaC) and be able to apply them programmatically.
- [ ] We would like to deploy the changes frequently and in automated fashion. Can we update live site on every push to the default branch?

## Build Setup

Node version: `16.9.1`.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
