var  box;
function setup() {
  createCanvas(1500,700);
  box=createSprite(200,200,200,100)
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW))
{box.position.x+=10

}
if(keyIsDown(LEFT_ARROW))
{
  box.position.x-=10
}
if(keyIsDown(UP_ARROW))
{box.position.y-=10

}
if(keyIsDown(DOWN_ARROW))
{
  box.position.y+=10
}
drawSprites()
}




