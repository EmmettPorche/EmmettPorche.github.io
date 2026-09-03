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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(255, 0, 0)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(895, 650, 30, 290);
createPlatform(1000, 500, 100, 10, );
createPlatform(1200, 415, 230, 10, "lime"); // bright green for a finished platform
createPlatform(500, 650, 30, 280);
createPlatform(125, 650, 30, 130);
createPlatform(1150,600, 85, 10);

    // TODO 3 - Create Collectables
createCollectable("database", 1029, 420, 0.5, 1);
createCollectable("database", 1300, 170, 0.5, 1);
createCollectable("database", 495, 100, 0.5, 1);

    
    // TODO 4 - Create Cannons
createCannon("top", 200, 820);
createCannon("right", 700, 780);
createCannon("top", 970, 820);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
