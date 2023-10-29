document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const anteriorBtn = document.getElementById("anteriorBtn");
    const siguienteBtn = document.getElementById("siguienteBtn");
    let currentIndex = 0;

    function mostrarSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function actualizarBotones() {
        anteriorBtn.disabled = currentIndex === 0;
        siguienteBtn.disabled = currentIndex === slides.length - 1;
    }

    mostrarSlide(currentIndex);
    actualizarBotones();

    anteriorBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            mostrarSlide(currentIndex);
            actualizarBotones();
        }
    });

    siguienteBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            mostrarSlide(currentIndex);
            actualizarBotones();
        }
    });
});