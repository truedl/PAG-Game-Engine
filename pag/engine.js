function Game(id, args={'w': '250', 'h': '250'}){
  var x = document.createElement('canvas');
  x.id = id;
  x.width = args['w'];
  x.height = args['h'];
  document.body.appendChild(x);
  this.game = document.getElementById(id);
  this.ctx = this.game.getContext('2d');
  return {game: this.game,
          ctx: this.ctx,
          data: {},
          animate: {},
          cont: {},
          update: function(x, y){
            setInterval(function(){
              ctx.clearRect(0, 0, this.game.width, this.game.height);
              y();
            }, 1000/x)
          },
          draw: {
            color: function(color){
              ctx.fillStyle = color;
            },
            square: function(x, y, size){
              ctx.fillRect(x, y, size, size);
            },
            custom: function(x, y, sw, sh){
              ctx.fillRect(x, y, sw, sh);
            },
            image: function(name, x, y, args=[0]){
              if(args.length > 1){
                ctx.drawImage(pag.data[name], x, y, args[0], args[1]);
              } else {
                ctx.drawImage(pag.data[name], x, y);
              }
            },
            animate: function(src, x, y){
              ctx.drawImage(src, x, y);
            },
            text: function(t, x, y){
              ctx.fillText(t, x, y);
            }
          },
          image: {
            load: function(x, y){
              pag.data[x] = new Image();
              pag.data[x].src = y;
            }
          },
          animate: {
            start: function(f, name, args, x=0){
              for(var i = 0; i < args.length; i++){
                pag.image.load(name+i, args[i]);
              }
              pag.animate[name] = [];
              pag.animate[name][1] = pag.data[name+x];
              x += 1;
              pag.animate[name][0] = setInterval(function(){
                pag.animate[name][1] = pag.data[name+x];
                if(x < args.length-1){
                  x += 1;
                } else {
                  x = 0;
                }
              }, 1000/f)
            },
            it: function(x){
              return pag.animate[x][1]
            },
            stop: function(x){
              clearInterval(pag.animate[x][0]);
            }
          },
          control: {
            n: [],
            start: function(){
              document.addEventListener('keypress', function(e){
                e = e || window.event;
                if(!pag.control.n.includes(e.charCode)){
                  pag.control.n.push(e.charCode);
                }
              })

              document.addEventListener('keyup', function(e){
                e = e || window.event;
                pag.control.n.splice(pag.control.n.indexOf(e.charCode), 1);
              })
            },
            check: function(){
              for(var i = 0; i < pag.control.n.length; i++){
                pag.onkey.run(pag.control.n[i]);
              }
            }
          },
          onkey: {
            list: {},
            do: function(x, y){
              this.list[x] = y;
            },
            run: function(x){
              this.list[x]();
            }
          },
          platformer: {
            _gravity: 0,
            _fallTo: 0,
            gravity: function(f, x, fallTo, y, i=0){
              this._fallTo = fallTo;
              this._gravity = setInterval(function(){
                if(i != x){
                  i += 0.2;
                }
                if(y.y < fallTo){
                  y.y += i;
                } else {
                  clearInterval(this._gravity);
                  this._gravity = 0;
                }
              }, 1000/f);
            },
            gravityCheck: function(x){
              if(this._gravity == 0 && x.y < this._fallTo || this._gravity == 0 && this._fallTo == 0){
                return false;
              } else {
                return true;
              }
            }
          },
          ajax: {
            response: function(to, method){
              var xr = new XMLHttpRequest();
              xr.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                  pag.cont['0'] = this.responseText;
                }
              };
              xr.open(method, to(), true);
              xr.send();
            },
            send: function(to, method){
              var xr = new XMLHttpRequest();
              xr.open(method, to, true);
              xr.send();
            }
          },
          online: {
            update: function(f, retfunc, _ajax, args){
              setInterval(function(){
                _ajax(args[0], args[1]);
                retfunc(pag.cont['0']);
              }, f*1000);
            }
          }
        }
}

function Controller(x, y){
  this.x = x;
  this.y = y;
}
