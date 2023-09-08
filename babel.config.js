module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    "@babel/preset-react",
    "@babel/preset-env"
    ],

  module: {
    "rules": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            // ... your existing Babel options
          }
        }
      },
      // Add the babel-macros loader here
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            // ... your options specific to babel-macros, if any
          }
        }
      },
      // Add any other loaders you need for handling various file types here
      {
        "test": /\.css$/,
        "use": ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      'macros',
      "@babel/plugin-syntax-jsx"
    ],
  } 
}
