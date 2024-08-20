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

    //gets first box
    const boxOne = getBoxOne();
    container.appendChild(boxOne);


    //Add container to the content div
    content.appendChild(container);
}

//May need to refactor this to make content load in the correct place and set up flexbox
//Turn into a factory? that returns object of div, left and right
function makeBox() {
    const div = document.createElement("div");
    const left = document.createElement("div");
    const right = left;

    left.classList.add("left-content");
    right.classList.add("right-content");

    div.appendChild(left);
    div.appendChild(right);

    return div;

}


function getBoxOne () {

    const boxOne = makeBox()
    boxOne.classList.add("box", "box-one");

    //content is adding to div box but not to right content like intended
    const h2 = document.createElement("h2");
    h2.textContent = "Our treat to you"

    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = "Join Butterfly Coffee Rewards and savor our gift to you: a free drink with qualifying purchase during your first week. Valid for one-time use.*";

    boxOne.appendChild(h2);
    boxOne.appendChild(text);

    return boxOne;
}