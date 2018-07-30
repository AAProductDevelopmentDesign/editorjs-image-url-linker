# Simple Image Tool

Provides Image Blocks for the [CodeX Editor](https://ifmo.su/editor).

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev codex.editor.simple-image
```

Include module at your application

```javascript
const SimpleImage = require('codex.editor.simple-image');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

Get newest bundle path from [RawGit](https://rawgit.com) — open site and paste link to JS bundle in repository.

`https://github.com/codex-editor/simple-image/blob/master/dist/bundle.js`

> Note: use `production` link with commit hash to avoid issues with caching.

Then require this script on page with CodeX Editor.

```html
<script src="..."></script>
```

## Usage

Add a new Tool to the `tools` property of the CodeX Editor initial config.

```javascript
var editor = CodexEditor({
  ...
  
  tools: {
    ...
    image: SimpleImage,
  }
  
  ...
});
```

## Config Params

This Tool has no config params
