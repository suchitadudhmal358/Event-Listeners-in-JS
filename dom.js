const heading = document.querySelector("h2");
console.log(heading.textContent); //it displays all content including {} ,...
console.log(heading.innerText); //it displays only text

//set the textContet Property on element
// heading.textContent = "wes bos is here";
// console.log(heading.textContent);
// console.log(heading.innerHTML);
// console.log(heading.innerHTML);

const pizzaList = document.querySelector(".pizza");
console.log(pizzaList.textContent);

pizzaList.textContent = `${pizzaList.textContent}  2`;
pizzaList.insertAdjacentText("beforeend", "two");

const custom = document.querySelector(".custom");
console.log(custom.dataset);

const customImg = document.querySelector(".custom img");
customImg.alt = "cute image";
customImg.addEventListener("click", function () {
  customImg.width = 400;
});

custom.addEventListener("click", function () {
  alert(`welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
