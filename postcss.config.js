module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    },
    cssnano: {
      preset: 'default',
    },
  },
};
