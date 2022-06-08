import './style.css'

let grid = document.querySelector("#grid");

function addTile() {
  debugger;
  let newDiv = document.createElement("div");
  let cobaltspawn = Math.random () > 0.98;
  newDiv.classList.add("tile");
  let count = 1
  newDiv.innerHTML = `
   <img class="dirttile" src='./assets/dirttile.png'>
  `;
  grid.appendChild(newDiv);
  newDiv.addEventListener("click", function (e) { 
    count = count + 1;

    if (count > 10) {
      ///this # is the amount of clicks to break a tile, when done test annoyingness and choose click amount
 
      if (cobaltspawn) {
         newDiv.innerHTML = `<img class="emptytile" src="./assets/cobalttile.png">`;
      
      }  else {
         newDiv.innerHTML = `<img class="emptytile" src="./assets/emptytile.png">`;
      
      }
    }
  });
}

for (let i = 0; i < 1000; i++) {
  addTile();
}

let infoDiv = document.querySelector('#info');
let triggerDiv = document.querySelector('#info-trigger');


triggerDiv.addEventListener(
  'click',
  function () {
    infoDiv.classList.toggle('show')
  }
)