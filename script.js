document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const y = target.getBoundingClientRect().top + window.scrollY - 72;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    // close navbar on mobile if open
                    const bsCollapse = document.querySelector('#navCollapse');
                    if (bsCollapse && bsCollapse.classList.contains('show')) {
                        new bootstrap.Collapse(bsCollapse).hide();
                    }
                }
            }
        });
    });

    // Initialize ScrollSpy
    if (window.bootstrap && document.body) {
        new bootstrap.ScrollSpy(document.body, { target: '#main-nav', offset: 80 });
    }

    // IntersectionObserver for reveal animations
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card, .hero-visual').forEach(el => {
        io.observe(el);
    });

    // Subscribe form simple validation/demo
    const form = document.getElementById('subscribe-form');
    const msg = document.getElementById('subscribe-msg');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = form.querySelector('input[name="email"]');
            if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                msg.textContent = 'Please enter a valid email.';
                msg.classList.remove('text-success');
                msg.classList.add('text-danger');
                email.focus();
                return;
            }
            msg.textContent = 'Thanks — you are subscribed!';
            msg.classList.remove('text-danger');
            msg.classList.add('text-success');
            form.reset();
        });
    }
});
