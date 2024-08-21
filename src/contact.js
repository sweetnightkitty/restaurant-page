export function loadContactContent(content) {

    //Create container div that houses all contact content
    const containerContact = document.createElement("div");
    containerContact.classList.add("container", "container-contact");

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
