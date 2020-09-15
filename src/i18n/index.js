import en from "./locales/en.json";
import pl from "./locales/pl.json";

import store from "../store";

let i18n = { en, pl };

export default function $t(phrase) {
  let locale = store.getters.locale;
  return i18n[locale][phrase];
}
