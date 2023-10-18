// Attendre que le document soit prêt
$(document).ready(() => {
    // Sélectionner l'élément par ID
    const element = $("#monParagraphe");

    // Ajouter la classe "hide" à l'élément
    function hideContent() {
    element.addClass("hide");
    }

    setTimeout(hideContent, 3000);
});