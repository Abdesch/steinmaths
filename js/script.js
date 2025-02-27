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
    const carousel = document.querySelector('.carousel-container'); // Conteneur des images
    const slides = document.querySelectorAll('.carousel-container img'); // Sélection des images
    const dots = document.querySelectorAll('.dot'); // Sélection des petits cercles
    let index = 0; // Position actuelle de l'image

    function showSlide(i) {
        index = i >= slides.length ? 0 : i; // Revenir à la première image après la dernière
        carousel.style.transform = `translateX(${-index * 100}%)`; // Déplace le carrousel
        
        // Met à jour les cercles actifs
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function autoSlide() {
        index++;
        showSlide(index);
    }

    // Défilement automatique toutes les 3 secondes
    let interval = setInterval(autoSlide, 3000);

    // Si l'utilisateur clique sur un dot, il arrête le défilement et le reprend après un moment
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showSlide(i);
            clearInterval(interval);
            interval = setInterval(autoSlide, 3000); // Relance l'auto défilement après interaction
        });
    });

});
