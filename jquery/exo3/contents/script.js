  // Attendre que le document soit prêt
  $(document).ready(() => {
    // Sélectionner l'input avec l'ID "monInput"
    const input = $("#monInput");

    // Récupérer la valeur de l'input
    const valeur = input.val();

    // Afficher la valeur dans la console
    console.log(valeur);

    // Afficher la valeur dans une alerte
    alert(valeur);
  });