  // Attendre que le document soit prêt
  $(document).ready(() => {
    // Sélectionner les paragraphes
    const paragraphs = $("p");
    
    // Cacher les paragraphes
    function hideContent() {
    paragraphs.hide()};

    setTimeout(hideContent, 3000);
  });