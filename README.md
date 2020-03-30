# `@egodigital/vuetify-preset`

> A [Vuetify](https://vuetifyjs.com/) preset for the [e.GO Digital](https://e-go-digital.com/)

### 🚀 Usage

Run one of the following commands

```bash
# NPM
npm install --save @egodigital/vuetify-preset

# Yarn
yarn add @egodigital/vuetify-preset
```

from the folder, where your `package.json` is stored.

In your public `index.html`, import the default font, we use:

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:300,500,700">
```

Inside your `main.js/.ts` (or your Vuetify plugin file), import the preset and reference it in your Vuetify options:

```
import { preset } from '@egodigital/vuetify-preset/preset';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    preset
});
```

### ⚡ Features

This preset allows our developers a fresh project start without hurdles. Various Vuetify components are adjusted for them to make the development time as efficient as possible.

### License

[LGPL 3.0](http://www.gnu.org/licenses/lgpl-3.0.html)
