/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { webpack }) => {

    // Fix "electron" error
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }))

    // Set loader for svg images
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack')
    })

    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'cryptodicks-api.herokuapp.com']
  }
}
