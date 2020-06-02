module.exports = {
  extends: ['erb/typescript'],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off'
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js')
      },
      alias: {
        map: [
          ['@app/*', './app'],
          ['@apis/*', './app/apis'],
          ['@assets/*', './app/assets'],
          ['@components/*', './app/components'],
          ['@configs/*', './app/configs'],
          ['@constants/*', './app/constants'],
          ['@modules/*', './app/modules'],
          ['@store/*', './app/store'],
          ['@reducers/*', './app/store/reducers'],
          ['@actions/*', './app/store/actions'],
          ['@utils/*', './app/utils']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }
  }
};
