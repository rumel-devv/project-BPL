import React, { useState } from 'react';
import { UserRound } from 'lucide-react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { TiFlag } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Card = ({player,setCoin,coin,setSelectedPlyers,selectedPlayers} ) => {
    const [isSelected,setIsSelected] = useState(false)
 
   const handleChoosPlayer = () => {
     {
      let newCoin = coin - player.price
      if(newCoin >=  0 ){
        setCoin(newCoin)
        setIsSelected(true)
      } else{
        toast.warning('Not enough coin available')
        return;
      }

       toast.success(`${player.player_name} is selected`);
       setIsSelected(true)
       setSelectedPlyers([...selectedPlayers,player])
    }
   }

    return (
           <div className="card bg-base-100 w-full  md:w-96 shadow-sm">
   <figure>
     <img className='w-100 h-50 object-cover'
      src={player.image}
      alt="Shoes" />
   </figure>
   <div className="card-body">
    <h2 className="card-title"><FaUser></FaUser>{player.player_name} </h2>
    <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center gap-2.5'>
             <FaFlag></FaFlag>
            <p> {player.player_country}</p>
        </div>
        <div>
            <button className='btn '>{player.player_type} </button>
        </div>
    </div>
    <div className="divider"></div>
      <h2 className='font-bold'>Rattig: {player.rating} </h2>
    <div  className='flex justify-between gap-8 font-bold'>
        <p>{player.batting_style}</p>
        <p className='text-left'>{player.bowling_style}</p>
    </div>

    <div className="flex justify-between items-center">
        <p className='font-semibold'> Price$ {player.price}</p>
      <button onClick={handleChoosPlayer}  disabled ={isSelected ? true : false} className="btn">{isSelected === true ? "Selected" : 'Chosse Player'} </button>
     </div>
    </div>
</div>
    );
};

export default Card;