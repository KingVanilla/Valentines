let yesButton;
let noButton;
let okayButton;
let screen = 1;
let myPic;
let noButtonInitialized = false;


function preload() {
  myPic = loadImage("scawy.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textFont("Arial");

  yesButton = createButton("Yes 💕");
  yesButton.size(120, 50);
  yesButton.mousePressed(handleYes);

  noButton = createButton("No 😅");
  noButton.size(120, 50);
  noButton.mousePressed(handleNo);
  
  okayButton = createButton("Okay");
  okayButton.size(120, 50);
  okayButton.mousePressed(handleOkay);
  
  backButton = createButton("Back to start");
  backButton.size(90, 30);
  backButton.mousePressed(handleBack);
  
  noButton.mouseOver(() => {
  if (screen === 12) {
    teleportNoButton();
  }
});

}

function draw() {
  background(255, 192, 203);

  yesButton.hide();
  noButton.hide();
  okayButton.hide();
  
  if (screen === 1) drawQuestionScreen();
  else if (screen === 2) drawReallyScreen();
  else if (screen === 3) drawAreYouSure();
  else if (screen === 4) drawSawThePicture();
  else if (screen === 5) drawquestion();
  else if (screen === 6) drawReallyScreen2();
  else if (screen === 7) drawConfusion();
  else if (screen === 8) drawgotcha();
  else if (screen === 9) drawsmartypants();
  else if (screen === 10) drawnobelievo();
  else if (screen === 11) drawmaybelie();
  else if (screen === 12) drawFinalQuestion();
  else if (screen === 13) drawtryagain();
  else if (screen === 14) drawigetit();
  else if (screen === 15) drawareublind();
  else if (screen === 16) drawbruuhhh();
  else if (screen === 17) drawhopesup();
  else if (screen === 18) drawgotchabitch();
  else if (screen === 19) drawgiveyourselfcredit();
  else if (screen === 20) drawerror();
  else if (screen === 21) drawwhyyoulyin();
  else if (screen === 22) drawcomeon();
  else if (screen === 23) drawyay();
}

/* ---------------- SCREEN 1 ---------------- */
function drawQuestionScreen() {
  
  fill(176, 0, 75);
  textSize(60);
  text("Will you be my Valentine? 💖", width / 2, height / 2 - 40);

  yesButton.position(width / 2 - 140, height / 2 + 40);
  noButton.position(width / 2 + 20, height / 2 + 40);
  
  yesButton.show();
  noButton.show();
}

/* ---------------- SCREEN 2 ---------------- */
function drawReallyScreen() {
  backButtons();
  
  yesButton.show();
  noButton.show();
  yesButton.position(width / 2 - 140, height - 120);
  noButton.position(width / 2 + 20, height - 120);

  fill(176, 0, 75);
  textSize(60);
  text("Really?", width / 2, 100);

  textSize(40);
  text("👈 This guy?", width / 2 - 100, height / 2);

  drawImage();
}

/* ---------------- SCREEN 3 ---------------- */
function drawAreYouSure() {
  centerButtons();
  backButtons();

  fill(176, 0, 75);
  textSize(60);
  text("Are you sure? 😳", width / 2, height / 2 - 40);
}

/* ---------------- SCREEN 4 ---------------- */
function drawSawThePicture() {
  centerButtons();
  backButtons();

  fill(176, 0, 75);
  textSize(50);
  text("You saw the picture, right?", width / 2, 100);

  drawImage();
}

/* ---------------- SCREEN 5 ---------------- */
function drawquestion() {
  centerButtons();
  backButtons();

  fill(176, 0, 75);
  textSize(50);
  text("And you still want to be my Valentine? 💘", width / 2, height / 2 - 40);
}
/* ---------------- SCREEN 6 ---------------- */
function drawReallyScreen2() {
  centerButtons();

  fill(176, 0, 75);
  textSize(50);
  text("Really?", width / 2, height / 2 - 40);
}
/* ---------------- SCREEN 7 ---------------- */
function drawConfusion() {
  centerButtons();
  backButtons();

  fill(176, 0, 75);
  textSize(50);

  text(
    "I am not going to pretend like I understand your decision, but I will respect it, I guess...",
    width / 10,
    height / 2 - 300,
    width * 0.8
  );

  textSize(40);
  text(
    "So will you not not not not not not not not not not not not not not not not not not not not not not not not not not not be my Valentine?",
    width / 10,
    height / 2 - 100,
    width * 0.8
  );
}
/* ---------------- SCREEN 8---------------- */
function drawgotcha(){
  centerButtons();
  backButtons();

  fill(176, 0, 75);
  textSize(50);

  text(
    "i can't believe i didn't get you with that",
    width / 10,
    height / 2 - 200,
    width * 0.8
  );

  textSize(40);
  text(
    "i guess you really are too smart, aren't you?",
    width / 10,
    height / 2,
    width * 0.8
  );
}
/* ---------------- SCREEN 9--------------- */
function drawsmartypants(){
  centerButtons();
  backButtons();

  fill(176, 0, 75);
  textSize(50);

  text(
    "WOWWW, Cocky much?",
    width / 10,
    height / 2 - 200,
    width * 0.8
  );

  textSize(40);
  text(
    "i am just kidding, you are quite smart, but let's get back to what is important: do you want to be my valentine?",
    width / 10,
    height / 2 - 100,
    width * 0.8
  );
}
/* ---------------- SCREEN 10-------------- */
function drawnobelievo(){
  centerButtons();
  backButtons();

  fill(176, 0, 75);
  textSize(50);

  text(
    "hmmm, why is it i don't believe you?",
    width / 10,
    height / 2 - 200,
    width * 0.8
  );

  textSize(40);
  text(
    "you don't seem very trustworthy, should i believe you?",
    width / 10,
    height / 2 - 50,
    width * 0.8
  );
}
/* ---------------- SCREEN 11-------------- */
function drawmaybelie(){
  centerButtons();
  backButtons();

  fill(176, 0, 75);
  textSize(50);

  text(
    "I guess you could have lied on that question as well, but i will give you the benefit of the doubt",
    width / 10,
    height / 2 - 250,
    width * 0.8
  );

  textSize(40);
  text(
    "in that case, i think it is time for the final question don't you think?",
    width / 10,
    height / 2 - 30,
    width * 0.8
  );
}
/* ---------------- SCREEN 12 ---------------- */
function drawFinalQuestion() {
  backButtons();
  
  fill(176, 0, 75);
  textSize(60);
  text("Will you be my Valentine? 💖", width / 2, height / 2 - 40);

  yesButton.position(width / 2 - 140, height / 2 + 40);
  yesButton.show();

  if (!noButtonInitialized) {
    noButton.position(width / 2 + 20, height / 2 + 40);
    noButtonInitialized = true;
  }

  noButton.show();
}


/* ---------------- SCREEN 13 ---------------- */
function drawtryagain() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(60);
  text("Wrong answer, try again", width / 2, height / 2 - 40);
}
/* ---------------- SCREEN 14 ---------------- */
function drawigetit() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(60);
  text("RUDE...", width / 2, height / 2 - 50);
  textSize(60);
  text("maybe you need to look at it again", width / 2, height / 2);
}
/* ---------------- SCREEN 15 ---------------- */
function drawareublind() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(60);
  text("Whut, are you blind?", width / 2, height / 2 - 40);
   textSize(40);
  text("better take another look", width / 2, height / 2 + 10);
}
/* ---------------- SCREEN 16 ---------------- */
function drawbruuhhh() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(60);
  text("Then why did you click yes before?", width / 2, height / 2 - 40);
  textSize(40);
  text("try again", width / 2, height / 2 + 10);
}
/* ---------------- SCREEN 17 ---------------- */
function drawhopesup() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(60);
  text("damn, you really got my hopes up", width / 2, height / 2 - 80);
  textSize(40);
  text("but i am the gamemaster", width / 2, height / 2 - 30);
  text("so there is no stopping until you say yes", width / 2, height / 2);
}
/* ---------------- SCREEN 18 ---------------- */
function drawgotchabitch() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(80);
  text("LOLLL, i got you", width / 2, height / 2 - 50);
  textSize(40);
  text("try again", width / 2, height / 2 + 10);
}
/* ---------------- SCREEN 19 ---------------- */
function drawgiveyourselfcredit() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(60);
  text("Love the humbleness", width / 2, height / 2 - 40);
  textSize(40);
  text("but give yourself some credit", width / 2, height / 2 + 10);
}
/* ---------------- SCREEN 20 ---------------- */
function drawerror() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(60);
  text("error 404", width / 2, height / 2 - 40);
  textSize(40);
  text("this answer is not allowed", width / 2, height / 2 + 10);
}
  /* ---------------- SCREEN 21 ---------------- */
function drawwhyyoulyin() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(40);
  text("I guess the no could have been a lie", width / 2, height / 2 - 90);
  text("so that means i should believe you", width / 2, height / 2 - 50);
  text("I guess that is kind of a paradox", width / 2, height / 2 - 10);
  text("better answer yes to void the complications", width / 2, height / 2 + 30);
}
/* ---------------- SCREEN 22 ---------------- */
function drawcomeon() {
  okayButtons();
  backButtons();
  
   fill(176, 0, 75);
  textSize(60);
  text("You don't think it is time?", width / 2, height / 2 - 40);
  textSize(40);
  text("well feel free to start over ;)", width / 2, height / 2 + 10);
}
/* ---------------- SCREEN 23 ---------------- */
function drawyay() {
  backButtons();
    fill(176, 0, 75);
  textSize(110);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 50);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 150);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 250);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 350);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 450);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 550);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 650);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 750);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 850);
  text("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", 0, 950);
   fill(176, 0, 75);
  textSize(80);
  text("YAY", width / 2, height / 2 - 40);
  textSize(80);
  text("Well that's a date then", width / 2, height / 2 + 10);
}

/* ---------------- BUTTON HANDLERS ---------------- */
function handleYes() {
  if (screen === 1) screen = 2;
  else if (screen === 2) screen = 3;
  else if (screen === 3) screen = 4;
  else if (screen === 4) screen = 5;
  else if (screen === 5) screen = 6;
  else if (screen === 6) screen = 7;
  else if (screen === 7) screen = 8;
  else if (screen === 8) screen = 9;
  else if (screen === 9) screen = 10;
  else if (screen === 10) screen = 11;
  else if (screen === 11) screen = 12;
  else if (screen === 12) {
  screen = 23;
  noButtonInitialized = false;
  }
}

function handleNo() {
  if (screen === 1)  screen = 13;
  if (screen === 2)  screen = 14;
  if (screen === 3)  screen = 14;
  if (screen === 4)  screen = 15;
  if (screen === 5)  screen = 16;
  if (screen === 6)  screen = 17;
  if (screen === 7)  screen = 18;
  if (screen === 8)  screen = 19;
  if (screen === 9)  screen = 20;
  if (screen === 10)  screen = 21;
  if (screen === 11)  screen = 22;
  if (screen === 12) {
  noButtonInitialized = false;
  }
}
function handleOkay() {
  if (screen === 13)  screen = 1;
  if (screen === 14)  screen = 2;
  if (screen === 15)  screen = 4;
  if (screen === 16)  screen = 5;
  if (screen === 17)  screen = 6;
  if (screen === 18)  screen = 7;
  if (screen === 19)  screen = 8;
  if (screen === 20)  screen = 9;
  if (screen === 21)  screen = 10;
  if (screen === 22)  screen = 1;
}

function handleBack() {
   if (screen => 1)  screen = 1;
}
/* ---------------- HELPERS ---------------- */
function centerButtons() {
  yesButton.position(width / 2 - 140, height / 2 + 100);
  noButton.position(width / 2 + 20, height / 2 + 100);

  yesButton.show();
  noButton.show();
}

function okayButtons() {
  okayButton.position(width / 2 - 60, height / 2 + 40);
  okayButton.show();
}

function backButtons() {
  backButton.position(width  - 90, 0);
  backButton.show();
}

function teleportNoButton() {
  let x = random(20, width - 140);
  let y = random(20, height - 80);
  noButton.position(x, y);
}


function drawImage() {
  let displayH = 750;
  let displayW = (myPic.width / myPic.height) * displayH;

  let anchorX = -10;
  let anchorY = height / 2;

  imageMode(CENTER);
  image(myPic, anchorX + displayW / 2, anchorY, displayW, displayH);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
