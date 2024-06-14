class Game {
    // code to be added
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("game-end");
        this.width = 500;
        this.height = 600;

        this.player;
        this.obstacles = [];

        this.currentFrame = 0;

        this.lives = 3;
        this.gameOver = false;
    }

    start() {
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.endScreen.style.display = "none";

        this.player = new Player(this.gameScreen);
        this.obstacles.push(new Obstacle(this.gameScreen));

        const intervalId = setInterval(() => {
            this.currentFrame += 1;
            this.player.move();

            if (this.currentFrame % 100 === 0) {
                this.obstacles.push(new Obstacle(this.gameScreen))
            }

            const nextObstacles = [];

            this.obstacles.forEach(obstacle => {
                obstacle.move();
                if (this.player.didCollide(obstacle)) {
                    obstacle.element.remove();
                    this.lives -= 1;
                    if (this.lives === 0) {
                        this.gameOver = true;
                    }
                }
                else if (obstacle.top < this.gameScreen.clientHeight) {
                    nextObstacles.push(obstacle)
                }
                else if (obstacle.top >= this.gameScreen.clientHeight) {
                    obstacle.element.remove();
                }
            });

            document.getElementById("lives").innerText = this.lives;

            this.obstacles = nextObstacles;

            if (this.gameOver) {
                clearInterval(intervalId);
                this.gameScreen.style.display = "none";
                this.endScreen.style.display = "block";

                this.obstacles.forEach(currentObstacle => {
                    currentObstacle.element.remove()
                });
                this.player.element.remove();
            }
        }, 1000 / 60);
    }
}