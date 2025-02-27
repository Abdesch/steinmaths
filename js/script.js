document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-container'); // Conteneur des images
    const slides = document.querySelectorAll('.carousel-container img'); // Sélection des images
    const dots = document.querySelectorAll('.dot'); // Sélection des petits cercles
    let index = 0; // Position actuelle de l'image

    function showSlide(i) {
        index = (i >= slides.length) ? 0 : (i < 0 ? slides.length - 1 : i); // Boucle infinie
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

    // Interaction utilisateur : arrêter/redémarrer le défilement
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showSlide(i);
            clearInterval(interval);
            interval = setInterval(autoSlide, 3000); // Relance l'auto défilement après interaction
        });
    });
});
