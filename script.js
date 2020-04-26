
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

/* イベントの登録 */
function onDown(e){
    //console.log("down");
}
  
function onUp(e){
    //console.log("up");
}

function onClick(e){
    //console.log("click");
}

function onOver(e) {
    //console.log("mouseover");
}

function onOut(){
    //console.log("mouseout");
}

function eventRegister(){
    canvas.addEventListener('mousedown', onDown, false);
    canvas.addEventListener('mouseup', onUp, false);
    canvas.addEventListener('click', onClick, false);
    canvas.addEventListener('mouseover', onOver, false);
    canvas.addEventListener('mouseout', onOut, false);
}

function main(){
    // initialize
    canvas.height = 480;
    canvas.width = 640;
    eventRegister();
    
    // 1秒間隔で一日を経過させる
    var intervalID = setInterval(function(){
        var gameDay = gameRoutine();

        // 1000日経過で終了
        if(gameDay >= 1000){
            clearInterval(intervalID);
        }
    },1000);
}


class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}


/*
// draw test
var f1 = new Point(5,5);
var f2 = new Point(24,60);

var foods = [f1,f2];
*/

var plants = [];
var plantAreas = [];
var animals = [];
var biome = [];
var day = 0;


// the frequency of updating plant
var plantUpdateFrequency = 100;

// the number of the plantAreas
var plantAreas_number = 8;

// the number of the plants
var plant_number = 100;



// create plant area
class PlantArea {
    constructor(minX,rangeX,minY,rangeY){
        this.plantAreaX = Math.floor(Math.random()*rangeX + minX)/5;
        this.plantAreaY = Math.floor(Math.random()*rangeY + minY)/5;   
    }
}



// add to plant areas
for(var i = 0; i < plantAreas_number; i++){
    // set area size
    var pA = new PlantArea(Math.floor(Math.random()*410),Math.floor(Math.random()*20+50),Math.floor(Math.random()*570),Math.floor(Math.random()*20+50));
    
    // add new plant area
    plantAreas.push(pA);
    
}



function add_plant(){
    // add to plant in the plant area
    for(var i = 0; i < plantAreas_number; i++){
        var p = new Point(Math.floor(Math.random()*plantAreas[i].plantAreaX)*5, Math.floor(Math.random()*plantAreas[i].plantAreaY)*5);
    
        // add new plant
        plants.push(p);
        
        if(plants.length > plant_number){
            // delete old plant
            plants.shift();
        }
        
    }
}


function gameRoutine(){
    // fresh screen
    context.clearRect(0,0,canvas.width,canvas.height);

    // update world
    ++day;
    context.fillStyle = "rgb(0,200,0)";
    for(food of foods){
        context.fillRect(food.x-2,food.y-3,5,5);
    }
    
    // draw screen
    console.log(day+"日目");

    return day
}
