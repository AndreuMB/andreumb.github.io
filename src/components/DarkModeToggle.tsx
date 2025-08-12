import { useEffect, useState } from 'react';
import SkyBackgroundUwU from './SkyBackgroundUwU';
import SpaceBackgroundOwO from './SpaceBackgroundOwO';
import lightswitch from '/src/assets/sounds/switch1.mp3';
import lightswitch2 from '/src/assets/sounds/switch2.mp3';
import useSound from 'use-sound'

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

  const [playLight] = useSound(lightswitch)
  const [playDark] = useSound(lightswitch2)

  const handleButton = () => {
    // save darkMode
    localStorage.setItem(storageKey, String(!darkMode));
    darkMode ? playLight() : playDark()
    // change boolean
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className='w-dvw h-dvh absolute top-0 left-0 -z-10'>
        {darkMode ? <SpaceBackgroundOwO /> : <SkyBackgroundUwU />}
      </div>

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
    </div>

  );
}

export default DarkModeToggle;
