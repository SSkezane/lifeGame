
// グローバル変数を登録
var INFO = {}

// ゲーム基本情報
INFO.day = 0;
INFO.tank = 0;
INFO.finish = 1000;
INFO.PLAYER = null;
INFO.gameSpeed = 100;
INFO.remainingWalls = 50;
INFO.clickedObj = 0;
INFO.putable = true;


// 描画関連
INFO.canvas = document.getElementById("canvas");
INFO.context = INFO.canvas.getContext("2d");
INFO.bgCanvas = document.getElementById("background");
INFO.bgContext = INFO.bgCanvas.getContext("2d");
INFO.highlight = new Color(200,200,0);
INFO.cellSize = 10;
INFO.screenIID = 0;


// マウス関連
INFO.mouseout = false;
INFO.mousePoint = null;
INFO.mode = "information";
INFO.mouseModes = ["information","create","break"];
INFO.modeNumber = 0;
INFO.modeChanging = false;
INFO.mouseMode = INFO.mouseModes[INFO.modeNumber];
INFO.MODE_INFORMATION = 0;
INFO.MODE_CREATE = 1;
INFO.MODE_DELETE = 2;
INFO.MODE_CREATE_BR = 3;

var MAP = new Map(INFO.canvas.width/INFO.cellSize,INFO.canvas.height/INFO.cellSize);

/*
タブクリックでモードが変化する仕様上、初期モードをinformationからcreateに変えたいが
    INFO.mode = "create";
    INFO.modeNumber = 1;
とするとなぜかエラーになる、ゲームの進行的には問題はないと思われる
*/