let yellowBlocks = []; // Global variable to store positions of all yellow blocks 
let yellowLines = []; // Global variable to store positions of all yellow line paths

function setup() {
  createCanvas(800, 800);
  noLoop();
  drawMondrianGrid(); 
  randomlyColorYellowLines(); 
  drawAxisLabels();
}

function drawMondrianGrid() {
  let gridSize = 16; // Grid size 
  let colors = [
    color(255, 255, 255), // White 
    color(255, 204, 0), // Yellow 
    color(255, 0, 0), // Red 
    color(128, 128, 128), // Gray 
    color(0, 102, 204) // Blue 
  ];

  let predefinedConditions = [ 
    { xRange: [7, 9], yRange: [2, 4], colorIndex: 2 },
    { xRange: [7, 9], yRange: [6, 6], colorIndex: 3 },
    { xRange: [7, 9], yRange: [7, 9], colorIndex: 2 },
    { xRange: [6, 9], yRange: [14, 17], colorIndex: 1 },
    { xRange: [7, 8], yRange: [20, 22], colorIndex: 1 },
    { xRange: [6, 9], yRange: [28, 30], colorIndex: 2 },
    { xRange: [21, 23], yRange: [48, 49], colorIndex: 2 },
    { xRange: [41, 43], yRange: [10, 13], colorIndex: 2 },
    { xRange: [40, 42], yRange: [35, 40], colorIndexSequence: [4, 1, 2], alternate: true },
    { xRange: [18, 21], yRange: [19, 30], colorIndex: 1, exceptions: [23, 26, 27, 28, 29], exceptionColorIndex: 3 },
    { xRange: [12, 15], yRange: [2, 5], colorIndex: 2 },
    { xRange: [12, 15], yRange: [2, 7], colorIndex: 3 },
    { xRange: [13, 14], yRange: [3, 4], colorIndex: 3 },
    { xRange: [30, 33], yRange: [9, 18], colorIndex: 4 },
    { xRange: [31, 34], yRange: [24, 30], colorIndex: 2 },
    { xRange: [6, 9], yRange: [42, 45], colorIndex: 1 },
    { xRange: [8, 8], yRange: [44, 44], colorIndex: 3 },
    { xRange: [40, 44], yRange: [24, 30], colorIndex: 0 },
    { xRange: [40, 44], yRange: [26, 28], colorIndex: 1 },
    { xRange: [42, 44], yRange: [5, 7], colorIndex: 4 },
    { xRange: [4, 5], yRange: [10, 12], colorIndex: 4 },
    { xRange: [2, 3], yRange: [36, 37], colorIndex: 4 }
  ];
  
  for (let condition of predefinedConditions) { 
    for (let x = condition.xRange[0]; x <= condition.xRange[1]; x++) { 
      for (let y = condition.yRange[0]; y <= condition.yRange[1]; y++) { 
        let currentX = x * gridSize; 
        let currentY = y * gridSize; 
        if (condition.exceptions && condition.exceptions.includes(y)) { 
          fill(colors[condition.exceptionColorIndex]); 
        } else if (condition.alternate) { 
          let colorIndex = condition.colorIndexSequence[Math.floor((y - condition.yRange[0]) / 2) % condition.colorIndexSequence.length]; 
          fill(colors[colorIndex]); 
          if (colorIndex === 1) { 
            yellowBlocks.push({ x: currentX, y: currentY }); 
            yellowLines.push({ x: currentX, y: currentY }); 
          } 
        } else { 
          fill(colors[condition.colorIndex]); 
          if (condition.colorIndex === 1) { 
            yellowBlocks.push({ x: currentX, y: currentY }); 
            yellowLines.push({ x: currentX, y: currentY }); 
          } 
        } 
        rect(currentX, currentY, gridSize, gridSize); 
      } 
    } 
  }

  let specificYellowRows = [1, 8, 19, 23, 31, 34, 37, 42, 45, 46, 48];
  let specificYellowCols = [1, 3, 5, 10, 25, 27, 39, 41, 43, 45];

  for (let x of specificYellowCols) { 
    for (let y = 0; y < height / gridSize; y++) { 
      let currentX = x * gridSize; 
      let currentY = y * gridSize; 
      fill(colors[1]); 
      yellowBlocks.push({ x: currentX, y: currentY }); 
      yellowLines.push({ x: currentX, y: currentY }); 
      rect(currentX, currentY, gridSize, gridSize); 
    } 
  }

  for (let y of specificYellowRows) { 
    for (let x = 0; x < width / gridSize; x++) { 
      let currentX = x * gridSize; 
      let currentY = y * gridSize; 
      fill(colors[1]); 
      yellowBlocks.push({ x: currentX, y: currentY }); 
      yellowLines.push({ x: currentX, y: currentY }); 
      rect(currentX, currentY, gridSize, gridSize); 
    } 
  }
}

function randomlyColorYellowLines() { 
  let colors = [color(128, 128, 128), color(255, 0, 0), color(0, 102, 204)]; // Gray, Red, Blue 
  let numToCover = Math.floor(yellowLines.length * 0.4); // Only cover 40% of yellow blocks 
  for (let i = 0; i < numToCover; i++) { 
    let index = Math.floor(Math.random() * yellowLines.length); 
    let { x, y } = yellowLines[index]; 
    let randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    fill(randomColor); 
    rect(x, y, 16, 16); 
    yellowLines.splice(index, 1); // Prevent duplicate coverage 
  } 
}

function drawAxisLabels() { 
  let gridSize = 16; // Grid size 
  fill(0); // Black text 
  textSize(10); 
  textAlign(CENTER, CENTER); 

  // Draw X-axis labels 
  for (let x = 0; x <= width; x += gridSize) { 
    text(x / gridSize, x + gridSize / 2, 10); 
  } 

  // Draw Y-axis labels 
  for (let y = 0; y <= height; y += gridSize) { 
    text(y / gridSize, 10, y + gridSize / 2); 
  } 
}
