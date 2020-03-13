// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component



const headerContainer = document.querySelector('.header-container');

function TimeHeader() {

//create elements
const headerTime = document.createElement('div');
const dateDisplay = document.createElement('span');
const headerDisplay = document.createElement('h1');
const tempDisplay = document.createElement('span');

//set your content
dateDisplay.textContent = "MARCH 28, 2019";
headerDisplay.textContent = "Lambda Times";
tempDisplay.textContent = "98°";


//structure your DOM


headerTime.append(dateDisplay);
headerTime.append(headerDisplay);
headerTime.append(tempDisplay);

headerTime.classList.add('header');
dateDisplay.classList.add('date');
tempDisplay.classList.add('temp');


return headerTime

}

headerContainer.append(TimeHeader());