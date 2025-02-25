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

    document.querySelectorAll('.accordion-section').forEach(accordionSection => {
        const summaryElement = accordionSection.querySelector('summary');
        const downloadLinksElement = accordionSection.querySelector('.download-links');

        // Afficher les liens par défaut seulement pour le premier élément
        if (accordionSection === accordionSections[0] && !accordionSection.querySelector('details').open ) {
            downloadLinksElement.style.display = 'block';
        } else {
            downloadLinksElement.style.display = 'none';
        }

        accordionSection.addEventListener('toggle', function() {
            if (this.open) {
                downloadLinksElement.style.display = 'block';
            } else {
                downloadLinksElement.style.display = 'none';
            }
        });
    });
});
