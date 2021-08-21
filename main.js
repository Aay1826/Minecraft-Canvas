var canvas = new fabric.Canvas("canvas1");
var x=10;
var y=10;
var width=30;
var height=30;

var pi="";
var bi="";
function add_player(){
    fabric.Image.fromURL("player.png",function(Img){
        pi=Img;
        pi.scaleToWidth(150);
        pi.scaleToHeight(150);
        pi.set({top:y,left:x});
        canvas.add(pi);
    });
}
function add_block(add_img){
    fabric.Image.fromURL(add_img,function(Img){
bi=Img;
bi.scaleToWidth(width);
bi.scaleToHeight(height);
bi.set({top:y,left:x});
canvas.add(bi);
    });
    }
    window.addEventListener("keydown",key_down);
    function key_down(e){
     var value_key=e.keyCode;
     console.log(value_key);
     
    //increase width and height 
    if (e.shiftKey==true && value_key=="80") {
        width=width+10;
        height=height+10;
        console.log("this is shift+p");
        document.getElementById("width").innerHTML=width;
        document.getElementById("Height").innerHTML=height;
    }
    if (e.shiftKey==true && value_key=="77") {
        width=width-10;
        height=height-10;
        console.log("this is shift+m");
        document.getElementById("width").innerHTML=width;
        document.getElementById("Height").innerHTML=height;
    }
    if (value_key=="37") {
        left();
        console.log("left");
    }
    if (value_key=="38") {
        up();
        console.log("up");
    }
    if (value_key=="39") {
        right();
        console.log("right");
    }
    if (value_key=="40") {
        down();
        console.log("down");
    }
    if (value_key=="67") {
        add_block("cloud.jpg");
        console.log("c");
    }
    if (value_key=="68") {
        add_block("dark_green.png");
        console.log("d");
    }
    if (value_key=="71") {
        add_block("ground.png");
        console.log("g");
    }
    if (value_key=="76") {
        add_block("light_green.png");
        console.log("l");
    }
    if (value_key=="82") {
        add_block("roof.jpg");
        console.log("r");
    }
    if (value_key=="84") {
        add_block("trunk.jpg");
        console.log("t");
    }
    if (value_key=="85") {
        add_block("unique.png");
        console.log("u");
    }
    if (value_key=="87") {
        add_block("wall.jpg");
        console.log("w");
    }
    if (value_key=="89") {
        add_block("yellow_wall.png");
        console.log("y");
    }
}
function left(){
    if (x>=0) {
        x=x-10;
        console.log("player moving left"+ x);
        canvas.remove(pi);
        add_player();
    }
}
function up(){
    if (y>=0) {
        y=y-10;
        console.log("player moving up"+ y);
        canvas.remove(pi);
        add_player();
    }
}
function right(){
    if (x<=650) {
        x=x+10;
        console.log("player moving right"+ x);
        canvas.remove(pi);
        add_player();
    }
}
function down(){
    if (y<=350) {
        y=y+10;
        console.log("player moving down"+ y);
        canvas.remove(pi);
        add_player();
    }
}