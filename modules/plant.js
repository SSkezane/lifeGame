var plantAreas = [];

// 植物が繁殖する確率
var plantUpdateFrequency = 100;

// 繁殖エリアの数
var plantAreas_count = 10;

// キャンパス内に存在できる植物の数
var plants_count = 100;


class Plant extends GameObject {
    static update(){
        // 各繁殖エリア内で植物をランダムに作成
        for(var i = 0; i < plantAreas_count; i++){
            var p = new Point(Math.floor(Math.random()*plantAreas[i].range + plantAreas[i].plantAreaX)*cellSize,Math.floor(Math.random()*plantAreas[i].range + plantAreas[i].plantAreaY)*cellSize);
            var plant = new Plant(p.x,p.y);

            // 植物を配列plantsに追加
            this.list.push(plant);
        }
    }
}
Plant.list = [];
Plant.color = "rgb(0,200,0)";

class PlantArea {
    constructor(minX,minY,areaRange,randomRange){
        this.plantAreaX = Math.floor(Math.random()*minX)/cellSize;
        this.plantAreaY = Math.floor(Math.random()*minY)/cellSize; 
        this.range = Math.floor(Math.random()*randomRange + areaRange);
    }
}

// 繁殖エリアを作成
for(var i = 0; i < plantAreas_count; i++){
    // 繁殖エリアの大きさとそのバラつきを決定
    // areaRange と randomRange はマス目換算
    var pA = new PlantArea(Math.floor(Math.random()*440),Math.floor(Math.random()*600),5,4);
    
    // 繁殖エリアを配列plantAreasに追加
    plantAreas.push(pA);
}