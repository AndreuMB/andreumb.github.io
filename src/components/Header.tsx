import {
  Fragment,
  useRef,
  useState,
  type ComponentType,
  type RefObject,
} from "react";
import "./Header.css";
import { FaChevronRight } from "react-icons/fa";
import Draggable from "react-draggable";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Fun from "../pages/Fun";
import mouseClick from "/src/assets/sounds/mouse_click.mp3";
import useSound from "use-sound";
import Portrait from "../pages/Portrait";
import { msg } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { Trans as TransD } from "@lingui/react";
import type { MessageDescriptor } from "@lingui/core";

interface NavEntry {
  ref: RefObject<null>;
  title: MessageDescriptor;
  description: MessageDescriptor;
  hide: boolean;
  content: ComponentType<{ onShowPortrait?: () => void }>;
  focus: boolean;
  menuEntry: boolean;
  size?: { width: number; height: number };
}

function Header() {
  const [navEntries, setNavEntries] = useState<NavEntry[]>([
    {
      ref: useRef(null),
      title: msg`About me`,
      description: msg`An honest presentation :)`,
      hide: true,
      content: AboutMe,
      focus: false,
      menuEntry: true,
    },
    {
      ref: useRef(null),
      title: msg`Projects`,
      description: msg`Some of my work`,
      hide: true,
      content: Projects,
      focus: false,
      menuEntry: true,
    },
    {
      ref: useRef(null),
      title: msg`Fun`,
      description: msg`UwU`,
      hide: true,
      content: Fun,
      focus: false,
      menuEntry: true,
    },
    {
      ref: useRef(null),
      title: msg`Contact`,
      description: msg`Talk with me!`,
      hide: true,
      content: Contact,
      focus: false,
      menuEntry: true,
    },
    {
      ref: useRef(null),
      title: msg`Portrait`,
      description: msg``,
      hide: true,
      content: Portrait,
      focus: false,
      menuEntry: false,
      size: { width: 80, height: 120 },
    },
  ]);

  const windowSize = {
    width: 720,
    height: 480,
  };

  const widthBreak = 768;

  const [playClick] = useSound(mouseClick);
  const handleEntryWindows = (entry: NavEntry) => {
    const updatedEntries = navEntries.map((centry) => {
      if (centry.title === entry.title) centry.hide = !centry.hide;
      return centry;
    });
    playClick();
    handleWindowZindex(entry);
    setNavEntries(updatedEntries);
  };

  const showPortrait = () => {
    const entry =
      navEntries.find((e) => e.title.message === "Portrait") || navEntries[0];
    handleEntryWindows(entry);
    handleWindowZindex(entry);
  };

  const handleWindowZindex = (entry: NavEntry) => {
    const updatedEntries = navEntries.map((centry) => {
      centry.focus = false;
      if (centry.title === entry.title) centry.focus = true;
      return centry;
    });
    setNavEntries(updatedEntries);
  };

  return (
    <header className="mt-12">
      <h1 className="text-secondary mb-6">
        <Trans>PORTFOLIO</Trans>
      </h1>
      <nav className="w-80">
        {navEntries.map((entry) => (
          <Fragment key={entry.title.message}>
            {entry.menuEntry === true && (
              <button
                type="button"
                className="border-none!"
                onClick={() => handleEntryWindows(entry)}
              >
                <div>
                  <p className="uppercase">
                    <TransD id={entry.title.id} />
                  </p>

                  <p className="description">
                    <TransD id={entry.description.id} />
                  </p>
                </div>
                <FaChevronRight />
              </button>
            )}
            {entry.hide === false && (
              <Draggable
                onMouseDown={() => handleWindowZindex(entry)}
                handle=".handle"
                defaultPosition={{
                  x:
                    window.innerWidth < widthBreak
                      ? 0
                      : Math.floor(
                          Math.random() *
                            (window.innerWidth - windowSize.width - 60 - 400) +
                            400
                        ),
                  y: window.innerWidth < widthBreak ? 400 : -300,
                }}
                nodeRef={entry.ref}
              >
                <div
                  ref={entry.ref}
                  className={`absolute not-md:w-80 not-md:h-120 bg-primary-light border-secondary border flex flex-col ${
                    entry.focus ? "z-50" : "z-0"
                  }`}
                  style={{
                    width: !entry.size
                      ? window.innerWidth < widthBreak
                        ? window.innerWidth - 80
                        : windowSize.width
                      : 320,
                    height: !entry.size ? windowSize.height : 480,
                  }}
                >
                  <div className="handle flex justify-between px-1 border-secondary border-b bg-secondary select-none uppercase text-primary">
                    <p>
                      <TransD id={entry.title.id} />
                    </p>
                    <button
                      type="button"
                      className="simple-button bg-transparent!"
                      onClick={() => handleEntryWindows(entry)}
                      onTouchStart={() => handleEntryWindows(entry)}
                    >
                      [x]
                    </button>
                  </div>
                  <div id="content" className="overflow-auto overflow-x-clip">
                    <entry.content
                      onShowPortrait={showPortrait}
                    ></entry.content>
                  </div>
                </div>
              </Draggable>
            )}
          </Fragment>
        ))}
      </nav>
    </header>
  );
}

export default Header;
