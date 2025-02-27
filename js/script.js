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
});
