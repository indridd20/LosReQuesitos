let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;

    const offset = -slideIndex * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

showSlide(slideIndex); // Mostrar la primera imagen al cargar
