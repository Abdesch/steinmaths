// Activer la recherche (ajoute un champ de recherche)
document.querySelector(".search-icon").addEventListener("click", function() {
    let searchField = document.createElement("input");
    searchField.setAttribute("type", "text");
    searchField.setAttribute("placeholder", "Rechercher...");
    searchField.style.marginLeft = "10px";
    document.querySelector("nav").appendChild(searchField);
});

// Vérifier que le slider fonctionne
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 }},
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 }}
        ]
    });
});

