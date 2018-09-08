/*
Part 5: Text
*/
var pag = Game('tutorial', {'w': '500', 'h': '500'})

pag.update(24, function(){
  // 2. draw text
  pag.draw.text('Welcome!', 10, 10); // pag.draw.text('text', x, y)
})
