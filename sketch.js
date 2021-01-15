//Create variables here
var dog, happyDog, database, foodS, foodStock
var x=20

function preload()
{
  //load images here
  dog1=loadImage("dogImg.png")
  dog2=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,350,10,10);
  dog.addImage(dog1) 
  dog.scale=0.4;
  database=firebase.database();
    foodStock=database.ref("food/position")
    foodStock.on("value",readStock)
  
}


function draw() {  

  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2);
    dog.scale=0.4
    }
  drawSprites();
  //add styles here

  textSize(20)
  fill("blue")
  text("Note:Press UP_ARROW key to feed drago milk",50,100)
  text("food remaining :"+foodS,50,250)
  
 

}

function readStock(data){
  foodS=data.val();
}

function writeStock(foodS){

  if(foodS<=0){
    foodS=0
  }
  else{
    foodS=foodS-1
  }
  database.ref('/').update({ 
    food:foodS
  })
  
  

}