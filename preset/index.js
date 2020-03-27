require('./overrides.scss')

const preset = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#4c91b7',
        secondary: '#EFA064',
        tertiary: '#4c91b7',
        success: '#4caf50',
        warning: '#fb8c00',
        error: '#E53935',
      },
    },
  },
}

module.exports = {
  preset
}