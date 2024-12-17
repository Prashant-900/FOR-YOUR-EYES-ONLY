function scrollToElement() {
    const element = document.querySelector(".about"); // Use querySelector to select the element
    element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
}
// script.js
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();

        // Check if element is visible in the viewport
        if (rect.top < windowHeight - 50) {
            el.classList.add('show'); // Add 'show' class when visible
        } else {
            el.classList.remove('show'); // Remove 'show' class when out of view
        }
    });
});

document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll(".swipe-text"); // Select all swipe-text elements

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        
        // Calculate the scroll percentage based on how far the element has scrolled
        const currentTop = rect.top;

        // If the element is scrolled past a certain point, change its position
        if (currentTop < 100) {
            const scrollPercentage = Math.max(0, Math.min(1, (100 - currentTop) / 100));

            // Calculate how far to move the element horizontally (move right based on scroll)
            const moveDistance = scrollPercentage * (window.innerWidth / 2);

            // Adjust opacity as well (fade out as we move right)
            const newOpacity = 1 - scrollPercentage;

            // Apply the translation (move right) and change opacity
            el.style.transform = `translate(-50%, -50%) translateX(${moveDistance}px)`;
            el.style.opacity = newOpacity;
        } else {
            // Reset back to the original position and opacity when scrolled back up
            el.style.transform = `translate(-50%, -50%)`; // Center the element again
            el.style.opacity = 1; // Reset opacity to full
        }
    });
});
