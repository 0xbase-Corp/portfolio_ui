/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
  },
  experimental: {
    outputStandalone: true,
}
}

module.exports = nextConfig
