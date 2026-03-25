
import dollarImage from '../../assets/dollar.png'
import logoImg from '../../assets/logo.png'
const Navbar = ({coin}) => {
 

    return (
<div className="navbar bg-base-100 shadow-sm w-full md:w-10/11 mx-auto mt-2">
  <div className="flex-1">
   <img className='w-10 h-10' src={logoImg} alt='logo'></img>
  </div>
  <div className="flex-none ">
    <button className="btn font-bold text-md ">
    {coin} Coin<img src={dollarImage} ></img>
    </button>
  </div>
</div>
    );
};

export default Navbar;