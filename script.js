document.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax effect for background
    document.querySelector('.parallax-bg').style.transform = `translateY(${scrolled * 0.5}px)`;
    
    // Parallax effect for cards
    document.querySelectorAll('.parallax-card').forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight && cardBottom > 0) {
            const cardCenter = cardTop + (cardBottom - cardTop) / 2;
            const distanceFromCenter = windowHeight / 2 - cardCenter;
            const parallaxValue = distanceFromCenter * 0.1;
            
            card.style.transform = `translateY(${parallaxValue}px)`;
        }
    });
});