/*
Part 4: Animation
*/
var pag = Game('tutorial', {'w': '500', 'h': '500'})
// 1. start animation
pag.animate.start(6, 'tutorial-animate', ['examples/image/1.png', 'examples/image/2.png', 'examples/image/3.png', 'examples/image/4.png']); // pag.animate.start(fps, 'animate-name', [args(images)])

pag.update(24, function(){
  // 2. draw animation
  pag.draw.animate(pag.animate.it('tutorial-animate'), 160, 80); // page.draw.animate(pag.animate.it('animate-name'), x, y)
})

/*
Stop Animation:
  pag.animate.stop('animate-name');
*/
