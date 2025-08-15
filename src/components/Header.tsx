import { Fragment, useRef, useState, type ComponentType, type RefObject } from 'react';
import './Header.css';
import { FaChevronRight } from 'react-icons/fa';
import Draggable from 'react-draggable';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Fun from './Fun';
import mouseClick from '/src/assets/sounds/mouse_click.mp3';
import useSound from 'use-sound';
import Portrait from './Portrait';

interface NavEntry {
  ref: RefObject<null>;
  title: string;
  description: string;
  hide: boolean;
  content: ComponentType<{ onShowPortrait?: () => void }>;
  focus: boolean;
  menuEntry: boolean
  size?: { width: number, height: number }
}

function Header() {
  const [navEntries, setNavEntries] = useState<NavEntry[]>([
    {
      ref: useRef(null),
      title: 'About me',
      description: 'An honest presentation :)',
      hide: true,
      content: AboutMe,
      focus: false,
      menuEntry: true
    },
    {
      ref: useRef(null),
      title: 'Projects',
      description: 'Some of my work',
      hide: true,
      content: Projects,
      focus: false,
      menuEntry: true
    },
    {
      ref: useRef(null),
      title: 'Fun',
      description: 'UwU',
      hide: true,
      content: Fun,
      focus: false,
      menuEntry: true
    },
    {
      ref: useRef(null),
      title: 'Contact',
      description: 'Talk with me!',
      hide: true,
      content: Contact,
      focus: false,
      menuEntry: true
    },
    {
      ref: useRef(null),
      title: 'Portrait',
      description: '',
      hide: true,
      content: Portrait,
      focus: false,
      menuEntry: false,
      size: { width: 80, height: 120 }
    },
  ]);
  // const [showEntryWindows, setShowEntryWindows] = useState('');
  const [playClick] = useSound(mouseClick)
  const handleEntryWindows = (entry: NavEntry) => {
    const updatedEntries = navEntries.map((centry) => {
      if (centry.title === entry.title) centry.hide = !centry.hide;
      return centry;
    });
    playClick()
    handleWindowZindex(entry)
    setNavEntries(updatedEntries);
  };

  const showPortrait = () => {
    const entry = navEntries.find(e => e.title === 'Portrait') || navEntries[0]
    handleEntryWindows(entry)
    handleWindowZindex(entry)
  }

  const handleWindowZindex = (entry: NavEntry) => {
    const updatedEntries = navEntries.map((centry) => {
      centry.focus = false
      if (centry.title === entry.title) centry.focus = true;
      return centry;
    });
    setNavEntries(updatedEntries);
  }

  return (
    <header>
      <h1 className="text-secondary mb-6">PORTFOLIO</h1>
      <nav className="w-80">
        {navEntries.map((entry) => (
          <Fragment key={entry.title}>
            {entry.menuEntry === true && (
              <button
                type="button"
                className="border-none!"
                onClick={() => handleEntryWindows(entry)}
              >
                <div>
                  <p>{entry.title.toUpperCase()}</p>
                  <p className="description">{entry.description}</p>
                </div>
                <FaChevronRight />
              </button>
            )}
            {entry.hide === false && (
              <Draggable
                onMouseDown={() => handleWindowZindex(entry)}
                handle=".handle"
                defaultPosition={{
                  x: Math.floor(Math.random() * 400) + 400,
                  y: -300,
                }}
                nodeRef={entry.ref}
              >
                <div
                  ref={entry.ref}
                  className={`absolute ${entry.size ? 'w-' + entry.size.width + ' h-' + entry.size.height : 'w-180 h-120'} bg-primary-light border-secondary border flex flex-col ${entry.focus ? 'z-50' : 'z-0'}`}
                >
                  <div className="handle flex justify-between px-1 border-secondary border-b bg-secondary">
                    <p>{entry.title.toUpperCase()}</p>
                    <button
                      type="button"
                      className="simple-button bg-transparent!"
                      onClick={() => handleEntryWindows(entry)}
                    >
                      [x]
                    </button>
                  </div>
                  <div id="content" className="overflow-auto overflow-x-clip">
                    <entry.content onShowPortrait={showPortrait}></entry.content>
                  </div>
                </div>
              </Draggable>
            )}
          </Fragment>
        )
        )
        }
      </nav>
    </header>
  );
}

export default Header;
