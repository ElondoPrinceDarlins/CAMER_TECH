<<<<<<< HEAD
=======
const carouselImages = document.getElementById('carouselImages');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let currentIndex = 0;

rightArrow.addEventListener('click', () => {
    if (currentIndex < 4) {
        currentIndex++;
        carouselImages.style.transform = `translateX(-${currentIndex * 25}%)`;
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carouselImages.style.transform = `translateX(-${currentIndex * 25}%)`;
    }
});
>>>>>>> 9f4dc7a (g)
