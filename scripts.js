document.addEventListener('DOMContentLoaded', () => {

    function initializeCarrossel(carrosselId) {
        const carrosselContainer = document.getElementById(carrosselId);
        const slidesContainer = carrosselContainer.querySelector('.carrossel-slides');
        const slides = carrosselContainer.querySelectorAll('.carrossel-slides img');
        const prevButton = carrosselContainer.querySelector('.prev-btn');
        const nextButton = carrosselContainer.querySelector('.next-btn');
        
        if (slides.length === 0) return;

        let currentIndex = 0; 

        function showSlide(index) {
            slidesContainer.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        if (slides.length > 1) {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        }
    }

    initializeCarrossel('presentation-carrossel');

    initializeCarrossel('projects-carrossel');

});