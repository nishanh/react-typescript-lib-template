import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import english from "../locales/translations.en.json";
import spanish from "../locales/translations.es.json";
import german from "../locales/translations.de.json";
import french from "../locales/translations.fr.json";
import italian from "../locales/translations.it.json";
import japanese from "../locales/translations.it.json";
import korean from "../locales/translations.ko.json";
import dutch from "../locales/translations.nl.json";
import portuguese from "../locales/translations.pt.json";
import russian from "../locales/translations.ru.json";
import chinese_simplified from "../locales/translations.zh-Hans.json";
import chinese_traditional from "../locales/translations.zh-Hant.json";

i18next.use(LanguageDetector).init(
  {
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react!!
      format: (value: any, fmt?: string, lng?: string): string => {
        if (fmt === "intlDate") {
          return new Intl.DateTimeFormat(lng).format(value);
        } else if (fmt === "intlNumber") {
          return new Intl.NumberFormat(lng).format(value);
        }
        return value;
      }
    },
    resources: {
      de: { translation: german },
      en: { translation: english },
      es: { translation: spanish },
      fr: { translation: french },
      it: { translation: italian },
      ja: { translation: japanese },
      ko: { translation: korean },
      nl: { translation: dutch },
      pt: { translation: portuguese },
      ru: { translation: russian },
      zhHans: { translation: chinese_simplified },
      zhHant: { translation: chinese_traditional }
    },
    detection: {
      order: ["navigator"],
      htmlTag: document.documentElement
    },
    react: {
      wait: true
    }
  },
  (err, t) => setLanguageCode()
);

function setLanguageCode(): void {
  let lang = navigator.language.toLowerCase();
  // Map chinese regions to simplified or traditional
  if (lang.startsWith("zh-")) {
    lang = lang.endsWith("tw") ? "zhHant" : "zhHans";
  }
  // Remove any region code from the language string
  else {
    const regionSep = lang.lastIndexOf("-");
    if (regionSep !== -1) {
      lang = lang.substr(0, regionSep);
    }
  }
  i18next.changeLanguage(lang);
}

// Extend i18next with a numeric separators function
export interface ILocaleNumberSeparators {
  keyCodes: number[];
  char: string;
}

declare module "i18next" {
  // tslint:disable-next-line
  export interface i18n {
    getNumberSeparators(): ILocaleNumberSeparators;
  }
}

i18next.getNumberSeparators = (): ILocaleNumberSeparators => {
  switch (i18next.language) {
    case "fr":
    case "de":
    case "es":
      return { keyCodes: [188], char: "," };

    default:
      return { keyCodes: [190, 110], char: "." };
  }
};

export default i18next;
