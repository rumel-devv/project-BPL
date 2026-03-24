import { use } from "react";


const Players = ({playerPromise}) => {
 
    const data = use(playerPromise)
    console.log(data);

    return (
        <div>
            Players
        </div>
    );
};

export default Players;