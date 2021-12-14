/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { webpack }) => {

    // Fix "electron" error
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }))

    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'spacedicks-api.herokuapp.com', 'spacedicks.xyz']
  }
}
