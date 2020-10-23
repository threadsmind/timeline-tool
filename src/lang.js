import { currentLang, defaultLang } from "./config";

const lang = {
  en: {
    appName: "Timeline Tool",
    nav: [
      { name: "Timeline", id: "Editor" },
      { name: "Settings", id: "Settings" },
    ],
  },
};

const getLang = lang[currentLang] || lang[defaultLang];

export default getLang;
