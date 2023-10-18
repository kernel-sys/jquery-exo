// Attendre que le document soit prêt
$(document).ready(() => {
    // Sélectionner l'élément h1 par son ID
    const titre = $("#monTitre");

    // Attendre 3 secondes avant de démarrer l'animation
    setTimeout(() => {
      // Appliquer une animation pour modifier la taille du texte
      titre.animate({ fontSize: "36px" }, 1000); // 1000ms = 1 seconde
    }, 3000);
  });