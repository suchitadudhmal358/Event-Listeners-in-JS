const p = document.querySelector(".wes");
console.log(p.children);
console.log(p.childNodes);
console.log(p.firstElementChild);
console.log(p.lastElementChild);
console.log(p.previousElementSibling);
console.log(p.nextElementSibling);
console.log(p.parentElement);
console.log(p.parentElement.parentElement);

//remove elements
const newPara = document.createElement("p");
newPara.textContent = "I will be removed";
p.appendChild(newPara);
newPara.remove();
console.log(newPara);
p.appendChild(newPara);
