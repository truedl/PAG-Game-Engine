/*
Part 6.1: Platformer Gravity

First Platformer tutorial about gravity
*/

var pag = Game('tutorial', {'w': '500', 'h': '500'})
// 1. Player Controller is required
var player = new Controller(50, 10);

// 2. Setup Platformer Gravity
pag.platformer.gravity(24, 25, 440, player); // pag.platformer.gravity(runPerFrames, maxFallSpeed, fallToY, ControllerVariable)

pag.update(24, function(){
  // 3. Update Gravity
  pag.platformer.gravityCheck(player); // pag.platformer.gravityCheck(ControllerVariable)
  pag.draw.square(player.x, player.y, 40); // draw the player
})
