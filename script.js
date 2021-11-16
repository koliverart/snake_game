
const body = document.body;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");
let snake_x = 20;
let snake_y = 20;
let fruitX = 25;
let fruitY = 25;
let x = 250;
let y = 250;




fruits();

function fruits(){
  context.fillStyle = "white";
  context.fillRect(fruitX,fruitY,20,20);

}

function controls(){

  document.addEventListener("keydown", function(event){
      if(event.keyCode == "38"){
        radio1.checked = true;
        move();
      }

      if(event.keyCode == "40"){
        radio2.checked = true;
        move();
      }

      if(event.keyCode == "39"){
        radio3.checked = true;
        move();
      }

      if(event.keyCode == "37"){
        radio4.checked = true;
        move();
      }
  }); }


function move(){
  setInterval(function(){
    if(radio1.checked == true){
      y = y - 5;
      createSnake();
   }

   if(radio2.checked == true){
     y = y + 5;
     createSnake();
  }

  if(radio3.checked == true){
    x = x + 5;
    createSnake();
 }

 if(radio4.checked == true){
   x = x - 5;
   createSnake();
}
  },1000); }


function createSnake(){
  context.fillStyle = "white";
  context.clearRect(x, y, snake_x + 5, snake_y + 5);
  context.fillRect(x,y,snake_x,snake_y);

  if(x == fruitX && y == fruitY){
    snake_x += 5;
    context.clearRect(0,0,canvas.width,canvas.height);
  }


 }
