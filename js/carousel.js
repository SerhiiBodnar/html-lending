
(function () {

    const slides = [
        '<div><img src="img/f150mods.jpg" alt="Ford"></div>',
        '<div><img src="img/f150-raptor-mods.jpg" alt="Ford"></div>',
        '<div><img src="img/f150-raptor.jpg" alt="Ford"></div>',
        '<div><img src="img/f150camp.jpg" alt="Ford"></div>',
        '<div><img src="img/f150galery.jpg" alt="Ford"></div>',
        '<div><img src="img/ram-2500.jpg" alt="Ram"></div>',
        '<div><img src="img/ram-camp.jpg" alt="Ram"></div>',
        '<div><img src="img/ram-mods.jpg" alt="Ram"></div>',
        '<div><img src="img/tundra-mods.jpg" alt="Tundra"></div>',
        '<div><img src="img/tundra-galery.jpg" alt="Tundra"></div>',
        '<div><img src="img/tundra-camp.jpg" alt="Tundra"></div>',
        '<div><img src="img/tundra-rocks.jpg" alt="Tundra"></div>'
    ];

    let currentSlide = 0;

    function renderSlides(slides) {
        const slideContainer = document.querySelector('.carousel__slides');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 800) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 1000) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }
    renderSlides(slides);

    const prevButton = document.querySelector('.carousel__prev');
    prevButton.addEventListener('click', prevSlide);
    
    const nextButton = document.querySelector('.carousel__next');
    nextButton.addEventListener('click', nextSlide);

    window.addEventListener('resize', () => renderSlides(slides));

})();