import indexModule from "../src/index";

const main = indexModule.main;

const moduleMenu = () => {
  const menuPizzas = [];

  function CreateMenu(name, ingredients, img) {
    const pizza = { name, ingredients, img };

    menuPizzas.push(pizza);
  }

  const pizzaNapolitana = CreateMenu(
    "Napolitana",
    "Jamon, doble queso, anchos y tocino",
    "./img/pizza4.jpg"
  );

  const estation = CreateMenu(
    "4Estaciones",
    " triple jamon, maiz, tocino,peperoni",
    "./img/pizza4.jpg"
  );

  const homeSpecial = CreateMenu(
    "Especial Code",
    "Double: queso, jamon, tocino, anchoas",
    "./img/pizza4.jpg"
  );

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

  const renderMenu = () => {
    menuPizzas.forEach((pizza) => renderPizza(pizza));
  };

  renderMenu();
};

export default moduleMenu;
