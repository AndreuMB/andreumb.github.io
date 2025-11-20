import { i18n } from "@lingui/core";
import { Trans } from "@lingui/react/macro";
import {
  createElement,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactElement,
} from "react";

function Fun() {
  const sentences_english = [
    "I'm a self-sufficient developer with a nice attitude and always happy to help",
    "This page was built with React and TailwindCSS.",
    "Feel free to ask if I'm currently open to work.",
    "This website was inspired by a video from Sharlene Yap.",
    "The background music is a version of the Song of Storms from The Legend of Zelda series.",
    "I created the background music for this site.",
    "I've been a volleyball coach in my town for a few years.",
    "I love playing the guitar and piano among other instruments.",
    "I have an Instagram account where I upload my drawings called liky00_.",
    "At a friend's party, I played the electric guitar with a band.",
    "I painted my guitar purple some time ago, harder than it sounds.",
  ];

  const [currentSentences, setCurretSentences] = useState<string[]>([]);

  const sentences_spanish = [
    "Soy un desarrollador con buena actitud y siempre dispuesto a ayudar.",
    "Esta página fue creada con React y TailwindCSS.",
    "No dudes en preguntar si actualmente estoy disponible para trabajar.",
    "Esta web fue inspirado por un vídeo de Sharlene Yap.",
    'La música de fondo es una versión de la "Canción de las Tormentas" de la saga The Legend of Zelda.',
    "Creé la música de fondo para esta web, puedes activarla en el icóno de arriba a la izquierda.",
    "He sido entrenador de voleibol en mi pueblo durante algunos años.",
    "Me encanta tocar la guitarra y el piano entre otros instrumentos.",
    "Tengo una cuenta de Instagram donde subo mis dibujos llamada liky00_.",
    "En una fiesta de un amigo, toqué la guitarra eléctrica con una banda.",
    "Pinté mi guitarra de color morado hace un tiempo; fue más difícil de lo que parece.",
  ];

  const [score, setScore] = useState(0);
  const [sentence, setSentence] = useState("");
  const [sentenceLeft, setSentenceLeft] = useState("");
  const [sentenceDone, setSentenceDone] = useState<ReactElement[]>([]);
  const [bestScore, setBestScore] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const checkLang = () => {
    if (i18n.locale === "es") {
      setCurretSentences(sentences_spanish);
    } else {
      setCurretSentences(sentences_english);
    }
  };

  useEffect(() => {
    checkLang();
  }, []);

  useEffect(() => {
    const randomSentence =
      currentSentences[Math.floor(Math.random() * currentSentences.length)];
    setSentence(randomSentence);
    setSentenceLeft(randomSentence);
  }, [currentSentences]);

  //   const randomSentence =
  //     currentSentences[Math.floor(Math.random() * currentSentences.length)];

  useEffect(() => {
    setBestScore(Number(localStorage.getItem("best-score")) || 0);
  }, []);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    setScore(0);
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setScore((prev) => prev - 1);
      }, 1000);
    }
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (bestScore < score) {
      setBestScore(score);
      localStorage.setItem("best-score", score.toString());
    }
  };

  const newSentence = () => {
    checkLang();
    if (textareaRef.current) textareaRef.current.value = "";
    const randomSentence =
      currentSentences[Math.floor(Math.random() * currentSentences.length)];
    setSentence(randomSentence);
    setSentenceLeft(randomSentence);
    // setSentenceLeft(randomSentence.replaceAll(' ', '\u0020'))
    setSentenceDone([]);
  };

  const checkTyping = (e: KeyboardEvent) => {
    const htmlElement = e.target as HTMLInputElement;
    const value = htmlElement.value;

    const currentChar = sentence.charAt(value.length);

    if (e.key === "Shift" || e.key === "Control") return;

    // handle backspace
    if (e.key === "Backspace") {
      const prevChar = sentence.charAt(value.length - 1);
      sentenceDone.splice(-1);
      setSentenceDone([...sentenceDone]);
      // setSentenceLeft((prevChar === ' ' ? '\u00A0' : prevChar) + sentenceLeft);
      setSentenceLeft(prevChar + sentenceLeft);
      return;
    }

    // handle finish sentence
    if (sentence.length === value.length + 1) {
      setScore(score + 10);
      console.log("sentence finished");
      newSentence();
      e.preventDefault();
      return;
    }

    // handle score
    setScore(currentChar === e.key ? score + 1 : score - 4);

    // handle create element
    const color =
      currentChar === e.key ? "text-primary" : "text-terciary-light";
    const charElement = createElement(
      "span",
      { className: color, key: value.length },
      currentChar === " " ? "_" : currentChar
    );

    if (sentenceDone.length > 0) {
      setSentenceDone([...sentenceDone, charElement]);
    } else {
      setSentenceDone([charElement]);
    }

    if (sentenceLeft.charAt(1) === " ") {
      // setSentenceLeft('\u00A0' + sentenceLeft.slice(1).trim());
      setSentenceLeft(sentenceLeft.slice(1));
    } else {
      setSentenceLeft(sentenceLeft.slice(1));
    }
  };

  return (
    <div className="p-5 gap-4 flex flex-col justify-center text-center h-full">
      <div className="flex items-center justify-center gap-10 *:border *:border-secondary *:p-2">
        <div className="flex flex-col justify-around h-full">
          <h1>
            <Trans>Typing Game</Trans>
          </h1>
          <div className="mx-auto px-2 bg-primary text-secondary">
            <div>
              <Trans>Score</Trans>: {score}
            </div>
            <div className="timer">
              <Trans>Best Score</Trans>: {bestScore}
            </div>
          </div>
        </div>

        <div className="gap-1 flex flex-col w-4/6">
          <p>
            <Trans>
              Do you want to test your typing skills and know something more
              about me? Maybe you find some secrets ;).
            </Trans>
          </p>
          <p>
            <Trans>
              Easy! Just click the box below and start typing the sentence shown
              above it. Click outside to save the score.
            </Trans>
          </p>
        </div>
      </div>

      <div className="container gap-3 flex flex-col bg-primary-light p-2 rounded">
        <div className="break-words text-secondary">
          {sentenceDone}
          {sentenceLeft}
        </div>
        <textarea
          spellCheck={false}
          onFocus={start}
          onBlur={stop}
          rows={4}
          ref={textareaRef}
          className="quote-input bg-secondary w-full"
          onKeyDown={(e) => checkTyping(e)}
        ></textarea>
      </div>
      <div>
        <Trans>Hope you have fun!</Trans>
      </div>
    </div>
  );
}

export default Fun;
