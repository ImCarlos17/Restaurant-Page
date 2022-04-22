import CreateElement from "../src/elementFactory";
import { homeCard, changeContentHome } from "../src/home";
import { dishesMenu } from "../src/menu";
import { contactCard, changeContentContac } from "../src/contact";

const container = document.querySelector("#content");

const contact = contactCard;
const home = homeCard;
const menu = dishesMenu;

const createHeader = () => {
  const header = CreateElement({
    typeElement: "div",
    classElement: "header",
  });

  const containerTitle = CreateElement({
    typeElement: "div",
    classElement: "title-header",
  });

  const restaurantName = CreateElement({
    typeElement: "h1",
    contentElement: "Food In Code",
  });

  const navHeader = CreateElement({
    typeElement: "div",
    classElement: "nav-header",
  });

  const btnHome = CreateElement({
    typeElement: "button",
    classElement: "btn-home",
    contentElement: "Home",
  });

  btnHome.addEventListener("click", (e) => {
    changeSectionMain(e);
  });

  const bntMenu = CreateElement({
    typeElement: "button",
    classElement: "btn-menu",
    contentElement: "Menu",
  });

  bntMenu.addEventListener("click", (e) => {
    changeSectionMain(e);
  });

  const btnContac = CreateElement({
    typeElement: "button",
    classElement: "btn-contact",
    contentElement: "Contact",
  });

  btnContac.addEventListener("click", (e) => {
    changeSectionMain(e);
  });

  header.appendChild(containerTitle);
  containerTitle.appendChild(restaurantName);
  header.appendChild(navHeader);

  navHeader.appendChild(btnHome);
  navHeader.appendChild(bntMenu);
  navHeader.appendChild(btnContac);

  return header;
};

const createMain = () => {
  const main = CreateElement({
    typeElement: "div",
    classElement: "main",
  });

  return main;
};

const createFooter = () => {
  const footer = CreateElement({
    typeElement: "div",
    classElement: "footer",
  });

  const textFooter = CreateElement({
    typeElement: "p",
    contentElement: "Copyright &copy The Odin Project 2022",
  });

  footer.appendChild(textFooter);

  return footer;
};

const header = createHeader();
container.appendChild(header);

const main = createMain();
container.appendChild(main);

const footer = createFooter();
container.appendChild(footer);

const renderPizza = (pizza) => {
  const cardMenu = document.createElement("div");
  cardMenu.classList.add("card-menu");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body-menu");

  const containerImg = document.createElement("div");
  containerImg.classList.add("container-img-menu");

  const img = document.createElement("img");
  img.classList.add("img-pizza");
  img.setAttribute("src", pizza.img);

  const divCardText = document.createElement("div");
  divCardText.classList.add("container-text-menu");

  const pizzaTitle = document.createElement("h1");
  pizzaTitle.textContent = pizza.name;

  const titleIngredients = document.createElement("h3");
  titleIngredients.textContent = "Ingredients:";

  const pizzaIngredients = document.createElement("p");
  pizzaIngredients.textContent = pizza.ingredients;

  containerImg.appendChild(img);
  divCardText.appendChild(pizzaTitle);
  divCardText.appendChild(titleIngredients);
  divCardText.appendChild(pizzaIngredients);

  cardBody.appendChild(containerImg);
  cardBody.appendChild(divCardText);

  cardMenu.appendChild(cardBody);

  main.appendChild(cardMenu);
};

const renderMenu = (menu) => {
  menu.forEach((pizza) => renderPizza(pizza));
};

const changeSectionMain = (e) => {
  const section = e.target.textContent;
  main.innerText = " ";

  if (section == "Home") {
    main.classList.remove("container-grid");
    main.appendChild(home);
  }

  if (section == "Menu") {
    main.classList.add("container-grid");
    renderMenu(menu);
  }

  if (section == "Contact") {
    main.classList.remove("container-grid");
    main.appendChild(contact);
  }
};

export { header, main, footer };
