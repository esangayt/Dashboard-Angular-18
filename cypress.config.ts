import {defineConfig} from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
  env: {
    MAILOSAUR_API_KEY: "IWPYVdyfPxHZVw7gb2eRing7HhuXxQfn",
  },
});
