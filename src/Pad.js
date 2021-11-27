import { useEffect, useState } from "react";


const Pad = ({song, volume, setRecord}) => {

    const [active, setActive] = useState(false);

    const playBit = () => {
        const audio = document.getElementById(song.keyTrigger);
        setActive(true);
        setTimeout(() => setActive(false), 300);
        audio.currentTime = 0;
        audio.play();
        audio.volume = volume;
        setRecord(pre => pre + song.keyTrigger + " ");
     }

     useEffect(() => {
        document.addEventListener('keydown',  pressed);
        return () => {
            document.removeEventListener('keydown',  pressed);
        }
     }, []);

     const pressed = (e) => {
        if(e.keyCode == song.keyCode) {
            playBit();
        }
     };

    return ( 
        <button 
        className={`drum-pad btn btn-outline-primary col-3 h-25  m-2 border-3 ${active && "btn-primary text-white"}`} 
        id={song.id} 
        onClick={playBit}
        >
            <audio src={song.url} className="clip" id={song.keyTrigger}/>{song.keyTrigger}
        </button>
     );
}
 
export default Pad;