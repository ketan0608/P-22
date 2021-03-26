var canvas;
var music;
var w1,w2,w3,w4;
var box,edges;
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(780,600);
w4 = createSprite(10,593,250,20);
w4.shapeColor="red";
w3 = createSprite(260,593,250,20);
w3.shapeColor="yellow";
w2 = createSprite(460,593,250,20);
w2.shapeColor="green";
w1 = createSprite (660,593,250,20);
w1.shapeColor="pink";
box = createSprite(random(20,750),550,20,20);
box.shapeColor="white";
 edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));

    if(keyDown(LEFT_ARROW)){
        box.velocityX = -3;
    }

    if(keyDown(RIGHT_ARROW)){
        box.velocityX = 3
    }

    if(keyDown(UP_ARROW)){
        box.velocityY = -3
    }

    if(keyDown(DOWN_ARROW)){
        box.velocityY = 3;
    }

if(w4.isTouching(box)&&box.bounceOff(w4)){
    box.shapeColor="red";
}
if(w3.isTouching(box)&&box.bounceOff(w3)){
    box.shapeColor="yellow";
}
if(w2.isTouching(box)&&box.bounceOff(w2)){
    box.shapeColor="green";
}
if(w1.isTouching(box)&&box.bounceOff(w1)){
    box.shapeColor="pink";
}

box.bounceOff(edges);

drawSprites();
}