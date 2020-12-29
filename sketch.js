var dog, happyDog;
var dogImg, happyDogImg;
var foodS, foodStock;
var database;

function preload(){
 dogImg = loadImage("images/dogImg.png");
 happyDogImg = loadImage("images/dogImg1.png");
}

function setup(){
 database = firebase.database();
 createCanvas(500,500);

 dog = createSprite(250,290,20,20);
 dog.addImage(dogImg);
 dog.scale = 0.2;

 foodStock = database.ref('Food');
 foodStock.on("value", readStock);
}

function draw(){  
 background(46,139,87);
 
 if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImg);
 }
 
 drawSprites();
 textSize(10);
 fill("white");
 text("Food Stock : "+foodS,200,230);

 textSize(10);
 text("Note : Press UP_ARROW KEY to feed Drago Milk",150,450);
}

function readStock(data){
 foodS = data.val();
}

function writeStock(x){
 if(x<=0){ 
  x=0;
 }
 else{
  x=x-1;
 }

 database.ref('/').update({
  Food : x
 });
}