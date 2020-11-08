import { createApp } from "./app";
import { getAutoLang } from "./utils/i18n";

const locale = getAutoLang();
createApp({ locale }).then(({ app, store }) => {
  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
  }

  app.$mount("#app");
});
