 // Attendre que le document soit prêt
 $(document).ready(() => {
    // Sélectionner l'élément avec l'ID "monParagraphe"
    const element = $("#monParagraphe");
  
    // Fonction fléchée pour remplacer l'élément après 3 secondes
    const replaceWithH1 = () => {
      // Créer un nouvel élément h1 avec le texte souhaité
      const newElement = $("<h1>Nouveau texte en tant que titre h1</h1>");
      
      // Remplacer l'élément par le nouvel élément
      element.replaceWith(newElement);
    }
  
    // Définir un minuteur de 3 secondes pour appeler la fonction de remplacement
    setTimeout(replaceWithH1, 3000);
  });
  