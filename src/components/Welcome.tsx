import { useEffect, useState } from 'react';
import './Welcome.css';

interface WelcomeSentence {
    pre: string,
    adjective: string
}

function Welcome() {
    const welcomeSentences: WelcomeSentence[] = [
        { pre: 'a not', adjective: 'still' },
        { pre: 'a forever', adjective: 'curious' },
        { pre: 'a constantly', adjective: 'evolving' },
        { pre: 'an always on the', adjective: 'move' },
    ]

    let index = 0

    const [welcomeSentence, setWelcomeSentence] = useState(welcomeSentences[index])
    // const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        setInterval(function () {
            index++
            if (index >= welcomeSentences.length) index = 0
            setWelcomeSentence(welcomeSentences[index])
        }, 3000);
    }, [])




    return (
        <div className="absolute w-full h-full text-secondary top-0 left-0 flex items-center justify-center -z-20 text-center flex-col gap-8">
            <h1>Hi! I'm Andreu</h1>
            <p>{welcomeSentence.pre} <span className="moving-word">{welcomeSentence.adjective}</span> developer</p>
        </div>
    );
}

export default Welcome;
