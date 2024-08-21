
import { createDivWithTwoClasses } from "./index.js";

export function loadContactContent(content) {

    //Houses all contact content
    const containerContact = createDivWithTwoClasses("container", "container-contact");
    const h1 = document.createElement("h1");
    h1.textContent = "Contact us";

    //Creates Paragraphs
    // const paraOne = makeParagraph("one");
    const paraTwo = makeParagraph("two")
    const paraThree = makeParagraph("three");
    const paraFour = makeParagraph("four");
    const paraFive = makeParagraph("five");

    // //Appends paragraphs to containerContact
    containerContact.appendChild(h1);
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
            title: "Contact us",
            text: "",
        },

        {
            paragraph: "two",
            title: "Customer Service",
            text: 'If you have general questions or concerns about Starbucks, please contact our Customer Contact Center <a href="#">customerservice.starbucks.com</a>',
        },

        {
            paragraph: "three",
            title: "Media Contacts",
            text: "Please email your detailed inquiry and deadline for response to the following: <br>Global:",
            textTwo: "Phone: 206 318 7100",
            textThree: 'Email: <a href="#">press@starbucks.com</a> <br>For inquiries related to Asia or Canada please visit their respective Starbucks Stories & News site <br>Europe, Middle East and Africa',
            textFour: "Phone +44 20 3047 2656",
            textFive: "Email: PressEMEA@starbucks.com",
        },

        {
            paragraph: "four",
            title: "Investor Relations",
            text: 'For inquiries related to stock ownership please submit a written inquiry through email to <a href="#">investorrelations@starbucks.com</a>.',
        },

        {
            paragraph: "five",
            title: "Partnership and Sponsorship Requests",
            text: 'If you have an exciting partnership or sponsorship you’d like us to consider, please send a detailed overview of the opportunity and your information to <a href="#">partnerships@starbucks.com</a>.',
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
    const div = createDivWithTwoClasses("text", `text-${number}`);

    //Assigns text based on the respective paragraph
    h2.textContent = storedContent[index].title;

    if(index == 2) {
        const divOne = createDivWithTwoClasses("text", `text-${number}-one`);
        const divTwo = createDivWithTwoClasses("text", `text-${number}-two`);
        const divThree = createDivWithTwoClasses("text", `text-${number}-three`);
        const divFour = createDivWithTwoClasses("text", `text-${number}-four`);
        const divFive = createDivWithTwoClasses("text", `text-${number}-five`);

        divOne.innerHTML = storedContent[index].text;
        divTwo.innerHTML = storedContent[index].textTwo;
        divThree.innerHTML = storedContent[index].textThree;
        divFour.innerHTML = storedContent[index].textFour;
        divFive.innerHTML = storedContent[index].textFive;

        paragraph.appendChild(h2);
        paragraph.appendChild(divOne);
        paragraph.appendChild(divTwo);
        paragraph.appendChild(divThree);
        paragraph.appendChild(divFour);
        paragraph.appendChild(divFive);
    } else {
        div.innerHTML = storedContent[index].text;
            //Appends text to the paragraph div
    paragraph.appendChild(h2);
    paragraph.appendChild(div);

    }

    return paragraph;
};
