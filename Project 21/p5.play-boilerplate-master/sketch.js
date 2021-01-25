var bullet, wall, speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  //assigning random values to speed and weight
  speed = random(223, 321);
  weight = random(30, 52);

  //creating bullet sprite 
  bullet = createSprite(50, 200, 40, 20);
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  //assigning random thickness 
  thickness = random(22, 83);

  //creating wall sprite
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);
}

function draw() {
  background(0,0,0);
    
  
  //detecting collision of the car
  if(bullet.collide(wall)){
      bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/ thickness*thickness*thickness;

    if (damage < 10){
      wall.shapeColor = "green";
    }

    if (damage > 10){
      wall.shapeColor = "red";
    }
  }
  
  drawSprites();
}