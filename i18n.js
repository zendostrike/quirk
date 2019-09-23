var NextI18Next = require("next-i18next").default;

var NextI18NextInstance = new NextI18Next({
  defaultLanguage: "es",
  otherLanguages: ["en"]
});

module.exports = NextI18NextInstance;
module.exports.appWithTranslation = NextI18NextInstance.appWithTranslation;
module.exports.withTranslation = NextI18NextInstance.withTranslation;
