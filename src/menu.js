export function loadMenuContent(content) {
    //Create container div that houses all menu content
    const container = document.createElement("div");
    container.classList.add("container", "container-menu");

    //Creates h1
    const h1 = document.createElement("h1");
    h1.textContent = "Menu Home!";

    //add h1 to menu container
    container.appendChild(h1);

    //add menu container to the page content
    content.appendChild(container);
};