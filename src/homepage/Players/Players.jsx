import { use } from "react";
import AvailablePlayer from "./AvailablePlayers/AvailablePlayer";
import React, { useState } from 'react';
import SelectedPlyers from "./SelectedPlayers/SelectedPlyers";

const Players = ({playerPromise,setCoin,coin}) => {
 
    const players = use(playerPromise)
    const [selectedType, setSelectedType] = useState('Available')
    const [selectedPlayers,setSelectedPlyers] = useState([])


    return (
     <div>

  <div className='flex justify-between w-full md:w-10/11 mx-auto my-6'>
       <div>
            {selectedType === 'Available' ? <p className='font-bold text-xl'>Available Players</p> : <p className='font-bold text-xl'>Selected Players {selectedPlayers.length}/{players.length}</p> }
        </div>
        <div>
 <button onClick={() => setSelectedType('Available')}
  className={`btn ${selectedType === 'Available' ? 'bg-[#E7FE29]' : ''}`}>Avaiable</button>
 
 <button onClick={() => setSelectedType('Selected')}
  className={`btn ${selectedType === 'Selected' ? 'bg-[#E7FE29]' : ''}`}>Selected ({selectedPlayers.length}) </button>
        </div>
        </div>



        <div className="w-full md:w-10/11 mx-auto">
          {selectedType === 'Available' ?  <AvailablePlayer setSelectedPlyers={setSelectedPlyers} selectedPlayers={selectedPlayers} players={players} setCoin={setCoin} coin={coin} ></AvailablePlayer> : <SelectedPlyers coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlyers={setSelectedPlyers} ></SelectedPlyers>}
        </div>
         </div> 
    );
};

export default Players;