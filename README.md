<p align="center">
  <img src="https://raw.githubusercontent.com/truedl/truedl-images/master/logo.png" alt="text">
</p>

# PAG-Game-Engine
PAG Game Engine - Javascript Game Engine

# About
PAG Game Engine is easy syntaxed game engine for Javascript (Currect version 002b)

I will show you how to create a project to give you a little taste from pag

(tutorial-part1.js)
```
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
```

# Part 2: Controller
https://github.com/truedl/PAG-Game-Engine/blob/master/examples/tutorial-part2.js

# Part 3: Work With Images
https://github.com/truedl/PAG-Game-Engine/blob/master/examples/tutorial-part3.js

# Part 4: Animation
https://github.com/truedl/PAG-Game-Engine/blob/master/examples/tutorial-part4.js

# Part 5: Text
https://github.com/truedl/PAG-Game-Engine/blob/master/examples/tutorial-part5.js

# Part 6.1: Platformer Gravity
https://github.com/truedl/PAG-Game-Engine/blob/master/examples/tutorial-part6-1.js

# Part 7: Collisions
https://github.com/truedl/PAG-Game-Engine/blob/master/examples/tutorial-part7.js

# Main Example
https://github.com/truedl/PAG-Game-Engine/blob/master/examples/example.js
