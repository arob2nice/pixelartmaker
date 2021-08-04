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
  tble.innerHTML = '';
  event.preventDefault();
  makeGrid();
})

tble.addEventListener('click', function(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = pickColor.value;
  }
})

// Function that makes the grid
function makeGrid(){
  for (var i = 0; i < hgt.value; i++) {
    var row = tble.insertRow(0);
    for (var j = 0; j < wth.value; j++) {
      row.insertCell(0);



    }
  }
}
