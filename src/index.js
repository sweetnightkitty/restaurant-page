import "./styles.css";
import { greeting } from "./greeting";
import { loadHomeContent } from "./greeting";


const homeBtn = document.querySelector(".btn-home");
const menuBtn = document.querySelector(".btn-menu");
const contactBtn = document.querySelector(".btn-contact");

//Loads the home page
window.addEventListener("load", loadHomeContent());


//3 event listeners will toggle content
menuBtn.addEventListener("click", () => {
    //clears the DOM
    //loads the menu page
});

contactBtn.addEventListener("click", () => {
    //clears the DOM
    //loads the contact page
});

homeBtn.addEventListener("click", () => {
    //clears the DOM
    //loads the contact page
});
