
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

function sum(arr){
    var s = 0;
    arr.forEach(function(elm){
        s += elm;
    });
    return s;
}

function getRandomInt(min,max){
    var rand = Math.floor(Math.random()*(max+1-min))+min;
    return rand;
}

class Animal {
    constructor(x,y,energy,direction,genes){
        // num
        this.x = x;
        this.y = y;
        this.energy = energy;
        this.dir = direction;

        // array
        this.genes = genes;
    }

    move(){
        // xについての移動
        if(2 <= this.dir && this.dir < 5){
            this.x += 5;
        }
        else if(this.dir == 1 || this.dir == 5){
            this.x += 0;
        }
        else {
            this.x -= 5;
        }

        // yについての移動
        if(0 <= this.dir && this.dir < 3){
            this.y -= 5;
        }
        else if(4 <= this.dir && this.dir < 7){
            this.y += 5;
        }

        this.x = this.x % (canvas.width-1);
        this.y = this.y % canvas.height;
        this.energy -= 1;
    }

    turn(){
        var s = sum(this.genes);
        var r = getRandomInt(0,s);

        var i = 0;
        for(var gene of this.genes){
            r -= gene;
            if(r <= 0){
                this.dir = i;
                break;
            }
            i++;
        }
    }

    //todo: eat

    reproduce(){
        if(this.energy < this.reproduction_energy){
            return;
        }

        var energy = Math.floor(this.energy/2);
        var genes = Object.create(this.genes);

        // 突然変異 -1,0,1をランダムのスロットに加算
        var slot = getRandomInt(0,7);
        genes[slot] = Math.max(0,genes[slot]+getRandomInt(0,2)-1);

        var child = new Animal(this.x,this.y,energy,this.dir,genes);
        return child;
    }
}

// draw test
var f1 = new Point(5,5);
var f2 = new Point(24,60);
var adam_genes = [0,2,3,5,6,8,1,0];
var adam = new Animal(50,50,80,0,adam_genes);

var foods = [f1,f2];
var animals = [];
var biome = [];
var day = 0;
animals.push(adam);

function gameRoutine(){
    // fresh screen
    context.clearRect(0,0,canvas.width,canvas.height);

    // update world
    ++day;
    
    // animals_update
    var new_animals = []
    for(animal of animals){
        if(animal.energy > 0){
            new_animals.push(animal);
        }
    }
    animals = Object.create(new_animals);
    var childs = [];
    for(animal of animals){
        animal.turn();
        animal.move();
        //animal.eat();
        if(day%3 == 0){
            var child = animal.reproduce();
            childs.push(child);
        }
    }
    for(child of childs){
        animals.push(child);
    }
    
    context.fillStyle = "rgb(0,200,0)";
    for(food of foods){
        context.fillRect(food.x-2,food.y-3,5,5);
    }
    context.fillStyle = "rgb(200,0,0)";
    for(animal of animals){
        context.fillRect(animal.x-2,animal.y-3,5,5);
    }
    
    // draw screen
    console.log(day+"日目");

    return day
}

