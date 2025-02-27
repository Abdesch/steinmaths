document.addEventListener('DOMContentLoaded', function () {
    // Gestion des sections accordéon (TON CODE EXISTANT)
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

    // ✅ Ajout de la gestion du carrousel
    const images = document.querySelectorAll(".slider img"); // Images du carrousel
    const dots = document.querySelectorAll(".carousel-indicators span"); // Points de navigation
    let currentIndex = 0;

    function updateCarousel(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none"; // Afficher uniquement l’image sélectionnée
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index); // Mettre à jour l’état actif du point
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel(currentIndex);
        });
    });

    updateCarousel(currentIndex); // Initialisation du carrousel
});

