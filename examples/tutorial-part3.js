/*
Part 3: Work With Images

Now we load image and use it
*/
var pag = Game('tutorial', {'w': '500', 'h': '500'})
// 1. load image
pag.image.load('tutorial-image', 'examples/js/image.png'); // pag.image.load('image-name', 'path/to/image')

pag.update(24, function(){
  // 2. draw loaded image
  pag.draw.image('tutorial-image', 10, 10); // pag.draw.image('image-name', x, y)
})
