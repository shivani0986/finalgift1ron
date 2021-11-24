var canvas;
var block1;
var ball, edges;
var music;

function preload()
{
    // load sound here
    music = loadSound("sound.mpeg");
    image = loadImage("img2.jpg");
}
function setup()
{
    canvas = createCanvas(850,600);
    //create blocks
    block1 = createSprite(360,590,3600,10);
    block1.shapeColor = "blue";

    ball = createSprite(425,100,60,60);
    ball.shapeColor = ("pink")
}
function draw() 
{
    background(image)
    edges=createEdgeSprites();

    stroke("blue");
    fill("pink");
    textSize(50);
    text("TO MY BFF RON :)",220,550);
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
      ball.shapeColor = "blue";
        music.play()      
    }

    if (keyDown(DOWN_ARROW)) {
  ball.velocityX =0;
  ball.velocityY =4;
}
    drawSprites();
}
