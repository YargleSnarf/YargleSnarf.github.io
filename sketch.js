playlist = []

function preload(){
  soundFormats('wav','mp3','ogg','m4a');
  //playlist[0] = loadSound('/assets/aphotic_Dawn.wav');
  //playlist[1] = loadSound('/assets/lesser_Voltaic.wav');
}

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  background(random(255));
  rect(10,10,10,10);
}
