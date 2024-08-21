
import { createDivWithTwoClasses } from "./index.js";

export function loadContactContent(content) {

    //Houses all contact content
    const containerContact = createDivWithTwoClasses("container", "container-contact");

    //Creates Paragraphs
    const paraOne = makeParagraph("one");
    const paraTwo = makeParagraph("two")
    const paraThree = makeParagraph("three");
    const paraFour = makeParagraph("four");
    const paraFive = makeParagraph("five");

    // //Appends paragraphs to containerContact
    containerContact.appendChild(paraOne);
    containerContact.appendChild(paraTwo);
    containerContact.appendChild(paraThree);
    containerContact.appendChild(paraFour);
    containerContact.appendChild(paraFive);

    //content is referenced from index.js - the div that houses the live page content
    content.appendChild(containerContact);
};


function makeParagraph(number) {
    const paragraph = createDivWithTwoClasses("paragraph", `paragraph-${number}`);

    //Stores the text content that will be displayed on page
    const storedContent = [
        {
            paragraph: "one",
            title: "title",
            text: "text",
        },

        {
            paragraph: "two",
            title: "title",
            text: "text",
        },

        {
            paragraph: "three",
            title: "title",
            text: "text",
        },

        {
            paragraph: "four",
            title: "title",
            text: "text",
        },

        {
            paragraph: "five",
            title: "title",
            text: "text",
        },
    ];

    //numbers 0-4 represent the respective paragraph's stored content in the array
    let index;
    if(number == "one") {
        index = 0;
    } else if(number == "two") {
        index = 1;
    } else if(number == "three") {
        index = 2;
    } else if(number == "four") {
        index = 3;
    } else if(number == "five") {
        index = 4;
    };

    //create h2 and div that will hold paragraph text
    const h2 = document.createElement("h2");
    const div = createDivWithTwoClasses();

    //Assigns text based on the respective paragraph
    h2.textContent = storedContent[index].title;
    div.textContent = storedContent[index].text;

    //Appends text to the paragraph div
    paragraph.appendChild(h2);
    paragraph.appendChild(div);

    return paragraph;
};
