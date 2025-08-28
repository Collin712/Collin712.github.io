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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 600, 400, 50, "green");
    createPlatform(725, 690, 100, 10, "red");
    createPlatform(1050, 400, 500, 20, "blue");
    createPlatform(80, 400, 700, 5, "yellow");
    createPlatform(1100, 600, 40, 300, "orange");
    createPlatform(750, 150, 50, 450, "black");
    createPlatform(790, 0, 10, 450, "black");
    createPlatform(1350, 250, 50, 3, "lightblue");



    // TODO 3 - Create Collectables
createCollectable("star", 1350, 0);
createCollectable("star", 750, 0);

    
    // TODO 4 - Create Cannons
    createCannon("top", 1460, 10);
    createCannon("left", 670, 10);
    createCannon("bottom", -60, 10);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
