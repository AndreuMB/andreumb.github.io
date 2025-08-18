import { FaMusic, FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import mouseClick from '/src/assets/sounds/mouse_click.mp3';
import bgMusic from '/src/assets/sounds/bg_music.mp3';
import useSound from "use-sound";
import { useState } from "react";
import Slider from "@mui/material/Slider";

function MusicPlayer() {
    const [playClick] = useSound(mouseClick)
    const [volumeShow, setVolumeShow] = useState(40);
    const [volume, setVolume] = useState(0.4);
    const [playMusic, { stop }] = useSound(bgMusic, { volume, loop: true })

    const [isPlaying, setIsPlaying] = useState(false)
    const handleMusic = () => {
        playClick()
        isPlaying ? stop() : playMusic()
        setIsPlaying(!isPlaying)

        // playClick.arguments
        // stop()
    }

    const handleChange = (_event: Event, newValue: number) => {
        setVolumeShow(newValue)
        setVolume(newValue / 100)
    };

    return (
        <div className="absolute top-3 left-3 flex flex-row gap-6 items-center justify-center">
            <button className={`rounded-lg ${isPlaying ? 'bg-secondary!' : ''}`} onClick={handleMusic}>
                <FaMusic className={`${isPlaying ? 'animate-bounce' : 'animate-none'} `} />
            </button>
            <div className="text-secondary flex flex-row gap-6 items-center">
                <FaVolumeDown />
                <Slider className="**:bg-secondary! w-26! p-0!" value={volumeShow} onChange={handleChange} />
                <FaVolumeUp />
            </div>
        </div>

    );
}

export default MusicPlayer;
