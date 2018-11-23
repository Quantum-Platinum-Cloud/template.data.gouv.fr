module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {},
    'stylelint': {
      fix: true
    },
    'postcss-preset-env': {
      warnForDuplicates: false,
      browsers: ['last 2 versions']
    },
    'cssnano': ctx.env === 'production' ? {} : false,
    'postcss-reporter': {
      clearReportedMessages: true
    }
  }
});
