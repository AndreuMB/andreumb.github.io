import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/TopRightPanel";
import Welcome from "./components/Welcome";
import MusicPlayer from "./components/MusicPlayer";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { messages as esMessages } from "./locales/es/messages";
import TopPanel from "./components/TopPanel";

i18n.load({
  en: enMessages,
  es: esMessages,
});

console.log("default user language = " + navigator.language.split("-")[0]);
i18n.activate(navigator.language.split("-")[0]);
// i18n.activate("es");

function App() {
  return (
    <I18nProvider i18n={i18n}>
      <TopPanel></TopPanel>
      <Header />
      <Welcome />
      <Footer />
    </I18nProvider>
  );
}

export default App;
