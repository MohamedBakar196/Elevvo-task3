// Intersection Observer for fade/slide-up animations
document.addEventListener('DOMContentLoaded', function () {
    const animatedSections = document.querySelectorAll('.features-section, .testimonials-section, .pricing-section');
    const animatedCards = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-section');
            }
        });
    }, { threshold: 0.2 });

    animatedSections.forEach(section => sectionObserver.observe(section));

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-card');
            }
        });
    }, { threshold: 0.2 });

    animatedCards.forEach(card => cardObserver.observe(card));
});
