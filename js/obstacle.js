
class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 40;
        this.height = 80;
        this.top = 0;
        this.left = Math.random() * (this.gameScreen.clientWidth - this.width - GRASS_WIDTH * 2) + 50;
        this.element = document.createElement("img");

        this.speed = 3;

        this.element.src = "../images/redCar.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.top += this.speed;
        if (this.top > this.gameScreen.clientHeigth) {
            this.top = -this.height - 200;
            this.left = Math.random() * (this.gameScreen.clientWidth - this.width - GRASS_WIDTH * 2) + 50;
        }
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
}