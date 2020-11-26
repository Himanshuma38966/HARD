var car, wall; 
var speed, weight; 



function setup() {

  createCanvas(1400,400);

  speed=random(30,100);
  weight=random(700,2500);
  
  car=createSprite(50, 200, 50,50);
  car.shapeColor="white";
  car.scale=0.5;
  car.velocityX=speed;

  wall=createSprite(1340, 200, 40, 200);
  wall.shapeColor="grey";

}

function draw() {
  background("black");

  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX=0;

    if(((0.5*weight*speed*speed)/22500)>180){
      car.shapeColor="RED"
    }else if(((0.5*weight*speed*speed)/22500)<80){
      car.shapeColor="WHITE"
    }else if(((0.5*weight*speed*speed)/22500)<180 && ((0.5*weight*speed*speed)/22500)>80){
      car.shapeColor="GREEN"

    }

  }

  drawSprites();
}