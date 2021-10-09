module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@services': './src/services',
          '@configs': './src/configs',
          '@controllers': './src/controllers',
          '@middlewares': './src/middlewares',
          '@views': './src/views',
          '@utils': './src/utils',
          '@error': './src/errors',
          '@api': './src/api',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
}
