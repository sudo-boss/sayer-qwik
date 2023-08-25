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
    'postcss-sort-media-queries': {
      sort: 'mobile-first', // puedes cambiar a 'desktop-first' si lo prefieres
    },
  },
};
