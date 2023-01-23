//Multiple handlers
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

function handleClick(event) {
  console.log("You clicked the button");
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  //stops this event from bubling up
  //   event.stopPropagation();
}

buttons.forEach((clickedBtn) =>
  clickedBtn.addEventListener("click", handleClick)
);

// or
// function handleClick(clickedBtn) {
//   clickedBtn.addEventListener("click", function () {
//     console.log("It is clicked");

//   });
// }
// buttons.forEach(handleClick);

//remove eventListener
const butts = document.querySelector(".butts");
function clickMe() {
  console.log("Someone Clicked me!!!");
}

butts.addEventListener("click", clickMe);
butts.removeEventListener("click", clickMe);

window.addEventListener(
  "click",
  function (event) {
    console.log("You clicked the window");
    console.log(event.target);
    event.stopPropagation();
  },
  { capture: true }
);
