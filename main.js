canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

height = 100;
width = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

x = 5;
y = 225;

function add() {
     background_image_Tag = new Image();
	 background_image_Tag.onload = uploadBackground;
	 background_image_Tag.src = background_image;

	 greencar_image_Tag = new Image();
	 greencar_image_Tag.onload = uploadgreencar;
	 greencar_image_Tag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_image_Tag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
    ctx.drawImage(greencar_image_Tag, x, y, height, width);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (y >= 0) {
		y = y - 10;
		console.log("When up arrow is pressed, x = ," + x + "y = , " + y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (y <= 500) {
		y = y + 10;
		console.log("When down arrow is pressed, x = ," + x + "y = , " + y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (x >= 0) {
		x = x - 10;
		console.log("When left arrow is pressed, x = ," + x + "y = , " + y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (x <= 700) {
		x = x + 10;
		console.log("When right arrow is pressed, x = ," + x + "y = , " + y);
		uploadBackground();
		uploadgreencar();
	}
}
