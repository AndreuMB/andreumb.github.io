import { FaMusic } from "react-icons/fa";
import mouseClick from '/src/assets/sounds/mouse_click.mp3';
import bgMusic from '/src/assets/sounds/bg_music.mp3';
import useSound from "use-sound";
import { useState } from "react";

function MusicPlayer() {
    const [playClick] = useSound(mouseClick)
    const [playMusic, { stop }] = useSound(bgMusic, { volume: 0.4, loop: true })

    const [isPlaying, setIsPlaying] = useState(false)
    const handleMusic = () => {
        playClick()
        isPlaying ? stop() : playMusic()
        setIsPlaying(!isPlaying)

        // playClick.arguments
        // stop()
    }

    return (
        <button className={`absolute top-3 left-3 rounded-lg ${isPlaying ? 'bg-secondary!' : ''}`} onClick={handleMusic}>
            <FaMusic className={`${isPlaying ? 'animate-bounce' : 'animate-none'} `} />

        </button>
    );
}

export default MusicPlayer;
