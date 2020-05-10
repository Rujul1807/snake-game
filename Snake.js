class Snake {

  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));

    this.xdir = 0;
    this.ydir = 0;
    frameRate(30);
    this.len = 0;

  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(createVector(0, 0));
    this.body.push(head);

  }

  eat(pos) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x == pos.x && y == pos.y) {
      this.grow();
      //  this.update();
      return true;
    }
    return false;
  }
 endGame(){
      let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x > 400 || x < 0 || y > 400  || y < 0) {
    return true;  
    }
   for(var i=0;i<this.body.lenght-1;i++){
    let end=this.body[i];
     if(end.x==x||end.y==y){
     return true;
       }
   }
     return false;
   }

  // fill(255,0,0);
 
  show() {
    for (var i = 0; i < this.body.length; i++) {
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 20, 20);
      // text("end game",200,200);


    }


  }




}