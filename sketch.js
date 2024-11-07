// Define grid data. roadMetrics is a 2D array where each sub-array represents a row on the map.
// Numbers indicate different colors for blocks: 0-blank, 1-yellow, 2-red, 3-blue, 4-gray.
let roadMetrics = [
  [0,1,0,2,0,0,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,1,0,2,0],
  [1,3,1,1,1,1,1,1,3,1,4,1,1,1,1,1,4,1,1,1,1,1,1,1,4,1,4,1,4,1,1,1,1,4,4,1,1,1,4,3,1,4,1,3,4,1,4],

  [0,4,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,3,0,4,0,2,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,1,0,4,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,4,0,1,0],
  [0,3,0,2,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0,2,0],
  [0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,1,0],
  [0,1,0,4,0,0,1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,4,0],

  [1,2,1,1,1,1,3,1,4,4,2,1,4,1,3,1,1,4,1,1,1,1,1,1,4,3,1,2,4,1,1,1,1,1,1,4,1,1,4,3,4,1,2,1,4,3,1],

  [0,1,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,4,0,4,0],
  [0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,3,0,1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,3,0],
  [0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,4,0],
  [0,1,0,4,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,4,0,1,0],
  [0,2,0,1,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,1,0,1,0,1,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,4,0,2,0],
  [0,1,0,1,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],
  [0,4,0,1,0,0,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],

  [1,2,1,3,1,1,4,2,1,1,4,3,1,1,4,1,3,1,2,1,1,1,3,1,1,2,1,3,1,1,2,1,1,1,2,1,1,1,1,3,1,2,1,4,3,4,1],

  [0,0,0,1,0,0,3,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,1,0],
  [0,0,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,4,0],

  [1,2,4,3,1,1,3,4,1,1,4,3,1,1,2,4,4,1,2,4,4,4,3,1,1,4,1,4,1,1,2,4,1,4,1,1,3,1,1,2,1,1,4,2,1,2,4],

  [0,0,0,1,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,2,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,4,0,0,0,0,0,0,0,3,0,0,0,0,0,3,0],
  [0,0,0,1,0,0,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,4,0],
  [0,0,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],

  [1,1,4,3,1,1,3,1,1,1,1,3,1,1,4,1,2,1,1,2,4,4,2,1,1,4,1,4,1,1,1,2,1,3,4,4,3,1,1,2,1,1,1,3,4,2,1],

  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,2,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0],

  [1,1,4,2,1,1,3,1,1,4,1,3,1,1,4,1,1,3,1,1,2,1,1,3,1,4,1,4,1,1,1,4,1,3,1,3,1,1,1,3,1,1,1,2,4,1,2],

  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,4,0],
  [0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [1,3,1,2,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,2,0],
  [0,0,0,2,1,1,2,1,1,4,1,3,1,1,1,4,1,1,3,1,1,2,1,3,1,4,2,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,4,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,3,0],
  [1,3,1,2,0,0,3,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,1,0,0,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,1,1,1,4,1,2,0],
  [0,0,0,1,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  
  [1,4,1,3,1,1,3,1,1,2,4,3,1,1,1,4,1,1,3,1,2,1,3,2,1,3,1,2,1,3,1,2,1,3,1,1,4,1,1,2,1,1,3,1,1,2,1],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,3,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [1,1,4,2,1,1,3,1,1,2,1,3,1,4,1,1,4,1,3,1,3,2,2,2,1,4,1,4,1,2,1,3,1,3,1,1,4,1,1,3,1,1,2,1,1,2,1],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]
];
// Define arrays to store blocks of different colors
let redBlocks = [];
let yellowBlocks = [];
let blueBlocks = [];
let grayBlocks = [];
// Variable to hold the canvas object
let canvas;

// setup function is called once at the start of the program, initializes the canvas and creates blocks
function setup() {
   // Create canvas and center it in the window
  canvas = createCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  
 //for Loop through each row in roadMetrics
  for (let i = 0; i < roadMetrics.length; i++) {
    let row = roadMetrics[i];
    console.log(row.length);  
    // Loop through each element in the row
    for (let j = 0; j < row.length; j++) {
      // Based on the element's value, create blocks of different colors and add them to the respective arrays
      switch(row[j]) {
        case 1:
          yellowBlocks.push(new Block(color(225, 201, 41), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        case 2:
          redBlocks.push(new Block(color(175,57,43), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        case 3:
          blueBlocks.push(new Block(color(57, 86, 151), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        case 4:
          grayBlocks.push(new Block(color(217, 214, 209), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        default:
          break;
      }
    }
  }
}
// Define a Block class to represent the color and position of each block
class Block {
  constructor(color, x, y, width, height) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
// Function to draw all blocks
// This technique is from https://p5js.org/reference/p5/draw/
function drawAllBlocks() {
  
  
  // Draw red blocks
  for (let redBlock of redBlocks) {
    fill(redBlock.color);
    noStroke();
    rect(redBlock.x, redBlock.y, redBlock.width, redBlock.height);
  }

  //Draw yellow block
  for (let yellowBlock of yellowBlocks) {
    // Use time to dynamically adjust color changes
   let tOffset = frameCount * 0.06; 
   // Use Perlin noise to generate dynamically changing colors
   let r = map(noise(yellowBlock.x * 0.3, tOffset), 0, 1, 180, 255,); // Red value
   let g = map(noise(yellowBlock.y * 0.3 + 1000, tOffset), 0, 1, 200, 255, 60); // Yellow value
   let b = map(noise(yellowBlock.x * 0.3 + 2000, tOffset), 0, 1, 0, 120); // Blue Value
   fill(r, g, b); 
   noStroke();
   rect(yellowBlock.x, yellowBlock.y, yellowBlock.width, yellowBlock.height);
  }
  
  
  // Draw the blue square and add the transparency change
  for (let blueBlock of blueBlocks) { 
  let tOffset = frameCount * 0.03; // Used to generate different noise values that affect transparency
  // Use Perlin noise to adjust transparency (alpha channel)
  let alpha = map(noise(blueBlock.x * 0.1, blueBlock.y * 0.1, tOffset), 0, 1, 30, 255); // 透明度值在50到255之间变化 
  
  fill(0, 80, 255, alpha); // Blue and add transparency
  noStroke(); 
  rect(blueBlock.x, blueBlock.y, blueBlock.width, blueBlock.height); 
  }
  


 // Draw a gray square, adding synchronous transparency and color changes
  let tOffset = frameCount * 0.03; // Uniform noise offset for all gray squares
  
  // Use Perlin noise to adjust transparency (alpha channel) and grayscale
  let alpha = map(noise(tOffset), 0, 1, 20, 200); // Transparency values range from 50 to 255
  let grayValue = map(noise(tOffset + 1000), 0, 1, 0, 100); // Grayscale values are between 100 and 200

  // Apply uniform color and transparency to all gray squares
  for (let grayBlock of grayBlocks) {
    fill(grayValue, grayValue, grayValue, alpha); // Grey, add transparency
    noStroke();
    rect(grayBlock.x, grayBlock.y, grayBlock.width, grayBlock.height);
  }
}

// Function to draw individual buildings
function drawBuildings(x,y,width,height,color){
  fill(color);
  rect(x,y,width,height);
  noStroke();;
}



let noiseFactor = 0.03; // Control the rate of expansion and contraction
let t1 = 2; // Time variable, used to drive Perlin noise

// Function to draw all buildings
function drawAllBuildings(){
  
  // Expansion coefficient
  let LOexpandBlue = map(noise(t1), 0, 1, 1.0, (width - 36) / 36); // The blue building expands horizontally
  let LOexpandRed = map(noise(t1 + 1000), 0, 1, 1.0, (width - 36) / 36); // The red building expands horizontally
  let expandYellowHeight = map(noise(t1 + 1000), 0, 1, 0.5, 10); // The yellow building extends in all directions
  // Update Perlin noise time
  t1 += noiseFactor;

  // Gradation
  let Alpha = map(noise(t1 + 500), 0, 1, 50, 255); 

  drawBuildings(83,33.90,48,18,color(225, 201, 41));
  drawBuildings(92,21.90,24,68,color(175,57,43));
 
  drawBuildings(498.5,56,36,20,color(76,102,197));

  // Blue building extension
  drawBuildings(47, 112, 36 * LOexpandBlue, 33, color(76, 102, 197)); 

 //Yellow building gradient
  drawBuildings(83,160,47.6,33,color(225, 201, 41, Alpha));
  drawBuildings(100,168,16,14,color(217, 214, 209));

  // Blue building gradient
  drawBuildings(360,100,50,100.5,color(76,102,197,Alpha));
  drawBuildings(360,130,50,48,color(175,57,43));
  drawBuildings(375,145,25,20,color(225, 201, 41));

  drawBuildings(486.5,112,36,33,color(175,57,43));

  drawBuildings(95.5,212,22.5,35,color(225, 201, 41));
  drawBuildings(100,222,13,12,color(217, 214, 209));

  drawBuildings(83,277.2,47.6,35,color(175,57,43));

  drawBuildings(166,256,36,56.6,color(225, 201, 41));
  drawBuildings(166,270,36,42.6,color(76,102,197));
  drawBuildings(173,283,21.5,16,color(225, 201, 41));

  // Use Perlin Noise to extend the height of the yellow building at the center location
  let newHeight = 101 * expandYellowHeight; 
  
  // Limit the maximum height of the building (prevent exceeding the upper and lower boundaries of the canvas)
  newHeight = constrain(newHeight, 50, height - 50); 
  
  // Center the building on the y coordinate
  let yPos = 212 - (newHeight - 101) / 2; 
  
  // Draw the expanded yellow building
  drawBuildings(225, yPos, 36, newHeight, color(225, 201, 41)); 

  // Red building gradient
  drawBuildings(392,256,43,77,color(175,57,43, Alpha));
  
  drawBuildings(402,275,24,20,color(217, 214, 209));
  drawBuildings(392,333,43,15,color(217, 214, 209));
  drawBuildings(475,368.5,36,33.5,color(76,102,197));
  drawBuildings(475,402,36,18,color(225, 201, 41));
  // Red building expansion and gradient
  drawBuildings(520,420,36 * -LOexpandRed,33.5,color(175,57,43, Alpha));
  drawBuildings(83,430,47.6,39,color(225, 201, 41));

  drawBuildings(0,485,36,14,color(225, 201, 41));
  drawBuildings(18,485,14,14,color(175,57,43));

  drawBuildings(249,528,36,22,color(175,57,43));

   // Use Perlin noise to dynamically resize grey buildings
  let grayBuildingWidth1 = map(noise(frameCount * 0.03 + 100), 0, 1, 20, 100);  // Width of The grey building above
  let grayBuildingHeight1 = map(noise(frameCount * 0.02 + 1000), 0, 1, 10, 60); // Heighth of The grey building above
  
  let grayBuildingWidth2 = map(noise(frameCount * 0.03 + 200), 0, 1, 40, 90);  // Width of grey building in the middle
  let grayBuildingHeight2 = map(noise(frameCount * 0.02 + 2000), 0, 1, 30, 200); // Heighth of grey building in the middle
  
  let grayBuildingWidth3 = map(noise(frameCount * 0.03 + 300), 0, 1, 30, 200);  // Width of The grey building blew
  let grayBuildingHeight3 = map(noise(frameCount * 0.02 + 3000), 0, 1, 10, 40); // Heighth of The grey building blew

  // Dynamically draw resized grey buildings
  // The grey building above
  let grayBuildingX1 = 108 - grayBuildingWidth1 / 2; // x
  let grayBuildingY1 = 58 - grayBuildingHeight1 / 2; // y
  // Gray building in the middle
  let grayBuildingX2 = 244 - grayBuildingWidth2 / 2; // x
  let grayBuildingY2 = 278 - grayBuildingHeight2 / 2; // y
  // The grey building below
  let grayBuildingX3 = 108 - grayBuildingWidth3 / 2; // x
  let grayBuildingY3 = 448 - grayBuildingHeight3 / 2; // y

  // Draw these three grey dynamically changing buildings in size
  drawBuildings(grayBuildingX1, grayBuildingY1, grayBuildingWidth1, grayBuildingHeight1, color(217, 214, 209,Alpha)); // Top gray building
  drawBuildings(grayBuildingX2, grayBuildingY2, grayBuildingWidth2, grayBuildingHeight2, color(217, 214, 209)); // Middle gray building
  drawBuildings(grayBuildingX3, grayBuildingY3, grayBuildingWidth3, grayBuildingHeight3, color(217, 214, 209)); // Botton gray building
}

// In order to allow individual buildings to be covered above the 'road'(AllBlocks), a new function was created
function drawMoveBuildings(){
  // Use Perlin noise for smooth movement
  let blueOffset = map(noise(frameCount * 0.02), 0, 1, -40, 100);  // Blue
  let redOffset = map(noise(frameCount * 0.01 + 1000), 0, 1, -60, 300); // Red
  let yellowOffset = map(noise(frameCount * 0.01 + 2000), 0, 1, -100, 180); // Yellow
  // The red building moves horizontally 
  drawBuildings(152 + redOffset, 21.90, 44, 52, color(175,57,43)); // Red Building
  drawBuildings(162 + redOffset, 38.90, 23, 20, color(217, 214, 209));//Red building on gray building
  drawBuildings(152 + redOffset, 73.90, 44, 15.8, color(217, 214, 209));//Red building on gray building

  // The blue building moves horizontally
  drawBuildings(47 + blueOffset, 368.5, 36, 33.5, color(76,102,197));
  // The yellow building is vertically offset
  drawBuildings(475,273 + yellowOffset,60,25,color(225, 201, 41)); 
  drawBuildings(499,273 + yellowOffset,12,25,color(175,57,43));
}

// Main drawing function called on each frame
function draw() {
  background(242, 243, 238);
  drawAllBuildings()
  drawAllBlocks();
  drawMoveBuildings()
}
// Resizes the canvas and centers it when the window is resized
//This technique is from https://p5js.org/reference/p5/windowResized/
function windowResized() {
  resizeCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
}

