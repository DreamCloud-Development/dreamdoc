module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ['macros'],
  } 
}
