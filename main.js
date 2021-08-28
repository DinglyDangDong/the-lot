var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var carX = 0;
var carY = 0;
var carHeight = 100;
var carWidth = 100;

var car = "38-388934_28-collection-of-car-clipart-top-view-top-removebg-preview.png";
var background = "videoblocks-the-aerial-view-of-the-man-walking-along-the-empty-parking-lot_huhjuicau_thumbnail-180_01.jpeg";


function loadBody(){


    bg = new Image();
    bg.src = background;
    bg.onload = uploadBg;

    
    ri = new Image();
    ri.src = car;
    ri.onload = uploadRi;

}
function uploadBg(){
    ctx.drawImage(bg, 0,0,canvas.width, canvas.height);

}
function uploadRi(){
    ctx.drawImage(ri, carX,carY,carWidth, carHeight);
}
window.addEventListener("keydown", movecar);
function movecar(e){
    var abc = e.keyCode;
    console.log(abc);

    if(abc == '37'){
left(); console.log("left");
    }
    if(abc == '38'){
        above(); console.log("above");
            }
    if(abc == '39'){
        right(); console.log("right");
                    }
    if(abc == '40'){
        bottom(); console.log("low");
                            }
}
function left(){
    if(carX >= 0){
        carX -= 5;
        console.log("left is working");
        uploadBg();
        uploadRi();
    }


}
function right(){
    if(carX <= 700){
        carX += 5;
        uploadBg();
        uploadRi();
    }

}
function above(){
    if(carY >= 0){
        carY -= 5;
        uploadBg();
        uploadRi();
    }

}
function bottom(){
    if(carY <= 500){
        carY += 5;
        uploadBg();
        uploadRi();
    }

}