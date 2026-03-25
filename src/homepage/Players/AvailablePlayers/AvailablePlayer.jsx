
import Card from '../../../Components/Ui/Card';

const AvailablePlayer = ({players}) => {
  


    return (
 <div > 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3.5 gap-4'>
{players.map(player  => 
   {
    return(
  <Card key={player.id} player={player} ></Card>
   )
   }
    )}
        </div>
     </div>  
    );
};
export default AvailablePlayer;