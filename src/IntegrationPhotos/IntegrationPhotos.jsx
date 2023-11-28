// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

import image1 from "../assets/img/background.png";

// import image2 from "../assets/img/background2.jpg";

function App() {
  const [Compteur, setCompteur] = useState(10);

  const handeClick = () => {
    if (Compteur > 0) {
      setCompteur(Compteur - 1);
    }
  };

  return (
    <div>
      <h1>Liste de produits</h1>
      <div className="product-card">
        <img src={image1} alt="Nom du produit 1" />
        <h2>Nom du produit 1</h2>
        <p>Prix : 19.99 €</p>
        <p>Stock : {Compteur}</p>
        <button onClick={handeClick}>Ajouter au panier</button>
        {Compteur === 0 ? (
        <p>Sold out</p>
      ) : Compteur <= 3 ? (
        <p>limited stock</p>
      ) : null}
      </div>

    <div className="product-card">
        <img src={image1} alt="Nom du produit 1" />
        <h2>Nom du produit 1</h2>
        <p>Prix : 19.99 €</p>
        <p>Stock : {Compteur}</p>
        <button onClick={handeClick}>Ajouter au panier</button>
        {Compteur === 0 ? (
        <p>Sold out</p>
      ) : Compteur <= 3 ? (
        <p>limited stock</p>
      ) : null}
      </div>
    </div>
  );
}

export default App;
