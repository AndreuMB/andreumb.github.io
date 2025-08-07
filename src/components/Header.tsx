import { useEffect, useRef, useState } from 'react';
import './Header.css';
import { FaChevronRight } from 'react-icons/fa';
import Draggable from 'react-draggable';

interface NavEntry {
  title: string;
  description: string;
  hide: boolean;
}

function Header() {
  const [navEntries, setNavEntries] = useState<NavEntry[]>([
    { title: 'About me', description: 'Some of my personal info', hide: true },
    { title: 'Projects', description: 'Some of my work', hide: true },
    { title: 'Fun', description: 'UwU', hide: true },
    { title: 'Contact', description: 'Give me some money', hide: true },
  ]);
  // const [showEntryWindows, setShowEntryWindows] = useState('');
  const handleEntryWindows = (entry: NavEntry) => {
    const updatedEntries = navEntries.map((centry) => {
      if (centry.title === entry.title) centry.hide = !centry.hide;
      return centry;
    });
    setNavEntries(updatedEntries);
  };

  // const openEntry = () => {};
  const nodeRef = useRef(null);

  return (
    <header>
      <h1 className="text-secondary mb-6">PORTFOLIO</h1>
      <nav className="w-80">
        {navEntries.map((entry) => (
          <>
            <button
              type="button"
              className="border-none!"
              key={entry.title}
              onClick={() => handleEntryWindows(entry)}
            >
              <div>
                <p>{entry.title.toUpperCase()}</p>
                <p className="description">{entry.description}</p>
              </div>
              <FaChevronRight />
            </button>
            {entry.hide === false && (
              <Draggable
                handle=".handle"
                defaultPosition={{
                  x: Math.floor(Math.random() * 400) + 400,
                  y: -300,
                }}
                nodeRef={nodeRef}
              >
                <div
                  ref={nodeRef}
                  className="absolute w-180 h-120 bg-primary-light border-secondary border"
                >
                  <div className="handle flex justify-between px-1 border-secondary border-b bg-primary-light">
                    <p>{entry.title.toUpperCase()}</p>
                    <button
                      type="button"
                      className="simple-button"
                      onClick={() => handleEntryWindows(entry)}
                    >
                      [x]
                    </button>
                  </div>
                  <div className="p-2">
                    This readme is really dragging on...
                  </div>
                </div>
              </Draggable>
            )}
          </>
        ))}
      </nav>
    </header>
  );
}

export default Header;
