import { useState } from "react";
// import image1 from "../assets/img/background.png";
import image2 from "../assets/img/img.png";
// import { fontawesome } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

 export function Ajouter() {
  const [listeAppareil, setlisteAppareil] = useState([
    { id: 1, nom: "Smart Phone", prix: 100000 },
    { id: 2, nom: "Chargeur" , prix: 40000},
    { id: 3, nom: "Ecouteur" , prix: 20000},
    { id: 4, nom: "Boitier" , prix: 30000}
  ]);

  const [nouveauProduit, setnouveauProduit] = useState("");
  const [message, setMessage] = useState(''); 

  const handleDelete = (id) => {
    setlisteAppareil((prevList) =>
      prevList.filter((appareil) => appareil.id !== id)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Vérifier si l'input est vide
    if (nouveauProduit.trim() === "") {
      // console.log("Vous n'avez rien insérer !");
      setMessage('Le champ est vide. Veuillez saisir un produit.');
      // Si l'input est vide, ne rien faire
      return;
    }
  
    // Si l'input n'est pas vide, ajouter le produit à la liste
    const ProduitCopy = [...listeAppareil];
    const id = new Date().getTime();
    const nom = nouveauProduit;
    ProduitCopy.push({ id: id, nom: nom });
  
    setlisteAppareil(ProduitCopy);
  
    // Réinitialiser l'input
    setnouveauProduit("");
  };
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setnouveauProduit(event.target.value);
  };

  return (
    <div>
      <h1>Shopping</h1>
      <div className="product-cards">
      <img src={image2} alt="Nom du produit 1" />
        {listeAppareil.map((appareil) => (
          <div key={appareil.id} className="product-card">
            <h2>{appareil.nom}</h2>
            <p>Prix : {appareil.prix}</p>
            <button onClick={() => handleDelete(appareil.id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="add">
        <input
          value={nouveauProduit}
          type="text"
          placeholder="Ajouter un produit..."
          onChange={handleChange}
        />

        <button>Ajouter +</button>
        </div>
      </form>
    </div>

  );
}

export default Ajouter;
