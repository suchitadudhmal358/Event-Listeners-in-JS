const myParagraph = document.createElement("p");
myParagraph.textContent = "I am a Paragraph";
myParagraph.classList.add("special");
console.log(myParagraph);

const myimg = document.createElement("img");
myimg.src = "https://picsum.photos/200/300";
myimg.alt = "tempImg";
console.log(myimg);

const mydiv = document.createElement("div");
mydiv.classList.add("wrapper");
console.log(mydiv);

mydiv.appendChild(myParagraph);
mydiv.appendChild(myimg);
document.body.insertAdjacentElement("afterbegin", mydiv);

const heading = document.createElement("h2");
heading.textContent = "Cool Things";
mydiv.insertAdjacentElement("beforebegin", heading);

//creating ul
const list = document.createElement("ul");
document.body.insertAdjacentElement("afterbegin", list);

const li = document.createElement("li");
li.textContent = "three";
list.appendChild(li);

const li5 = document.createElement("li");
li5.textContent = "five";
list.append(li5);

const li1 = li.cloneNode(true);
li1.textContent = "one";
list.insertAdjacentElement("afterbegin", li1);

const li2 = document.createElement("li");
li2.textContent = "two";
li.insertAdjacentElement("beforebegin", li2);

const li4 = document.createElement("li");
li4.textContent = "four";
li5.insertAdjacentElement("beforebegin", li4);

const item = document.querySelector(".item");
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <style>.desc{
    color : blue;
}</style><img onload = "alert('HACKED')" src = 'https://picsum.photos/30'>`;
const myHtml = `
    <div class='wrapper'>
        <h2 class = "desc">${desc}</h2>
        <img src ="${src}" alt = "${desc}">
    </div>
`;

// item.innerHTML = myHtml; //here myHtml is string

//turning a string into DOM element
const myFragment = document.createRange().createContextualFragment(myHtml);
document.body.appendChild(myFragment);
