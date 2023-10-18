// Attendre que le document soit prêt
$(document).ready(() => {
    // Sélectionner tous les paragraphes avec la classe "colored-paragraph"
    const paragraphs = $(".colored-paragraph");

    // Modifier la couleur des paragraphes
    function updateColor(){
    paragraphs.css("color", "red",);
    }

    setTimeout(updateColor, 3000);
  });