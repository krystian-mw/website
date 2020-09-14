import VueI18n from "vue-i18n";

import en from "./locales/en.json";
import pl from "./locales/pl.json";

export default new VueI18n({
  locale: "pl",
  messages: {
    en,
    pl,
  },
});
