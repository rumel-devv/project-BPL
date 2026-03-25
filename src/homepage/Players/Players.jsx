import { use } from "react";
import AvailablePlayer from "./AvailablePlayers/AvailablePlayer";
import React, { useState } from 'react';
import SelectedPlyers from "./SelectedPlayers/SelectedPlyers";

const Players = ({playerPromise}) => {
 
    const players = use(playerPromise)
    const [selectedType, setSelectedType] = useState('Available')
    

    return (
     <div>

  <div className='flex justify-between w-full md:w-10/11 mx-auto my-6'>
       <div>
            {selectedType === 'Available' ? <p className='font-bold text-xl'>Available Players</p> : <p className='font-bold text-xl'>Selected Players 2/3</p> }
        </div>
        <div>
 <button onClick={() => setSelectedType('Available')}
  className={`btn ${selectedType === 'Available' ? 'bg-[#E7FE29]' : ''}`}>Avaiable</button>
 
 <button onClick={() => setSelectedType('Selected')}
  className={`btn ${selectedType === 'Selected' ? 'bg-[#E7FE29]' : ''}`}>Selected (0) </button>
        </div>
        </div>



        <div className="w-full md:w-10/11 mx-auto">
          {selectedType === 'Available' ?  <AvailablePlayer players={players} ></AvailablePlayer> : <SelectedPlyers></SelectedPlyers>}
        </div>
         </div>
    );
};

export default Players;