# weibo

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

## 安装预处理器
``` bash
$ npm install --save-dev pug@2.0.0-beta6 pug-loader coffee-script coffee-loader node-sass sass-loader
```

## 在使用vue-awesome 、material-design 、font-awesome时遇到的问题

``` bash
vue.runtime.esm.js:475[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
```

在使用 plugins 引入vue-awesome和material-design时，控制台会报以上错误，虽然不影响使用但是还是很恶心的。并且在build时，网上有人说 会消失，所以就不使用了，留一个TODO。
采用的是 font-awesome的比较原始的http引用， 很尬

