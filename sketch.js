const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var responseJSON  = await response.json();
var datetime = response.JSON.datetime;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (hour>=4 && hour<=06){
        bg = "sunrise1.png";
    }else if (hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }else if(hour>=23 && hour==0){
        bg = "sunset10.png";
    }else{
        bg = "sunset12.png"
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
      var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo")

    //change the data in JSON format

    // write code slice the datetime
     hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)


}
