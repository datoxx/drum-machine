import { useState } from 'react';
import './App.css';
import Pad from './Pad';

const songsOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


function App() {

  const [volume, setVolume] = useState(0.5);
  const [record, setRecord] = useState("");
  const [speed, setSpeed] = useState(0.5);


  const playRecord = () => {

    let recordArry = record.split(" "); 
    let index = 0;
    const interval = setInterval(() => {
      const audio = document.getElementById(recordArry[index]);
      audio.currentTime = 0;
      audio.play();
      audio.volume = volume;
      index++;
    }, speed * 600);
    setTimeout( () => clearInterval(interval), 600 * speed * recordArry.length - 1);
  };

  return (
    <div className="App container d-flex justify-content-center " style={{height: "100vh"}}>
     <div id="drum-machine" className="row pe-2 ps-2 align-self-center col-xs-12 col-sm-6 col-md-7 " >
      <div id="display" className="col-xs-12 col-sm-12 col-md-7  pt-4 ">
        {songsOne.map(song => (<Pad key={song.id} song={song} volume={volume} setRecord={setRecord} />))}
      </div>
      <div className="controlBord  col-xs-12 col-sm-12 col-md-4 mt-4 ms-4">
        <h3 className="text-primary">Colume</h3>
        <input 
          type="range" 
          step="0.01"
          onChange={e => setVolume(e.target.value)}
          value={volume}
          max="1"
          min="0" 
        />
        <h3 className="text-primary">Recording</h3>
        <h5 className="text-primary">{record}</h5>
          <button onClick={playRecord} className="btn btn-outline-primary ">play</button>
          <button onClick={() => setRecord("")} className="btn btn-outline-primary ms-3" >clear</button>
          <br />
          <h3 className="text-primary">Speed</h3>
          <input 
            type="range" 
            step="0.01"
            onChange={e => setSpeed(e.target.value)}
            value={speed}
            max="1.2"
            min="0.1" 
          />
      </div>
     </div>
    </div>
  );
}

export default App;
