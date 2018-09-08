var pag = Game('first-game', {'w': '500', 'h': '500'}) // Game(id, {args})
var player = new Controller(200, 10); // Create new Controller(x, y)

pag.image.load('first-image', 'examples/image/image.png') // pag.image.load('image-name', 'image-location')
pag.animate.start(6, 'first-animate', ['examples/image/1.png', 'examples/image/2.png', 'examples/image/3.png', 'examples/image/4.png']); // pag.animate.start(fps, 'animate-name', [args(images)])
pag.control.start(); // starting control system

pag.onkey.do(100, function(){ // onkey 100 (d), move +3 player.x
  player.x += 3;
})

pag.onkey.do(97, function(){ // onkey 97 (a), move -3 player.x
  player.x -= 3;
})

pag.onkey.do(115, function(){ // onkey 115 (s), move +3 player.y
  player.y += 3;
})

pag.onkey.do(119, function(){ // onkey 119 (w), move -3 player.y
  player.y -= 3;
})

pag.update(24, function(){ // pag.update(fps, functionPerFrame)
  pag.draw.color('red') // pag.draw.color('color') choose color to draw with
  pag.draw.square(10, 30, 100); // pag.draw.square(x, y, size) draw a square 100x100 on x => 10, y => 10
  pag.draw.image('first-image', 40, 40, [100, 100]); // pag.draw.image('image-name', x, y, [w, h (OPTIONAL)]) draw image 100x100
  pag.draw.animate(pag.animate.it('first-animate'), 160, 80); // page.draw.animate(pag.animate.it('animate-name'), x, y) draw animation

  pag.draw.color('#000') // pag.draw.color('color') choose color to draw with
  pag.draw.text('Player X: '+player.x, 10, 10);
  pag.draw.text('Player Y: '+player.y, 10, 20);
  pag.draw.color('orange') // pag.draw.color('color') choose color to draw with
  pag.draw.square(player.x, player.y, 40); // player 40x40
  pag.control.check(); // pag.control.check(); process keys
});

/*
MORE:
pag.animate.stop('animate-name');
*/
