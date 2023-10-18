// Attendre que le document soit prêt
$(document).ready(() => {
    // Attendre 3 secondes avant d'ajouter la bordure
    setTimeout(() => {
      // Sélectionner les paragraphes
      const paragraphs = $("p");

      // Ajouter une classe aux paragraphes pour appliquer la bordure
      paragraphs.addClass("bordered-paragraph");
    }, 3000);
  });