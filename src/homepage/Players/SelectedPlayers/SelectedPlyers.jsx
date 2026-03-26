import React from 'react';
import SelectedCard from '../../../Components/Ui/SelectedCard';

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
           {selectedPlayers.length === 0 ? 
           <div className='text-center py-20'>
            <h2 className='text-xl font-semibold'>No Players Selceted Yet</h2>
            <p>Go to Players tab to selected player</p>
           </div> :  
            selectedPlayers.map((player,ind) => {
              return (
                <SelectedCard key={ind} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer} ></SelectedCard>
              )
           })}
        </div>
    );
};

export default SelectedPlyers;