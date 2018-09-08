/*
Part 1: New Project

Welcome to my tutorial about my game engine ;),
We learn how to start new project right now. :D!
*/
// 1. set pag to Game
var pag = Game('tutorial', {'w': '500', 'h': '500'})

// 2. start pag.update function
pag.update(24, function(){ // running with 24 frames per second
  // 3. lets try to draw a square!, (running every frame)
  // 4. pag.draw.square(x, y, size)
  pag.draw.square(10, 10, 40); // square, x => 10, y => 10, 40x40
  // 5. try draw again square but with diffrent color!
  // 6. pag.draw.color('color')
  pag.draw.color('blue'); // choose blue color
  pag.draw.square(50, 10, 40); // square, x => 40, y => 40, 40x40
})
