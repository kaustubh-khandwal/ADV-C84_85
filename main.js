var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
backgroundimage = "Canvasracing.jpg";


car1_width = 140;
car1_height = 90;
car1image = "car1.png";
car1X = 10;
car1Y = 10;


car2_width = 140;
car2_height = 90;
car2image = "car2.png";
car2X = 10;
car2Y = 120;



background_imagetag = new Image();
car1imagetag = new Image();
car2imagetag = new Image();
function add() {
    
    background_imagetag.onload = uploadbackground;
    background_imagetag.src = backgroundimage;

    
    car1imagetag.onload = uploadcar1;
    car1imagetag.src = car1image;

    car2imagetag.onload = uploadcar1;
    car2imagetag.src = car2image;
}


function uploadbackground() {
    ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1imagetag, car1X, car1Y, car1_width, car1_height);
    ctx.drawImage(car2imagetag, car2X, car2Y, car2_width, car2_height);
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





    if (keyPressed == '87') {
        up2();
        console.log("up");
    }
    if (keyPressed == '83') {
        down2();
        console.log("down");
    }
    if (keyPressed == '65') {
        left2();
        console.log("left");
    }
    if (keyPressed == '68') {
        right2();
        console.log("right");
    }





    if (car1X > 700) {
        document.getElementById("game_status").innerHTML = "Car 1 won!!";
    }

    if (car2X > 700) {
        document.getElementById("game_status").innerHTML = "Car 2 won!!";
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



function up2() {
    if (car2Y >= 0) {
        car2Y-= 10;
        uploadbackground();
        uploadcar1();
    }
}

function down2() {
    if (car2Y <= 500) {
        car2Y += 10;
        uploadbackground();
        uploadcar1();
    }
}

function left2() {
    if (car2X >= 0) {
        car2X -= 10;
        uploadbackground();
        uploadcar1();
    }
}

function right2() {
    if (car2X <= 700) {
        car2X += 10 ;
        uploadbackground();
        uploadcar1();
        
    }
}
