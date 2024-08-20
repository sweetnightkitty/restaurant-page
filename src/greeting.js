//import img
import sandwich from "./sandwich.jpeg";

export const greeting = "Hello";

export function loadHomeContent() {
    //Create h1
    const h1 = document.createElement("h1");
    h1.textContent = "Sara's Sassy Sandwiches";

    //Create img
    const image = document.createElement("img");
    image.src = sandwich;

    //Create div text
    const div = document.createElement("div");
    div.classList.add("text");
    div.textContent = "The funny thing is Sara hate's sandwhiches so that explains all the sass.";

    //Add h1, img and div text in order
    document.body.appendChild(h1);
    document.body.appendChild(image);
    document.body.appendChild(div);
}