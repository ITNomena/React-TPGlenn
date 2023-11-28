import { useState } from "react";

function App() {
  const [Compteur, setCompteur] = useState(10);

  const handeClick = () => {
    if (Compteur > 0) {
      setCompteur(Compteur - 1);
    }
  };

  return (
    <div>
      <h1>Stocks Produits</h1>
      <h2>{Compteur}</h2>
      <button onClick={handeClick}>Acheter</button>
      {Compteur === 0 ? (
        <p>Sold out</p>
      ) : Compteur <= 3 ? (
        <p>
        limited stock</p>
      ) : null}
    </div>
  );
}

export default App;
