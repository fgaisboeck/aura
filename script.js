document.addEventListener('DOMContentLoaded', function() {
    // Burger Menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Schließe Menü beim Klick auf einen Link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar Scroll Effect - Auto Hide/Show
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    const scrollThreshold = 100; // Mindest-Scroll-Distanz bevor die Navbar wieder erscheint
    
    // Initialisierung: Header beim ersten Laden ausblenden
    navbar.classList.add('hidden');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Wenn ganz oben, Navbar ausblenden
        if (scrollTop <= 0) {
            navbar.classList.add('hidden');
            navbar.classList.remove('scrolled');
        } 
        // Beim Scrollen nach unten, Navbar einblenden
        else if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            navbar.classList.remove('hidden');
            navbar.classList.add('scrolled');
        } 
        // Beim Scrollen nach oben, Navbar einblenden
        else if (scrollTop < lastScrollTop) {
            navbar.classList.remove('hidden');
            navbar.classList.add('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Smooth Scroll für Anker-Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 