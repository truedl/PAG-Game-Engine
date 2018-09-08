/*
Part 2: Controller

Ok we learn how to start a game with PAG Game Enging,
Now we learn how to create player controller and run functions on keypress
*/
var pag = Game('tutorial', {'w': '500', 'h': '500'})
// 1. set variable to new Controller(x, y);
var player = new Controller(10, 10);
// 2. start the control
pag.control.start();

// 3. set on-keypress process
// 4. write into pag.onkey.do 2 args, pag.onkey.do(key-charCode, function)
pag.onkey.do(100, function(){
  // 5. here whatever you need
  console.log('D Pressed');
})

pag.update(24, function(){
  // 6. check keys in control
  pag.control.check();
})
