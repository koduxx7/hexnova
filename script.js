document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the fade-up class
    const fadeUpElements = document.querySelectorAll('.fade-up');

    // IntersectionObserver options (trigger when 30% of element is visible)
    const options = {
        root: null, // Default is the viewport
        threshold: 0.3 // Trigger when 30% of the element is visible
    };

    // Callback function for IntersectionObserver
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Element ${entry.target} is in view!`);
                // Add 'visible' class to trigger the fade-up animation
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            } else {
                console.log(`Element ${entry.target} is out of view.`);
            }
        });
    };

    // Initialize the IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each fade-up element
    fadeUpElements.forEach(element => observer.observe(element));

    // Trigger fade-up for elements already in view when page is loaded or refreshed
    fadeUpElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            console.log(`Initial trigger: Element ${element} already in view!`);
            element.classList.add('visible');
        }
    });
});

