// Attendre que le document soit prêt
$(document).ready(() => {
    // Sélectionner tous les paragraphes
    const paragraphs = $("p");

    // Supprimer le contenu des paragraphes tout en conservant les éléments
    function  deleteContent() {
    paragraphs.each((index, paragraph) => {
      $(paragraph).text(''); // Supprimer le texte
    })};

    setTimeout(deleteContent, 3000); //timeout pour voir la suppression en direct
  });