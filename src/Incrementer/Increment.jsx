import { useState } from "react";

     function Increment() {
         const [Compteur, setCompteur] = useState(1);

         const handeClick = () => {
              setCompteur(Compteur + 1);
         };
     return (
             <div>
                 <h2>{Compteur}</h2>
                     <button onClick={handeClick}>Incremente</button>
             </div>
      ); 
} 
export default Increment;