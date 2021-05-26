var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(300,200,100,90)
  fixedrect.shapeColor = "red"
  movingrect = createSprite(600,60,100,90)
  movingrect.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      fixedrect.shapeColor = "pink"
      movingrect.shapeColor = "pink"
  }
 else{
  fixedrect.shapeColor = "green"
  movingrect.shapeColor = "green"
 }
 drawSprites()
}