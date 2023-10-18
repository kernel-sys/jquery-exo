$(document).ready(function() {
    // Sélectionner l'élément avec l'ID "monParagraphe"
    var element = $("#monParagraphe");

    // Fonction pour mettre à jour le contenu après 5 secondes
    function updateContent() {
      element.text("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
    }

    // Définir un minuteur de 3 secondes
    setTimeout(updateContent, 3000);
  });