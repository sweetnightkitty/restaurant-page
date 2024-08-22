import { createDivWithTwoClasses } from "./index.js";

export function loadMenuContent(content) {
    //Create container div that houses all menu content
    const containerMenu = createDivWithTwoClasses("container", "container-menu");
    const columnLeft = createDivWithTwoClasses("column", "column-left");
    const columnRight = createDivWithTwoClasses("column", "column-right");

    columnRight.textContent = "Menu";

    const nav = createNav();
    columnLeft.appendChild(nav);

    //add  to menu container
    containerMenu.appendChild(columnLeft);
    containerMenu.appendChild(columnRight);

    //add menu container to the page content
    content.appendChild(containerMenu);
};

function createNav() {
    //Creates the nav and the fullMenu inside
    const nav = createElementWithTwoClasses("nav", "nav-menu");
    const fullMenu = createElementWithTwoClasses("ul", "menu", "menu-main");

    //Creates the four sub menus
    const subMenuOne = createSubMenu("one");
    const subMenuTwo = createSubMenu("two");
    const subMenuThree = createSubMenu("three");
    const subMenuFour = createSubMenu("four");

    //Appends sub menus to the full menu
    fullMenu.appendChild(subMenuOne);
    fullMenu.appendChild(subMenuTwo);
    fullMenu.appendChild(subMenuThree);
    fullMenu.appendChild(subMenuFour);

    //Appends the full menu to the nav
    nav.appendChild(fullMenu);

    return nav;
};



function createSubMenu(number) {
    //Each array contains one subMenu's title and list of products
    //Each array at index 0 is the menu title; index 1+ is a menu item
    const drinks = [
        "Drinks",
        "Iced Energy",
        "Hot Coffees",
        "Cold Coffees",
        "Starbucks Refreshers Beverages",
        "Frappuccino Blended Beverages",
        "Iced Tea & Lemonade",
        "Hot Teas",
        "Milk, Juice & More",
        "Bottled Beverages",
    ];

    const food = [
        "Food",
        "Hot Breakfast",
        "Oatmeal & Yogurt",
        "Bakery",
        "Lunch",
        "Snacks & Sweets",
    ];

    const homeCoffee = [
        "At Home Coffee",
        "Whole Bean",
        "VIA Instant",
    ];

    const merchandise = [
        "Merchandise",
        "Cold Cups",
        "Tumblers",
        "Mugs",
        "Other",
    ];

    //Sets the current array to the correct sub Menu info
    let currentMenuArray;
    if(number == "one") {
        currentMenuArray = drinks;
    } else if(number == "two") {
        currentMenuArray = food;
    } else if(number == "three") {
        currentMenuArray = homeCoffee;
    } else if(number == "four") {
        currentMenuArray = merchandise;
    };

    //Creates sub menu and sub menu's title
    const subMenu = createElementWithTwoClasses("li", "sub-menu", `sub-menu-${number}`);
    const subMenuTitle = createElementWithTwoClasses("span", "sub-menu-title", `sub-menu-title-${number}`);
    
    //Assigns the Title which is the first item in the array
    subMenuTitle.textContent = currentMenuArray[0];

    const subMenuItems = createElementWithTwoClasses("ul");

    //Generates all the menu items and appends them to sub menu items ul
    for(let i = 1; i < currentMenuArray.length; i++) {
        const item = createElementWithTwoClasses("li", "menu-item", `menu-item-${number}`);
        item.textContent = currentMenuArray[i];
        subMenuItems.appendChild(item);
    };

    //Appends menu title and menu items to the sub menu
    subMenu.appendChild(subMenuTitle);
    subMenu.appendChild(subMenuItems);

    return subMenu;

};



function createElementWithTwoClasses(type, classOne, classTwo) {
    const tempElement = document.createElement(type);
    tempElement.classList.add(classOne, classTwo);
    return tempElement;
};