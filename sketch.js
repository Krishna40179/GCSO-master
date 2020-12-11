var car,wall;
var speed,weight
var deformation;


function setup() {
  createCanvas(1000,700);
  car=createSprite(400, 200, 50, 20);
  car.shapeColor="white";
  wall=createSprite(900,300,50,600);
speed=random(55,90);
weight=random(400,1500);
car.velocityX=speed;
}

function draw() {
  background(0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
     deformation=0.5*weight*speed*speed/22500;
     if(deformation>180){
       car.shapeColor="red";
     }
     if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
     }
     if(deformation<100){
      car.shapeColor="green";
     }
  }
  textSize(20);
  text("deformation= "+deformation,300,200);
  drawSprites();
}