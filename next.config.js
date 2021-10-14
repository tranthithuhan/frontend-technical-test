const path = require("path");
module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_URL: "http://localhost:3005",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`,
  }
}