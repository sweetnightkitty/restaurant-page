//import img
import sandwich from "./sandwich.jpeg";

export function loadHomeContent() {
    const content = document.querySelector("#content");

    //Create container div that houses all home content
    const container = document.createElement("div");
    container.classList.add("container", "container-home");

    //Create h1
    const h1 = document.createElement("h1");
    h1.textContent = "Butterfly Coffee Company";

    //Create img
    const image = document.createElement("img");
    image.classList.add("img", "img-home");
    image.src = sandwich;

    //Create div text
    const div = document.createElement("div");
    div.classList.add("text");
    div.textContent = "The funny thing is Sara hate's sandwhiches so that explains all the sass.";

    //Add h1, img and div text in order to container-home
    container.appendChild(h1);
    container.appendChild(image);
    container.appendChild(div);

    //Make Box One
    const one = makeBox("one");
    const two = makeBox("two");
    const three = makeBox("three");
    const four = makeBox("four");


    container.appendChild(one);
    container.appendChild(two);
    container.appendChild(three);
    container.appendChild(four);

    //Add container to the content div
    content.appendChild(container);
};

//Creates content box
function makeBox(number) {
    const div = document.createElement("div");
    div.classList.add("card",`card-${number}`);

    const left = document.createElement("div");
    left.classList.add("card", "card-left");

    const right = document.createElement("div");
    right.classList.add("card", "card-right");

    //logic to know which side to add text to
    if(number == "one" || number == "three") {
        //text goes on right
        if(number == "one") {
            const textContent = "Our treat to you";
            setText(right, textContent);
        } else if(number == "three") {
            const textContent = "Here's an A+ gift";
            setText(right, textContent);
        };
    } else if(number == "two" || number == "four") {
        //text goes on left
        if(number == "two") {
            const textContent = "Sunny-day essentials";
            setText(left, textContent);
        } else if(number == "four") {
            const textContent = "Personal cups for good";
            setText(left, textContent);
        };
    };

    div.appendChild(left);
    div.appendChild(right);

    return div;

}

//Generate text
function setText(div, textContent) {
    div.textContent = textContent;
};