const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var response 
var bg="sunrise1.png" ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if (backgroundImg)
background(backgroundImg)


    // add condition to check if any background image is there to add


    Engine.update(engine);
    fill("black")
    textSize(30)
    if(hour>=12){
         text("Time : "+ hour%12 + " PM", 50,100); 
        }
        else if(hour==0){
             text("Time : 12 AM",100,100); 
            }
            else{ 
                text("Time : "+ hour%12 + " AM", 50,100); 
        }
   


}


async function getBackgroundImg(){

    // write code to fetch time from API
    response=await fetch("http://worldtimeapi.org/api/timezone/America/Chicago")
    var Jason= await response.json();
    var datetime= Jason.datetime
    var hour= datetime.slice(11,13)
    if (hour>=4&&hour<=06){
     debugger;
     bg="sunrise1.png"
    }
    else if (hour>=6&&hour<=08){
        debugger;
        bg="sunrise2.png"
       }
       else if (hour>=8&&hour<=11){
        debugger;
        bg="sunrise3.png"
       }
       else if (hour>=11&&hour<=13){
        debugger;
        bg="sunrise4.png"
       }
       else if (hour>=13&&hour<=15){
        debugger;
        bg="sunrise5.png"
       }
       else if (hour>=15&&hour<=17){
        debugger;
        bg="sunrise6.png"
       }
       else if (hour>=17&&hour<=18){
        debugger;
        bg="sunset7.png"
       }
       else if (hour>=18&&hour<=20){
        debugger;
        bg="sunset8.png"
       }
       else if (hour>=20&&hour<=23){
        debugger;
        bg="sunset9.png"
       }
       else if (hour>=23&&hour<=0){
        debugger;
        bg="sunset10.png"
       }
       else if (hour>=0&&hour<=3){
        debugger;
        bg="sunset11.png"
       }
       else {
        debugger;
        bg="sunset12.png"
       }
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
 backgroundImg=loadImage(bg)
}
