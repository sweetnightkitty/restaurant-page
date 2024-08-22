import { createDivWithTwoClasses } from "./index.js";
import coffeeLogo from "./coffeeLogo.jpg";


export function loadMenuContent(content) {
    //Create container div that houses all menu content
    const containerMenu = createDivWithTwoClasses("container", "container-menu");

    //Creates all content for the left column
    const columnLeft = createDivWithTwoClasses("column", "column-left");
    const nav = createNav();
    columnLeft.appendChild(nav);

    //Creates all content for the right column
    const columnRight = createDivWithTwoClasses("column", "column-right");
    const h1 = document.createElement("h1");
    h1.textContent = "Menu?";

    //Creates the full menu on the right column
    const fullPhotoMenu = createDivWithTwoClasses("full-photo-menu");

    //Creates each sub photo menu - empty div is temp
    const photoMenuOne = createPhotoMenu("one");
    const photoMenuTwo = createPhotoMenu("two");
    const photoMenuThree = createPhotoMenu("three");
    const photoMenuFour = createPhotoMenu("four");

    //Appends all sub photo menus to the full photo menu
    fullPhotoMenu.appendChild(h1);
    fullPhotoMenu.appendChild(photoMenuOne);
    fullPhotoMenu.appendChild(photoMenuTwo);
    fullPhotoMenu.appendChild(photoMenuThree);
    fullPhotoMenu.appendChild(photoMenuFour);

    //Appends all content to the right column
    columnRight.appendChild(fullPhotoMenu);

    //add both columns to menu container
    containerMenu.appendChild(columnLeft);
    containerMenu.appendChild(columnRight);

    //add menu container to the page content
    content.appendChild(containerMenu);
};


//Creates all content for the left column
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
    const menuInfo = getMenuInfo();

    //Each array contains one subMenu's title and list of products
    //Each array at index 0 is the menu title; index 1+ is a menu item

    //Sets the current array to the correct sub Menu info
    let currentMenuArray;
    if(number == "one") {
        currentMenuArray = menuInfo.drinks();
    } else if(number == "two") {
        currentMenuArray = menuInfo.food();
    } else if(number == "three") {
        currentMenuArray = menuInfo.homeCoffee();
    } else if(number == "four") {
        currentMenuArray = menuInfo.merchandise();
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

function createPhotoMenu(number) {
    const menuInfo = getMenuInfo();
    let currentTextArray;
    let currentPhotoArray;

    if(number == "one"){
        currentTextArray = menuInfo.drinks();
        currentPhotoArray = menuInfo.drinkPhotos();
    } else if(number == "two") {
        currentTextArray = menuInfo.food();
        currentPhotoArray = menuInfo.foodPhotos();
    } else if(number == "three") {
        currentTextArray = menuInfo.homeCoffee();
        currentPhotoArray = menuInfo.homePhotos();
    }else if(number == "four") {
        currentTextArray = menuInfo.merchandise();
        currentPhotoArray = menuInfo.merchandisePhotos();
    };

    const photoMenu = createDivWithTwoClasses("photo-menu", `photo-menu-${number}`);

    const photoMenuTitle = createElementWithTwoClasses("h2", "photo-menu-title", `photo-menu-title-${number}`);
    photoMenuTitle.textContent = currentTextArray[0];

    const photoMenuItems = createDivWithTwoClasses("photo-menu-items", `photo-menu-items-${number}`);


    for(let i = 1; i < currentTextArray.length; i++) {
        const photoMenuItem = createDivWithTwoClasses("photo-menu-item", `photo-menu-item-${number}`);

        const itemPhoto = createElementWithTwoClasses("img", "item-img", `item-img-${number}`);
        itemPhoto.src = currentPhotoArray[i];

        //Gets custom css value designated for photo size, and applies to the photo
        const style = getComputedStyle(document.body);
        const photoSize = style.getPropertyValue("--photoSize");

        itemPhoto.style.maxWidth = photoSize;

        const itemText = createDivWithTwoClasses("item-text", `item-text-${number}`);
        itemText.textContent = currentTextArray[i];

        photoMenuItem.appendChild(itemPhoto);
        photoMenuItem.appendChild(itemText);

        photoMenuItems.appendChild(photoMenuItem);
    };
    
    photoMenu.appendChild(photoMenuTitle);
    photoMenu.appendChild(photoMenuItems);

    return photoMenu;
};




function createElementWithTwoClasses(type, classOne, classTwo) {
    const tempElement = document.createElement(type);
    tempElement.classList.add(classOne, classTwo);
    return tempElement;
};

function getMenuInfo() {
    const drinks = () => [
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
    const food = () => [
        "Food",
        "Hot Breakfast",
        "Oatmeal & Yogurt",
        "Bakery",
        "Lunch",
        "Snacks & Sweets",
    ];
    const homeCoffee = () => [
        "At Home Coffee",
        "Whole Bean",
        "VIA Instant",
    ];
    const merchandise = () => [
        "Merchandise",
        "Cold Cups",
        "Tumblers",
        "Mugs",
        "Other",
    ];

    const drinkPhotos = () => [
        "Drinks",
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
    ];
    const foodPhotos = () => [
        "Food",
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
    ];
    const homePhotos = () => [
        "At Home Coffee",
        coffeeLogo,
        coffeeLogo,
    ];
    const merchandisePhotos = () => [
        "Merchandise",
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
        coffeeLogo,
    ];

    return {
        drinks,
        food,
        homeCoffee,
        merchandise,
        drinkPhotos,
        foodPhotos,
        homePhotos,
        merchandisePhotos,
    }
};