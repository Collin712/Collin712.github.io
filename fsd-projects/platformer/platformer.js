$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height, canvas.width + 100, 200); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    // createPlatform(100, 600, 400, 50, "green");
    // createPlatform(725, 690, 100, 10, "red");
    // createPlatform(1050, 400, 500, 20, "blue");
    // createPlatform(80, 400, 700, 5, "yellow");
    // createPlatform(1100, 600, 40, 300, "orange");
    // createPlatform(750, 150, 50, 450, "black");
    // createPlatform(790, 0, 10, 450, "black");
    // createPlatform(1350, 250, 50, 3, "transparent");
    function createRamp(x, y, size, direction, length, color){
      let rampSegment = {width: size, height: 0};
      if(direction === "right"){  
        for(let i = 0; i <= length; i++){
          if(i >= length - size){
            rampSegment.width--;
          }
          if(i <= size){
            rampSegment.height++;
          }
          createPlatform(x, y, rampSegment.width, rampSegment.height, color);
          y--; x++;
        }
      }
      if(direction === "left"){  
        x -= size;
        length -= size;
        for(let i = 0; i <= length; i++){
          y--; x--;
          if(i <= size){
            rampSegment.height++;
          }
          createPlatform(x, y, rampSegment.width, rampSegment.height, color);

        }
        for(let i = 0; i <= size; i++){
          y--;
          rampSegment.width--;
          createPlatform(x, y, rampSegment.width, rampSegment.height, color);
        }
      }
    }
    createPlatform(550, 630, 900, 200, "red");
    createRamp(700, 750, 400, "left", 1000, "gray");
    createRamp(900, 750, 400, "right", 1000, "gray");
    createPlatform(420, 100, 20, 2, "limegreen");
    createPlatform(500, 150, 20, 2, "limegreen");


    // TODO 3 - Create Collectables
    createCollectable("coin", 650, 0);
    createCollectable("star", 900, 0);

    
    // TODO 4 - Create Cannons
    // createCannon("top", 1460, 10);
    createCannon("left", 570, 1);
    // createCannon("bottom", -60, 10);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
