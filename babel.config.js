module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  return {
    plugins: ['macros'],
  }
};
