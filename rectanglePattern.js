const generatePattern = function (width,character) {
  let rectangle = "";
  for(let column=0; column<width; column++) {
    rectangle = rectangle + character;
  }
  return rectangle;
}

const createFilledRect = function(width,height) {
  let rectangle = "";
  let lineSeparator = "";
  for(let row=0; row<height; row++) {
    rectangle += lineSeparator +  generatePattern(width,"*");
    lineSeparator = "\n";
  }
  return rectangle;
}

const createEmptyRect = function (width,height) {
  let rectangle = "";
  let lineSeparator = "";
  rectangle += lineSeparator + generatePattern(width,"*");
  for(let row=1; row<height-1; row++) {
    lineSeparator = "\n";
    rectangle += lineSeparator + "*" + generatePattern(width-2," ") + "*";
  }
  rectangle += lineSeparator + generatePattern(width,"*") ;
  return rectangle;
}

const createAlternateRect = function(width,height) {
  let lineSeparator = "";
  for(let row=0; row<height; row++) {
    symbol= "-";
    if(row%2 == 0) {
      symbol= "*";
    } 
    rectangle += lineSeparator + generatePattern(width,symbol) ;
    lineSeparator = "\n";
  }
  return rectangle;
}

let kindOfRectangle = process.argv[2];
let width = process.argv[3];
let height = process.argv[4];
let rectangle = "";

if(kindOfRectangle.toLowerCase()  == "filled") {
  rectangle = createFilledRect(width,height);
}

if(kindOfRectangle.toLowerCase()  == "empty") {
  rectangle = createEmptyRect(width,height);
}

if(kindOfRectangle.toLowerCase()  == "alternating") {
  rectangle = createAlternateRect(width,height);
}

console.log(rectangle);
