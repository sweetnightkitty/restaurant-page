import { createDivWithTwoClasses } from "./index.js";

export function loadContactContent(content) {

    //Houses all contact content
    const containerContact = createDivWithTwoClasses("container", "container-contact");

    //Creates h1
    const h1 = document.createElement("h1");
    h1.textContent = "Contact Home!";

    //add h1 to menu container
    containerContact.appendChild(h1);

    //add menu container to the page content
    content.appendChild(containerContact);
};


function createParagraph() {

}
