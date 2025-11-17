const navItems = document.querySelectorAll('.nav-item');
const categories = document.querySelectorAll('.skills-category');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(btn => btn.classList.remove('active'));
        item.classList.add('active');

        const target = item.dataset.category;
        categories.forEach(cat => {
            if (cat.id === target) {
                cat.classList.add('active');
            } else {
                cat.classList.remove('active');
            }
        });
    });
});
