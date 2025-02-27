document.addEventListener('DOMContentLoaded', function () {
    const sectionTables = document.querySelectorAll('.section-table');

    sectionTables.forEach(table => {
        const accordionSections = table.querySelectorAll('.accordion-section');
        const firstSection = accordionSections[0];

        accordionSections.forEach(section => {
            section.addEventListener('toggle', function () {
                if (this.open) {
                    // Fermer les autres sections dans le même section-container
                    accordionSections.forEach(otherSection => {
                        if (otherSection !== this && otherSection.open) {
                            otherSection.open = false;
                        }
                    });
                }
            });
        });
    });

    // ----- AJOUT DU DÉFILEMENT AUTOMATIQUE -----
    const carousel = document.querySelector('.carousel-container'); // Sélection du conteneur du carrousel
    const slides = document.querySelectorAll('.carousel-container img'); // Sélection des images
    let index = 0; // Position actuelle de l'image

    function showSlide() {
        index++;
        if (index >= slides.length) index = 0; // Revient à la première image après la dernière
        carousel.style.transform = `translateX(${-index * 100}%)`; // Déplace le carrousel
    }

    setInterval(showSlide, 3000); // Défilement automatique toutes les 3 secondes
});
