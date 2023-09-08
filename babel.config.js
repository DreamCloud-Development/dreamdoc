module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    "@babel/preset-react",
    "@babel/preset-env"
    ]
};

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ['macros'],
  } 
}
