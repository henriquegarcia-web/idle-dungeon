module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // '@': './src',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@views': './src/views',
            '@types': './src/@types',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  }
}
