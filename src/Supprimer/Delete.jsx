import { useState } from "react";

function Delete() {
  // state => toujours stocké dans une variable

  //dans react on peut stocker du JSX dans une variable
  const [listeAppareil, setlisteAppareil] = useState([
    { id: 1, nom: "Smart Phone" },
    { id: 2, nom: "Chargeur" },
    { id: 3, nom: "Ecouteur" },
    { id: 4, nom: "Boitier" }
    //On peut stocker un element JSX dans une variable et donc un tableau
  ]);
  //const listeFruit = [<li>Fraise</li>, <li>Banane</li>, <li>Mangue</li>, <li>Abricot</li>] ;

  //Comportement
  const handleDelete = (id) => {
    //1-copie le state
    const appareilCopy = [...listeAppareil];
    //2 manieres pour faire une copie en React:
    //Méthode 1:
    // =>const appareilCopy = appareil.slice()
    /**extraire une portion d'un tableau existant sans modifier le tableau d'origine.
     *  Elle crée une nouvelle copie du tableau contenant les éléments de la plage spécifiée
     * (ou de l'ensemble complet si aucun argument n'est passé) et renvoie cette copie sous forme d'un nouveau tableau. */

    //2.manipuler le state
    const appareilCopyUpdated = appareilCopy.filter(
      (appareil) => appareil.id !== id
    );

    //3.modifier le state avec le setter
    setlisteAppareil(appareilCopyUpdated);
  };

  //Affichage(render)
  return (
    <div>
      <h1>Listes produits</h1>
      <table>
        <tr>
          <ul>
            {listeAppareil.map((appareil) => (
              <li key={appareil.id}>
                {appareil.nom}
                <button onClick={() => handleDelete(appareil.id)}>
                  {" "}
                  supprimer
                </button>
              </li>
            ))}
          </ul>
        </tr>
      </table>
    </div>
  );
}
// map : générer dynamiquement des listes ou des éléments à partir d'un tableau de données

export default Delete;
