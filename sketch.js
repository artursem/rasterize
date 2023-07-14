let tiles;
let tileSize;
let diameter;
let img;
let pixelColor;
let brightness;
let increment = 300;

function preload() {
  img = loadImage('assets/venus-milo.jpg');
}
function setup() {
  createCanvas(900, 900);
  noStroke()
  fill(160)
  
  // tiles = 340;
  
  background(0);
  image(img, 0, 0, width, height);
}

function getBrightness(array) {
  const r = array[0];
  const g = array[1];
  const b = array[2];
  return (Math.max(r, g, b) + Math.min(r, g, b)) / 2;
}

function draw() {
  background(0);
  // tiles = 300 * mouseX / width;
  // increment ++;
  tiles = 300 * increment / width;

  tileSize = width / tiles;
 
  for(let i = 0; i < tiles; i+=1) {
    for(let j = 0; j < tiles; j+=1) {
      pixelColor = img.get(i*tileSize, j*tileSize)
      brightness = getBrightness(pixelColor)

      const diameter = 2 / tiles * brightness;
      ellipse(i * tileSize, j * tileSize, diameter, diameter)
    }
  }
}
