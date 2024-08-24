* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
}

.carousel-container {
    width: 80%;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
}

.carousel-slide {
    display: flex;
    transition: transform 0.4s ease-in-out;
}

.carousel-item {
    min-width: 33.33%;
    padding: 20px;
}

.carousel-item button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
}

.carousel-item img {
    width: 100%;
    border-radius: 8px;
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    z-index: 100;
}

.left-arrow {
    left: 10px;
}

.right-arrow {
    right: 10px;
}

@media screen and (max-width: 768px) {
    .carousel-item {
        min-width: 50%;
    }
}

@media screen and (max-width: 480px) {
    .carousel-item {
        min-width: 100%;
    }
}
