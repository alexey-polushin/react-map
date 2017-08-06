const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    map: {
      key: 'AIzaSyDRmxmhwt5mglUSf-6i2CwVEHp53WP2G50',
    },
  },
  test: {},
  development: {},
  production: {},
}

module.exports = merge(config.all, config[config.all.env])
