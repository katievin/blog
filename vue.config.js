module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/blog/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Katievin Blog'
        return args
      })
  }
}
