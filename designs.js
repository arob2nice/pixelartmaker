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
  tble.innerHTML = ''; //innerHTML helps with clearing color when I rehit submit.
  event.preventDefault(); //when I click submit this helps not to reload the page.
  makeGrid(); //calls the makeGrid function to make the grid
})

/*
Sorry if I mix up the terminologies, I'm still grasping everything.  I went to
MDN and did some research on the <table> element.  What I found was that TD is
the data cell element within the <table> element.  So basically it's the little
square cells that appear within the rows of the <table>.  So my plan here was to
add a conditional statement that if I click within the <table> element and it is
being clicked on the cell, hence TD the table cell data, then I want that cell
to fill with the color based on the value of the color picker.
*/
tble.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    event.target.style.backgroundColor = pickColor.value;
  }
})

// Function that makes the grid
/*
So what I think is happening with the grid is whatever value or number I set as
my grid height or width, the code will just keep looping as long as the
conditions are true, but once the loop exceeds my input value then it will
be false.  So then it will insert a row and my cells within those rows based on
the value.
*/
function makeGrid(){
  for (var i = 0; i <= hgt.value; i++) {
    var row = tble.insertRow(0);
    for (var j = 0; j <= wth.value; j++) {
      row.insertCell(0);

    }
  }
}
