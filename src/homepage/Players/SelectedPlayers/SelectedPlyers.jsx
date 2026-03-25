import { Filter } from 'lucide-react';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlyers = ({selectedPlayers,setSelectedPlyers,coin,setCoin}) => {
  console.log('selectedplares',selectedPlayers);
  const handleDeleteSelectedPlayer = (player) => {
       const fillterdPlayers = selectedPlayers.filter(
        (selectPlayer => selectPlayer.player_name != player.player_name)
       ) 
       console.log("filterd", fillterdPlayers);
       setSelectedPlyers(fillterdPlayers)
       setCoin(coin + player.price)
  }
    return (
        <div className='space-y-2'>
           {selectedPlayers.map((player,ind) => {
              return (
                <div key={ind} className='flex justify-between p-5 border items-center rounded-md' >
             <div className='flex items-center gap-6'> 
                <img className='w-22 h-16 rounded-md' src={player.image} alt='image'></img>
                   <div>
                   <p className='flex items-center gap-2 font-bold text-md' > <FaUser></FaUser> {player.player_name} </p>
                   <p>{player.batting_style} </p>
                    </div>
                 </div>
                 <div>
                <button onClick={() => handleDeleteSelectedPlayer(player)}>
                    <MdDelete className='text-xl text-red-700'></MdDelete>
                 </button>
                 </div>
                
                </div>
              )
           })}
        </div>
    );
};

export default SelectedPlyers;