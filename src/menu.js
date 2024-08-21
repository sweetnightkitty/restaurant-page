import { createDivWithTwoClasses } from "./index.js";

export function loadMenuContent(content) {
    //Create container div that houses all menu content
    const containerMenu = createDivWithTwoClasses("container", "container-menu");
    const columnLeft = createDivWithTwoClasses("column", "column-left");
    const columnRight = createDivWithTwoClasses("column", "column-right");

    columnLeft.textContent = "Drinks";
    columnRight.textContent = "Menu";

    //add  to menu container
    containerMenu.appendChild(columnLeft);
    containerMenu.appendChild(columnRight);

    //add menu container to the page content
    content.appendChild(containerMenu);
};

function createNav() {
    const nav = document.createElement("nav");

    const drinksMenu = document.createElement("ul");
    createMiniMenu("Drinks", (drinks.length), drinks, nav);
}

const drinks = ["Iced Energy", "Hot Coffees", "Cold Coffees", "Starbucks Refreshers Beverages", "Frappuccino Blended Beverages", "Iced Tea & Lemonade", "Hot Teas", "Milk, Juice & More", "Bottled Beverages"];

function createMiniMenu(menuTitle, itemsNumber, array, nav) {
    const span = document.createElement("span");
    span.textContent = menuTitle;
    nav.appendChild(span);

    for(let i = 0; i < itemsNumber; i++) {
        const li = document.createElement("li");
        li.textContent = array[i];
        nav.appendChild(li);
    }

    return nav;

}



{/* <nav>
    <ul>
        <li>
            <span>Drinks</span>
            <ul>
                <li>
                    <a ="" href="#">Drink type</a>
                </li>
            </ul>
        </li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</nav> */}