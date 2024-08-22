import "./styles.css";
import { loadHomeContent } from "./greeting";
import { loadMenuContent } from "./menu";
import { loadContactContent } from "./contact";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".btn-home");
const menuBtn = document.querySelector(".btn-menu");
const contactBtn = document.querySelector(".btn-contact");

//Loads the home page
window.addEventListener("load", loadHomeContent(content));


//3 event listeners will toggle content
menuBtn.addEventListener("click", () => {
    //clears the DOM
    clearDom();

    //loads the menu page
    loadMenuContent(content);
});

contactBtn.addEventListener("click", () => {
    //clears the DOM
    clearDom();

    //loads the contact page
    loadContactContent(content);
});

homeBtn.addEventListener("click", () => {
    //clears the DOM
    clearDom();

    //loads the home page
    loadHomeContent(content);
});

function clearDom() {
    //selects whatever container is loaded (home, menu or contact)
    const container= document.querySelector(".container");

    //removes current container
    content.removeChild(container);
}

export function createDivWithTwoClasses(classOne, classTwo) {
    const div = document.createElement("div");
    div.classList.add(classOne, classTwo);
    return div;
};