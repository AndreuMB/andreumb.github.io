import { useEffect, useState } from "react";
import "./Welcome.css";
import { Trans } from "@lingui/react/macro";
import { i18n } from "@lingui/core";

interface WelcomeSentence {
  pre: string;
  adjective: string;
}

function Welcome() {
  const welcomeSentences: WelcomeSentence[] = [
    { pre: `a not`, adjective: `still` },
    { pre: `a forever`, adjective: `curious` },
    { pre: `a constantly`, adjective: `evolving` },
    { pre: `an always on the`, adjective: `move` },
  ];

  const welcomeSentencesSpanish: WelcomeSentence[] = [
    { pre: `en inagotable`, adjective: `energía` },
    { pre: `siempre`, adjective: `curioso` },
    { pre: `en permanente`, adjective: `evolución` },
    { pre: `en constante`, adjective: `aprendizaje` },
  ];

  let index = 0;

  const [welcomeSentence, setWelcomeSentence] = useState(
    welcomeSentences[index]
  );

  const [lang, setLang] = useState(i18n.locale);

  useEffect(() => {
    setInterval(function () {
      if (i18n.locale === "es") {
        selectSentence(welcomeSentencesSpanish);
      } else {
        selectSentence(welcomeSentences);
      }
      setLang(i18n.locale);
    }, 3000);
  }, []);

  const selectSentence = (sentencesArray: WelcomeSentence[]) => {
    index++;
    if (index >= sentencesArray.length) index = 0;
    setWelcomeSentence(sentencesArray[index]);
  };

  return (
    <div className="absolute w-full h-full text-secondary top-0 left-0 flex items-center justify-center -z-20 text-center flex-col gap-8">
      <h1>
        <Trans>Hi! I'm Andreu</Trans>
      </h1>
      <p>
        {lang === "en" && (
          <>
            {welcomeSentence.pre}{" "}
            <span className="moving-word">{welcomeSentence.adjective}</span>{" "}
            developer
          </>
        )}

        {lang === "es" && (
          <>
            un desarrollador {welcomeSentence.pre}{" "}
            <span className="moving-word">{welcomeSentence.adjective}</span>
          </>
        )}
      </p>
    </div>
  );
}

export default Welcome;
