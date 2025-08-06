import { useEffect, useState } from 'react';
import SkyBackgroundUwU from './SkyBackgroundUwU';
import SpaceBackgroundOwO from './SpaceBackgroundOwO';

import './DarkModeToggle.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  const storageKey = 'dark-mode';

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.body.className = theme;
    const tt = document.querySelector('#theme-toggle');
    // change button
    if (tt) {
      tt.setAttribute('data-theme', theme);
      tt.setAttribute('aria-label', theme);
    }
  }, [darkMode]);

  useEffect(() => {
    const darkModeStorage = localStorage.getItem(storageKey);
    if (darkModeStorage) {
      setDarkMode(darkModeStorage === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const handleButton = () => {
    // save darkMode
    localStorage.setItem(storageKey, String(!darkMode));

    // change boolean
    setDarkMode(!darkMode);
  };

  return (
    <>
      {darkMode ? <SpaceBackgroundOwO /> : <SkyBackgroundUwU />}

      <button
        type="button"
        className="theme-toggle absolute top-4 right-4 p-2!"
        id="theme-toggle"
        title="Toggles light & dark"
        aria-label="auto"
        aria-live="polite"
        onClick={handleButton}
      >
        <svg
          className="sun-and-moon"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <mask className="moon" id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="black" />
          </mask>
          <circle
            className="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="black"
          />
          <g className="sun-beams" stroke="black">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </button>
    </>
  );
}

export default DarkModeToggle;
