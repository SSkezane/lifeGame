/* 操作 */
var selectedMode = [];
//create/breakタブを押すとmouseModeが変更される、INFO.modeNumber=0 は情報閲覧モードなので1から入れる
for(let i = 0; i < document.getElementsByClassName("mode-title").length; i++) {
    selectedMode[i] = document.getElementsByClassName("mode-title")[i];
    selectedMode[i].addEventListener('click',function(){INFO.modeNumber = i+1; INFO.mouseMode = INFO.mouseModes[INFO.modeNumber];}, false);
}

//タブを押すとそのタブのitemがcreateされるようになる
var selectedItemC=INFO.items[0], itemCs = [];
for(let i = 0; i < document.getElementsByClassName("itemC-name").length; i++) {
    itemCs[i] = document.getElementsByClassName("itemC-name")[i];
    itemCs[i].addEventListener('click', function(){selectedItemC = INFO.items[i];}, false);//INFO.itemsはimplementの70行
}

//タブを押すとそのタブのitemがcreateされるようになるbreak
var selectedItemB=INFO.items[0], itemBs = [];
for(let i = 0; i < document.getElementsByClassName("itemB-name").length; i++) {
    itemBs[i] = document.getElementsByClassName("itemB-name")[i];
    itemBs[i].addEventListener('click', function(){selectedItemB = INFO.items[i];}, false);//INFO.itemsはimplementの70行
}




/* テキスト */
var itemCs_text = [];
var descriptionC = [];
//wall
descriptionC[0] = "生物の移動を阻止する壁を設置する";
//breederRector
descriptionC[1] = "設置箇所から肉食動物を生み出す機関を設置する";

for(let i = 0; i < document.getElementsByClassName("bodyC").length; i++){
    if(INFO.items[i] == null) continue;
    let text = "<p>";
    text += "cost :"+INFO.items[i].cost+"<br>"
            + "term :"+INFO.items[i].period+"<br>"
            + "size :"+INFO.items[i].size+"<br>"
            + "<br>"+descriptionC[i];
    text += "</p>"
    itemCs_text[i] = document.getElementById("bodyC"+(i+1));
    itemCs_text[i].innerHTML = text;
}


var itemBs_text = [];
var descriptionB = [];
//wall
descriptionB[0] = "生物の移動を阻止する壁を除去する";
//breederRector
descriptionB[1] = "設置箇所から肉食動物を生み出す機関を除去する";

for(let i = 0; i < document.getElementsByClassName("bodyB").length; i++){
    if(INFO.items[i] == null) continue;
    let text = "<p>";
    text += "cost :"+INFO.items[i].cost+"<br>"
            + "term :"+INFO.items[i].period+"<br>"
            + "size :"+INFO.items[i].size+"<br>"
            + "<br>"+descriptionB[i];
    text += "</p>"
    itemBs_text[i] = document.getElementById("bodyB"+(i+1));
    itemBs_text[i].innerHTML = text;
}


/*



function itemChange(modeNumber){
    
    // global
    INFO.mouseMode = INFO.mouseModes[INFO.modeNumber];
    
    INFO.MODE_INFORMATION = 0;
    
    
    INFO.MODE_CREATE_WALL = 1;
    INFO.MODE_CREATE_BR = 3;

    INFO.MODE_DELETE_WALL = 2;
    
    
    
    
    INFO.items[mode].update

    //INFO.itemとINFO.mouseModesは別物


*/