x/*
Part 7: Collisions

Hello!, today we learn how to use pag.object.collision.detect and detect a box collision (pag.object.collision.box).
With that thing you can create "solid" objects!.
*/

// Create a pag variable and set to Game as default...
var pag = Game('tutorial', {'w': 800, 'h': 600});

// Controller named player...
var player = new Controller(pag.game.width/2-15, pag.game.height/2-15);

// 1. Here we set "detect" variable to our pag.object.collision.detect, we use that instead of our full name to short the line.
var detect = pag.object.collision.detect;

// Start PAG Control...
pag.control.start();

// 2. On Key 100 (d) do...
pag.onkey.do(100, function(){
  // If detected pag.object.collision.box with player.x + 5 is inside the object on pos[x => 100, y => 100] and size => 30x30 do...
  if(detect(pag.object.collision.box, '+x5', player, {'pos': [100, 100], 'size': 30})){
    // What to do, I choose do nothing (Solid effect).
    return;
  } else {
    // If detection is false we move our player by x+=5.
    player.x += 5;
  }
})

// Point 2... ( 97(a) )
pag.onkey.do(97, function(){
  if(detect(pag.object.collision.box, '-x5', player, {'pos': [100, 100], 'size': 30})){
    return;
  } else {
    player.x -= 5;
  }
})

// Point 2... ( 115(s) )
pag.onkey.do(115, function(){
  if(detect(pag.object.collision.box, '+y5', player, {'pos': [100, 100], 'size': 30})){
    return;
  } else {
    player.y += 5;
  }
})

// Point 2... ( 119(w) )
pag.onkey.do(119, function(){
  if(detect(pag.object.collision.box, '-y5', player, {'pos': [100, 100], 'size': 30})){
    return;
  } else {
    player.y -= 5;
  }
})

// pag.update...
pag.update(24, function(){
  // Choose Draw Color #000 (black)
  pag.draw.color('#000');

  // Draw object on x => 100, y => 100, size => 30x30
  pag.draw.square(100, 100, 30);

  // Choose Draw Color Red
  pag.draw.color('red');

  // Draw Player
  pag.draw.square(player.x, player.y, 30);

  // Pag control check
  pag.control.check();
})
