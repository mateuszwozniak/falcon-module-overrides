module.exports = {
  clearConsole: true,
  useWebmanifest: true,
  i18n: {
    resourcePackages: ["@deity/falcon-i18n"]
  },
  moduleOverride: {
    "@deity/falcon-ui/dist/components/Button": "./src/components/Button"
  }
};
