var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
backgroundimage = "Canvasracing.jpg";


car1_width = 140;
car1_height = 90;
car1image = "car1.png";
car1X = 10;
car1Y = 10;


background_imagetag = new Image();
car1imagetag = new Image();
car2imagetag = new Image();
function add() {
    
    background_imagetag.onload = uploadbackground;
    background_imagetag.src = backgroundimage;

    
    car1imagetag.onload = uploadcar1;
    car1imagetag.src = car1image;
}


function uploadbackground() {
    ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1imagetag, car1X, car1Y, car1_width, car1_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}


function up() {
    if (car1Y >= 0) {
        car1Y-= 10;
        uploadbackground();
        uploadcar1();
    }
}

function down() {
    if (car1Y <= 500) {
        car1Y += 10;
        uploadbackground();
        uploadcar1();
    }
}

function left() {
    if (car1X >= 0) {
        car1X -= 10;
        uploadbackground();
        uploadcar1();
    }
}

function right() {
    if (car1X <= 700) {
        car1X += 10 ;
        uploadbackground();
        uploadcar1();
        
    }
}