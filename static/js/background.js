document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const images = [
        './static/images/background/background1.webp',
        './static/images/background/background2.webp',
        './static/images/background/background3.webp',
        './static/images/background/background4.webp',
        './static/images/background/background5.webp',
        './static/images/background/background6.webp'
    ];
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    changeBackground();
    setInterval(changeBackground, 10000);
});