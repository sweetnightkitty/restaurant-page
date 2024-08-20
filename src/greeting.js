//import img
import sandwich from "./sandwich.jpeg";

export function loadHomeContent() {
    const content = document.querySelector("#content");

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

    //Add h1, img and div text in order
    content.appendChild(h1);
    content.appendChild(image);
    content.appendChild(div);
}