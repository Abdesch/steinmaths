document.addEventListener('DOMContentLoaded', function () {
    const sectionTables = document.querySelectorAll('.section-table');

    sectionTables.forEach(table => {
        const accordionSections = table.querySelectorAll('.accordion-section');

        accordionSections.forEach(section => {
            section.addEventListener('toggle', function() {
                if (this.open) {
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
