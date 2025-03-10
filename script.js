document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, .project, .job");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log("Observed Element:", entry.target); // Debugging Log
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                entry.target.style.visibility = "visible"; // Force visibility
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.visibility = "hidden"; // Ensure it's hidden initially
        observer.observe(section);
    });
});
