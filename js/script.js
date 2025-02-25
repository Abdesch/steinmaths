document.addEventListener('DOMContentLoaded', function () {
    const sectionTables = document.querySelectorAll('.section-table');

    sectionTables.forEach(table => {
        const accordionSections = table.querySelectorAll('.accordion-section');
        const firstSection = accordionSections[0]; // Récupère la première section
    
            // Ferme toutes les sections, sauf la première
            for (let i = 1; i < accordionSections.length; i++) {
                accordionSections[i].removeAttribute('open'); // Retire l'attribut "open"
            }
        });
    });
});
