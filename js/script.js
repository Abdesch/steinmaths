document.addEventListener('DOMContentLoaded', function () {
    const accordionSections = document.querySelectorAll('.accordion-section');

    accordionSections.forEach(section => {
        section.addEventListener('toggle', function() {
            if (this.open) {
                // Fermer toutes les autres sections, peu importe le tableau
                accordionSections.forEach(otherSection => {
                    if (otherSection !== this && otherSection.open) {
                        otherSection.open = false;
                    }
                });
            }
        });
    });
});
