
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
});
