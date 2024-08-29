  const slider = document.querySelector('.slider');
        const leftArrow = document.querySelector('.slider-arrow.left');
        const rightArrow = document.querySelector('.slider-arrow.right');
        const itemWidth = document.querySelector('.slider-item').offsetWidth + 32; // 32px for margins
        let currentPosition = 0;

        leftArrow.addEventListener('click', () => {
            if (currentPosition < 0) {
                currentPosition += itemWidth;
                slider.style.transform = `translateX(${currentPosition}px)`;
            }
        });

        rightArrow.addEventListener('click', () => {
            const maxPosition = -(itemWidth * 7); // 10 items - 3 visible items
            if (currentPosition > maxPosition) {
                currentPosition -= itemWidth;
                slider.style.transform = `translateX(${currentPosition}px)`;
            }
        });


