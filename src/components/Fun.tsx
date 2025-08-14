import { createElement, useEffect, useRef, useState, type KeyboardEvent, type ReactElement } from "react";

function Fun() {
    const sentences = [
        "I'm a self-sufficient developer who enjoys taking on challenges.",
        "This page was built with React and TailwindCSS.",
        "Feel free to ask if I'm currently open to work.",
        "This website was inspired by a video from Sharlene Yap.",
        "The background music is a version of the Song of Storms from The Legend of Zelda series.",
        "I created the background music for this site.",
        "I've been a volleyball coach in my town for a few years.",
        "I love playing the guitar and piano among other instruments."
    ];

    const [score, setScore] = useState(0)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);


    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)]
    const [sentence, setSentence] = useState(randomSentence)
    // const [sentenceLeft, setSentenceLeft] = useState(randomSentence.replaceAll(' ', '\u00A0'))
    const [sentenceLeft, setSentenceLeft] = useState(randomSentence)
    const [sentenceDone, setSentenceDone] = useState<ReactElement[]>([])
    // sentences[Math.floor(Math.random() * sentences.length)]

    const [bestScore, setBestScore] = useState(0)

    useEffect(() => {
        setBestScore(Number(localStorage.getItem('best-score')) || 0)
    }, [])

    const intervalRef = useRef<number | null>(null);

    const start = () => {
        setScore(0)
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
            setBestScore(score)
            localStorage.setItem('best-score', score.toString())
        }
    };


    // useEffect(() => {


    //     return () => clearInterval(interval); // Cleanup on unmount
    // }, []);

    const newSentence = () => {
        if (textareaRef.current) textareaRef.current.value = ''
        const randomSentence = sentences[Math.floor(Math.random() * sentences.length)]
        setSentence(randomSentence)
        setSentenceLeft(randomSentence)
        // setSentenceLeft(randomSentence.replaceAll(' ', '\u0020'))
        setSentenceDone([])
    }

    const checkTyping = (e: KeyboardEvent) => {
        const htmlElement = e.target as HTMLInputElement;
        const value = htmlElement.value

        const currentChar = sentence.charAt(value.length)


        if (e.key === 'Shift' || e.key === 'Control') return

        // handle backspace
        if (e.key === 'Backspace') {
            const prevChar = sentence.charAt(value.length - 1)
            sentenceDone.splice(-1)
            setSentenceDone([...sentenceDone]);
            // setSentenceLeft((prevChar === ' ' ? '\u00A0' : prevChar) + sentenceLeft);
            setSentenceLeft(prevChar + sentenceLeft);
            return
        }

        // handle finish sentence
        if (sentence.length === value.length + 1) {
            setScore(score + 10)
            console.log('sentence finished');
            newSentence()
            e.preventDefault()
            return
        }

        // handle score
        setScore(currentChar === e.key ? score + 1 : score - 4)


        // handle create element
        const color = currentChar === e.key ? 'text-secondary' : 'text-terciary-light'
        const charElement = createElement('span', { className: color, key: value.length }, currentChar === ' ' ? '_' : currentChar)


        if (sentenceDone.length > 0) {
            setSentenceDone([...sentenceDone, charElement]);
        } else {
            setSentenceDone([charElement]);
        }



        if (sentenceLeft.charAt(1) === ' ') {
            // setSentenceLeft('\u00A0' + sentenceLeft.slice(1).trim());
            setSentenceLeft(sentenceLeft.slice(1));
        } else {
            setSentenceLeft(sentenceLeft.slice(1));
        }

    }

    return (
        <div className="p-5 gap-5 flex flex-col h-full justify-center text-center">
            <h1>Typing Game</h1>
            <p>Easy! Just click the textarea below and start typing the sentence above it, click out of the textarea when you want to stop.</p>
            <div>
                <div>Score: {score}</div>
                <div className="timer">Best Score: {bestScore}</div>
            </div>

            <div className="container gap-3 flex flex-col bg-primary-light p-2 rounded">
                <div className="break-words">{sentenceDone}{sentenceLeft}</div>
                <textarea onFocus={start} onBlur={stop} rows={4} ref={textareaRef} className="quote-input bg-secondary w-full" onKeyDown={(e) => checkTyping(e)} ></textarea>
            </div>
        </div>
    );
}

export default Fun;
