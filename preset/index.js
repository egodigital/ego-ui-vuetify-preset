/**
 * This file is part of the vscode-powertools distribution.
 * Copyright (c) e.GO Digital GmbH, Aachen, Germany (https://www.e-go-digital.com/)
 *
 * vscode-powertools is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * ego-ui-vuetify-preset is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

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