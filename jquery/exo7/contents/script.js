$(document).ready(() => {
    // Sélectionner les paragraphes
    const paragraphs = $("p");
    
    // Enlever les paragraphes
    function removeContent() {
    paragraphs.remove()};

    setTimeout(removeContent, 3000);
  });