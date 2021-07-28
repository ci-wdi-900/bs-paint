/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count < gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// ======================
// Changing brush color
//=======================

//
const paletteColors = document.querySelectorAll('.palette-color');

//
const currentBrush = document.querySelector('.current-brush');

// 
for (const paletteColor of paletteColors) {

  
  paletteColor.addEventListener('click', function (){
  
    
    
  const brushColorBefore = paletteBrush.classlist[1];
  
    
  const newBrushColor = paletteColor.classlist[1];

    
  currentBrush.classList.replace(brushColorBefore, newBrushColor);
  
  });
}
// Changing square colors
// ========================

// 
const squares = document.querySelectorAll('.square');

//
for (const square of squares) {

  // 
  square.addEventListener('click', function () {

    //
    const brushClasses = currentBrush.className.split(' ');
  
    //
    const brushColor = brushClasses[1];    

    //
    square.className = 'square ${brushColor}';
  });
}

// ============================================
// Changing squares colors with click and drag
// ============================================

let penDown = false;

//
document.addEventListener('mousedown', function () {
  penDown = true;
});

// 
document.addEventListener('mouseup', function () {
  penDown = false;
});

// 
for (const square of squares) {

  // 
  square.addEventListener('mouseenter', function () {

    // 
    if (penDown) {

      // 
      const brushClasses = currentBrush.className.split(' ');

      // 
      const brushColor = brushClasses[1];

      // 
      square.className = `square ${brushColor}`;
    }
  });
}


// =========
// Dark mode
// =========

// 
const darkModeButton = document.querySelector('#dark-mode');

// 
darkModeButton.addEventListener('click', function () {
  
  // 
  const app = document.querySelector('.app');
  app.classList.toggle('dark-mode');
});


