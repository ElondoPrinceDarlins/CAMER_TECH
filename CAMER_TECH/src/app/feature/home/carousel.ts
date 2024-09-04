// carousel.ts

class Carousel {
    private carousel: HTMLElement;
    private prevButton: HTMLElement;
    private nextButton: HTMLElement;
    private scrollAmount: number;
    private scrollStep: number;

    constructor(carouselId: string, prevButtonId: string, nextButtonId: string) {
        this.carousel = document.getElementById(carouselId) as HTMLElement;
        this.prevButton = document.getElementById(prevButtonId) as HTMLElement;
        this.nextButton = document.getElementById(nextButtonId) as HTMLElement;
        this.scrollAmount = 0;
        this.scrollStep = this.carousel.clientWidth / 4;

        this.initEvents();
    }

    private initEvents(): void {
        this.nextButton.addEventListener('click', () => this.scrollNext());
        this.prevButton.addEventListener('click', () => this.scrollPrev());
    }

    private scrollNext(): void {
        this.carousel.scrollBy({ left: this.scrollStep, behavior: 'smooth' });
        this.scrollAmount += this.scrollStep;
        if (this.scrollAmount >= this.carousel.scrollWidth - this.carousel.clientWidth) {
            this.scrollAmount = 0;
            this.carousel.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }

    private scrollPrev(): void {
        this.carousel.scrollBy({ left: -this.scrollStep, behavior: 'smooth' });
        this.scrollAmount -= this.scrollStep;
        if (this.scrollAmount <= 0) {
            this.scrollAmount = this.carousel.scrollWidth - this.carousel.clientWidth;
            this.carousel.scrollTo({ left: this.scrollAmount, behavior: 'smooth' });
        }
    }
}

// Initialize the carousel when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel('carousel', 'prev', 'next');
});
