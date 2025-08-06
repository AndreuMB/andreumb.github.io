import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SpaceBackgroundOwO from './components/SpaceBackgroundOwO';
import SkyBackgroundUwU from './components/SkyBackgroundUwU';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)} className="text-6xl">
        TOOGLE asdfadfa
      </button>
      {darkMode ? <SpaceBackgroundOwO /> : <SkyBackgroundUwU />}
      <Header />
      <Footer />
    </>
  );
}

export default App;
