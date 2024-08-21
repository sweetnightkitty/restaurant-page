//image src files for cards
import cardOneImage from "./box-one-image.jpeg";
import cardTwoImage from "./box-two-image.jpeg";
import cardThreeImage from "./box-three-image.jpeg";
import cardFourImage from "./box-four-image.jpeg";
import { createDivWithTwoClasses } from "./index.js";

export function loadHomeContent(content) {

    //containerHome will house all of the home page content
    const containerHome = createDivWithTwoClasses("container", "container-home");

    //Home page content consists of four cards
    const cardOne = makeCard("one");
    const cardTwo = makeCard("two");
    const cardThree = makeCard("three");
    const cardFour = makeCard("four");

    containerHome.appendChild(cardOne);
    containerHome.appendChild(cardTwo);
    containerHome.appendChild(cardThree);
    containerHome.appendChild(cardFour);
    
    //content is referenced from index.js - the div that houses the live page content
    content.appendChild(containerHome);
};

//Creates Home card, with left & right divs and sets text content and image to the appropriate side.
function makeCard(number) {

    const card = createDivWithTwoClasses("card", `card-${number}`);
    const cardLeft = createDivWithTwoClasses("card", "card-left");
    const cardRight = createDivWithTwoClasses("card", "card-right");

    //values 0-3 provide index values for the storedContent array
    if(number == "one") {
        setText(cardRight, 0);
        getImage(cardLeft, number, cardOneImage);
    } else if(number == "two") {
        setText(cardLeft, 1);
        getImage(cardRight, number, cardTwoImage);
    } else if(number == "three") {
        setText(cardRight, 2);
        getImage(cardLeft, number, cardThreeImage);
    } else if(number == "four") {
        setText(cardLeft, 3);
        getImage(cardRight, number, cardFourImage);
    };

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    return card;

}

//Retrieves text from storedContent array based on parameter index, and appends to the left or right side of the card
function setText(whichSide, index) {
    //stores text content for all home cards
    const storedContent = [
        {   
            card: "one",
            titleContent:"Our treat to you",
            textContent: "Join Butterfly Coffee Rewards and savor our gift to you: a free drink with qualifying purchase during your first week. Valid for one-time use.*",
            btnContent: "Join now",
        },
    
        {   
            card: "two",
            titleContent: "Sunny-day essentials",
            textContent: "Flavorful creations sure to brighten any summer day.",
            btnContent: "Order now",
        },
    
        {   
            card: "three",
            titleContent: "Here's an A+ gift",
            textContent: "Celebrate back to school by sending your favorite students, parents and school staff members a Butterfly Coffee eGift.",
            btnContent: "Send an eGift",
        },
    
        {   
            card: "four",
            titleContent: "Personal cups for good",
            textContent: "Your choice is a positive and responsible one-because bringing your clean reusable cup helps our planet.",
            btnContent: "Learn more",
        },
    ];

    const h2 = document.createElement("h2");
    h2.textContent = storedContent[index].titleContent;

    const textDiv = document.createElement("div");
    textDiv.textContent = storedContent[index].textContent;

    const btn = document.createElement("button");
    btn.textContent = storedContent[index].btnContent;

    const childDiv = document.createElement("div");
    childDiv.classList.add("card-text");

    childDiv.appendChild(h2);
    childDiv.appendChild(textDiv);
    childDiv.appendChild(btn);

    whichSide.appendChild(childDiv);
}

//Takes in the left or right div from the parent card div, and assigns image based on which card it is
function getImage(whichSide, number, sourceImage) {
    const image = document.createElement("img");
    image.classList.add("img", `img-${number}`)
    image.src = sourceImage;

    whichSide.appendChild(image);
}