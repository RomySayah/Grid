
let img = [];
CanvasWidth = 1920;
CanvasHeight = 1080;
colNum = 20;
rowNum = 12;
colWidth = CanvasWidth / colNum;
rowHeight = CanvasHeight / rowNum;
var imgcount = 0;
var colcount = 0;
var rowcount = 0;

var delay = 500;
var coldelay = colNum*delay;

var variable = 0;


let colrandom;
let rowrandom;


function preload() {

    for (var i = 0; i<400; i++){
        img[i] = loadImage("Assets/img" + i + ".jpg");
    }
    
}
function setup() {
  createCanvas(CanvasWidth, CanvasHeight);
  background(0);  
  setTimeout(randomize, delay);

}
function draw() {
    
    var x = colrandom*colWidth;
    var y = rowrandom*rowHeight; 
    

    image(img[imgcount], x, y, colWidth*0.9, rowHeight*0.9);	
    print(rowcount);
    
    if (imgcount==399){
       imgcount=0;
       clear();
       background(0);  
    }
}

function randomize() {
  colrandom = int(random(0,colNum));
  rowrandom = int(random(0,rowNum));
  imgcount++;
  setTimeout(randomize, delay);
}


function mousePressed() {
  if (mouseX > 0 && mouseX < CanvasWidth && mouseY > 0 && mouseY < CanvasHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

