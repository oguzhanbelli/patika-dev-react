import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState, useEffect } from "react";
function App() {
  const isLocale = localStorage.getItem("local-key");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);
  useEffect(() => {
    localStorage.setItem("local-key", locale);
  }, [locale]);

  const messages = {
    "tr-TR": {
      title: "Merhaba Dünya",
      desc: "{count} yeni mesajınız var.",
    },
    "en-US": {
      title: "Hello World",
      desc: "You have {count} new messages.",
    },
  };
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <br />
        <br />
        <p>
          <FormattedMessage id="desc" values={{ count: 3 }} />
        </p>
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
