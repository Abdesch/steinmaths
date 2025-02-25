document.addEventListener('DOMContentLoaded', function () {
    const accordionSections = document.querySelectorAll('.accordion-section');

    accordionSections.forEach(section => {
        section.addEventListener('toggle', function() {
            if (this.open) { // Si cette section est ouverte
                // Fermer toutes les autres sections
                accordionSections.forEach(otherSection => {
                    if (otherSection !== this && otherSection.open) {
                        otherSection.open = false;
                    }
                });
            }
        });
    });

    // Obtenir toutes les sections "details" et les liens de téléchargement
    const detailsElements = document.querySelectorAll('.accordion-section');
    detailsElements.forEach(detailsElement => {
        // Vérifier si l'élément courant n'est pas le premier
        if (!detailsElement.matches(':first-of-type')) {
            // Cacher l'élément
            detailsElement.style.display = 'none';
        }
        
        // Si il clique sur l'element il s'affiche
        detailsElement.addEventListener('toggle', function() {
            // Vérifier si l'élément courant est bien la section à enlever
            if (!detailsElement.matches(':first-of-type')) {
                 if (detailsElement.style.display === 'none'){
                     detailsElement.style.display = 'block';
                 } else {
                     detailsElement.style.display = 'none';
                 }
            }
        });
    });
});
