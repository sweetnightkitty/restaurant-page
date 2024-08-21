//import img
import cardOneImage from "./box-one-image.jpeg";
import cardTwoImage from "./box-two-image.jpeg";
import cardThreeImage from "./box-three-image.jpeg";
import cardFourImage from "./box-four-image.jpeg";

export function loadHomeContent() {
    const content = document.querySelector("#content");

    //Create container div that houses all home content
    const container = document.createElement("div");
    container.classList.add("container", "container-home");

    //Make Home cards
    const one = makeCard("one");
    const two = makeCard("two");
    const three = makeCard("three");
    const four = makeCard("four");

    //Add home cards to the home container
    container.appendChild(one);
    container.appendChild(two);
    container.appendChild(three);
    container.appendChild(four);

    //Add container to the content div
    content.appendChild(container);
};

//Creates Home cards and populates it with appropriate content
function makeCard(number) {


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
            const titleContent = "Our treat to you"
            const textContent = "Join Butterfly Coffee Rewards and savor our gift to you: a free drink with qualifying purchase during your first week. Valid for one-time use.*";
            const btnContent = "Join now";
            setText(right, titleContent, textContent, btnContent);
            getImage(left, number);
        } else if(number == "three") {
            const titleContent = "Here's an A+ gift";
            const textContent = "Celebrate back to school by sending your favorite students, parents and school staff members a Butterfly Coffee eGift.";
            const btnContent = "Send an eGift";
            setText(right, titleContent, textContent, btnContent);
            getImage(left, number);
        };
    } else if(number == "two" || number == "four") {
        //text goes on left
        if(number == "two") {
            const titleContent = "Sunny-day essentials";
            const textContent = "Flavorful creations sure to brighten any summer day.";
            const btnContent = "Order now";
            setText(left, titleContent, textContent, btnContent);
            getImage(right, number);
        } else if(number == "four") {
            const titleContent = "Personal cups for good";
            const textContent = "Your choice is a positive and responsible one-because bringing your clean reusable cup helps our planet.";
            const btnContent = "Learn more";
            setText(left, titleContent, textContent, btnContent);
            getImage(right, number);
        };
    };

    div.appendChild(left);
    div.appendChild(right);

    return div;

}

//Generate text
function setText(div, titleContent, textContent, btnContent) {
    //create h2
    const h2 = document.createElement("h2");
    h2.textContent = titleContent;
    const textDiv = document.createElement("div");
    textDiv.textContent = textContent;
    const btn = document.createElement("button");
    btn.textContent = btnContent;

    const childDiv = document.createElement("div");
    childDiv.classList.add("card-text");

    childDiv.appendChild(h2);
    childDiv.appendChild(textDiv);
    childDiv.appendChild(btn);

    div.appendChild(childDiv);
};

function getImage(div, number) {
    const image = document.createElement("img");
    image.classList.add("img", `img-${number}`)

    if(number == "one") {
        image.src = cardOneImage;
    } else if(number == "two"){
        image.src = cardTwoImage;
    } else if(number == "three") {
        image.src = cardThreeImage;
    } else if(number == "four") {
        image.src = cardFourImage;
    };

    div.appendChild(image);
}