# Markuper start

## Getting started

* Install [node.js](https://nodejs.org/).
    To check if node is installed type in command line
```bash
node -v
```
* Install Webpack globally
```bash
npm i webpack -g
```
* Install all node packages (execute in project directory):
```bash
npm i
```
* Start working on project (execute in project directory):
```bash
webpack
```
or type this:
```bash
npm run build
```
Last two commands will create all css and js bundles + create sprite image 
(if directory `img/sprite` contains images).

To start watching for changes in `*.css` and `*.js` files type this command
```bash
npm start
```
or type this:
```bash
webpack --watch
```
After all these actions you should get message in CLI like this:
```bash
Webpack is watching the files…

Hash: 34ba83d1ec4d941d5c0d
Version: webpack 3.4.1
Time: 2654ms
                Asset     Size  Chunks                    Chunk Names
        bundle.min.js   272 kB       0  [emitted]  [big]  main
../css/bundle.min.css  2.19 kB       0  [emitted]         main
   [0] ./js/local.js 651 bytes {0} [built]
   [2] ./postcss/styles.css 41 bytes {0} [built]
   [3] ./node_modules/css-loader!./node_modules/postcss-loader/lib?{"plugins":[null,{"version":"6.0.6","plugins":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"postcssPlugin":"postcss-cssnext","postcssVersion":"6.0.6"},null]}!./postcss/styles.css 2.36 kB [built]
    + 4 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js!node_modules/postcss-loader/lib/index.js??ref--3-3!postcss/styles.css:
       [0] ./node_modules/css-loader!./node_modules/postcss-loader/lib?{"plugins":[null,{"version":"6.0.6","plugins":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"postcssPlugin":"postcss-cssnext","postcssVersion":"6.0.6"},null]}!./postcss/styles.css 2.36 kB {0} [built]
        + 1 hidden module
```

## General principles

### Components

Component consist of:
* markup template (located in `markup/components`)
* [optional] data (located in `markup/data`)
* [optional] default parameters (located in `markup/default-parameters`)

To include component call function includeComponent(string $name, string $dataFilePath = '', array $arParams = array())

In template will be available two php variables:
* `$arParams` - composed of default parameters and parameters passed during function call
* `$arResult` - populated with data from `markup/data/{$dataFilePath}.php`

#### Default parameters

Default parameters for component could be set in two places `markup/default-parameters/.global.php`
 and `markup/default-parameters/[component's name].php`

Component's specific default parameters file is optional.
 
#### Example

`<?php includeComponent('nav/menu', 'menu/simple', ['MODIFIER' => 'green']);?>`

This call means that will be included `markup/components/nav/menu.php` file
with passed into it
* `$arParams` composed of `markup/default-parameters/.global.php`,
`markup/default-parameters/nav/menu.php` _(if exists)_ and `['MODIFIER' => 'green']` _(array passed into function call)_
* `$arResult` populated with data from `markup/data/menu/simple.php`

### Images

Images used in styles should go into `img` directory.