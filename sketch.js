var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  car.shapeColor = "orange";
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "purple";
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX= speed; 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.collide(wall);

  if(car.x - wall.x <(wall.width + car.width)/2 )
  {
    
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180){
       car.shapeColor =color(0,255,0) ;
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor ="red";
    }

  }
  


}