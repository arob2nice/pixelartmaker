// Select color input
var pickColor = document.getElementById('colorPicker');

// Select size input
var sizePicker = document.getElementById('sizePicker');

// These are my height and width inputs
var hgt = document.getElementById('inputHeight');
var wth = document.getElementById('inputWidth');
var tble = document.getElementById('pixelCanvas');




// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
  tble.innerHTML = ''; // innerHTML helps with clearing color when I rehit submit.
  event.preventDefault();// when I click submit this helps not to reload the page.
  const height = hgt.value;// new variable for height value
  const width = wth.value;// new variable for width value
  makeGrid(height, width); // passes height and value as arguments and calls the makeGrid function to make the grid
})


// Function that makes the grid
/*
So my loop keeps looping until I until until it is greater than my
set values of width and height, then it will add my rows and cells within those
rows based on my height and width input values.  Then I added a click event at
the end so when clicked on individual cells it will fill the cells based on the
color value.
*/

function makeGrid(height, width) {
  for (var i = 0; i < height; i++) {
    var row = tble.insertRow(0);
    for (var j = 0; j < width; j++) {
      var cell = row.insertCell(0);
      tble.addEventListener('click', function() {
        event.target.style.backgroundColor = pickColor.value;
      })
      }
    }
  }
