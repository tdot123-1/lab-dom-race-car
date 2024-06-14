window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click",() => {
    startGame();
  });

  let game; 

  function startGame() {
    game = new Game();
    console.log("start game");
    game.start()
  }


  document.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.key === "KeyA" || event.key === "ArrowLeft" ) {
      game.player.directionX = -1;
    }
    else if (event.key === "KeyD" || event.key === "ArrowRight") {
      game.player.directionX = 1;
    }
  })

  document.addEventListener("keyup", (event) => {
    console.log(event);
    if (event.key === "KeyA" || event.key === "ArrowLeft" || 
      event.key === "KeyD" || event.key === "ArrowRight"
    ) {
      game.player.directionX = 0;
    }
  });


  
};
