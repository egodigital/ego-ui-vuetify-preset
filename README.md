# `vue-cli-plugin-vuetify-preset-reply`

> A Vuetify Preset for the [e.GO digital](https://e-go-digital.com/)

### 🚀 Usage

Add this line to you package.json dependencies
```
"ego-ui-vuetify-preset": "egodigital/ego-ui-vuetify-preset"
```

In your public index.html,
import our font
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:300,500,700">
```

Inside you main.js/.ts or your vuetify plugin file,
import the preset and reference it in your vuetify options
```
import { preset } from 'ego-ui-vuetify-preset/preset';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    preset
});
```

### ⚡ Features
This preset allows our developers a fresh project start without hurdles. Various vuetify components are adjusted for them to make the development time as efficient as possible.

### License
[LGPL 3.0](http://www.gnu.org/licenses/lgpl-3.0.html)
