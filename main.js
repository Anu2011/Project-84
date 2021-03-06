canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width = 100;
car_height = 90;

background_image = "data:image/jpeg;base64,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";
rover_image = "data:image/png;base64,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";

car_x = 10;
car_y = 10;

function add() {
background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

car_imgTag= new Image();
car_imgTag.onload= uploadrover;
car_imgTag.src= car_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
    }

window.addEventListener("keyDown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38'){

up();
console.log("up");
}
if(keyPressed == '40'){

    down();
    console.log("down");
    }
    if(keyPressed == '37'){

        left();
        console.log("left");
        }
        if(keyPressed == '39'){

            right();
            console.log("right");
            }
}