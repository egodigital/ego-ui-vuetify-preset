const {
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'reply', () => {
    injectGoogleFontLink(api, 'Muli:300,500,700')
  })
}