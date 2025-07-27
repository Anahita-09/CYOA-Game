//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

let myFont;

function preload() {
  myFont = loadFont('assets/Lib.ttf'); 
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("#909c57");
  text(
    "Welcome! \nThis marks the \nbeginning of your journey \nthrough the unpredictable \nweather of Mumbai. \nAre you ready to begin?",
    width / 2,
    height / 2 - 100
  );

  //Sun
  stroke("black");
  strokeWeight(3);
  fill("orange");
  ellipse(520, 80, 100, 100); 
  noStroke();
  fill("#FFD580");
  ellipse(520, 80, 40, 40);

  //Rain
  fill("blue");
  ellipse(60, 140, 10, 15);
  ellipse(80, 160, 10, 15);
  ellipse(100, 180, 10, 15);
  ellipse(120, 160, 10, 15);
  ellipse(140, 140, 10, 15);
  ellipse(160, 160, 10, 15);

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2 + 100);
  a1Button = new Sprite (-200,-200);
  a2Button = new Sprite (-50,-50);
  b1Button = new Sprite (-100,-100);
  b2Button = new Sprite (-150,-150);

  textFont(myFont);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "plum";
  enterButton.text = "Enter";

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("Pressed");
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if(a1Button.mouse.presses()) {
      print("Display screen 2");
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      print("Display screen 5");
      showScreen5();
      screen = 5;
    }
  } else if (screen == 2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }
  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("paleturquoise");
  text("Oh no! It's too sunny! \nChoose a shed.", width/2,height/2 - 100);
  enterButton.pos = {x: -100, y: -100};

  //Sun
  stroke("black");
  strokeWeight(3); 
  fill("orange");
  ellipse(500,80, 100, 100);
  noStroke();  
  fill("#FFD580");
  ellipse(500, 80, 40, 40);

  // Add A1 button
  a1Button.pos = { x: width / 2 - 50, y: height / 2 + 100};
    a1Button.w = 50;
    a1Button.h = 50;
    a1Button.collider = "k";
    a1Button.color = "plum";
    a1Button.text = "Shed";

  // Add A2 button
  a2Button.pos = { x: width / 2 + 50, y: height / 2 + 100};
  a2Button.w = 50;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "plum";
  a2Button.text = "Shed";
  
}

function showScreen2() {
  background("#596270");
  text("Wrong Path :( Now it's raining! Choose again.", width/2, height/2 - 100);

  // Move extra buttons off screen
   a1Button.pos = { x: -200, y: -200 };
   a2Button.pos = { x: -50, y: -50 };

  // Rain 
  fill("blue");
  ellipse(100, 150, 10, 15);
  ellipse(140, 160, 10, 15);
  ellipse(180, 170, 10, 15);
  ellipse(220, 160, 10, 15);
  ellipse(260, 150, 10, 15);
  ellipse(300, 170, 10, 15);
  ellipse(340, 160, 10, 15);
  ellipse(380, 150, 10, 15);
  ellipse(420, 160, 10, 15);
  ellipse(460, 170, 10, 15);
  ellipse(500, 150, 10, 15);

   // Add b1 Button
   b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
   b1Button.w = 50;
   b1Button.h = 50;
   b1Button.collider = "k";
   b1Button.color = "plum";
   b1Button.text = "B1";

   // Add b2 Button
   b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
   b2Button.w = 50;
   b2Button.h = 50;
   b2Button.collider = "k";
   b2Button.color = "plum";
   b2Button.text = "B2";
}

function showScreen3() {
  background("lavender");
  text("Yeay! You have found the shed!", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };
  drawShed(width / 2 - 50, height / 2);
}

function showScreen4() {
  background("plum");
  text("Yeay! You have found the shed!", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };
  drawShed(width / 2 - 50, height / 2);
}

function showScreen5() {
  background("#5d7856");
   text("Yeay! You have found the shed!", width / 2, height / 2 - 100);

   // Move extra buttons off screen
   a1Button.pos = { x: -200, y: -200 };
   a2Button.pos = { x: -50, y: -50 };
  drawShed(width / 2 - 50, height / 2);
}

function drawShed(x,y) {
  fill("saddlebrown");
  rect(x,y,100, 80);
  fill("peru");
  triangle(x - 10,y, x+ 50, y - 50, x + 110,y);
  fill("black");
  rect(x+40,y+30, 20,40);
}



