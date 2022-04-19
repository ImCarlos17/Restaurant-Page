import CreateElement from "./elementFactory";

const menuContent = () => {
  const menuCard1 = CreateElement({
    typeElement: "div",
    classElement: "card-menu",
  });

  const cardBody = CreateElement({
    typeElement: "div",
    classElement: "card-body-menu",
  });

  const containerImg = CreateElement({
    typeElement: "div",
    classElement: "container-img-menu",
  });

  const img = CreateElement({
    typeElement: "img",
    classElement: "img-pizza",
    sourceElement: "../src/img/pizza4.jpg",
  });

  const divCardText = CreateElement({
    typeElement: "div",
    classElement: "container-text-menu",
  });

  const pizzaTitle = CreateElement({
    typeElement: "h1",
    contentElement: "4 Estaciones",
  });

  const titleIngredients = CreateElement({
    typeElement: "h3",
    contentElement: "4 Estaciones",
  });

  const pizzaIngredients = CreateElement({
    typeElement: "p",
    contentElement:
      "Pizza con tomate,doble queso,tocineta,jamon de pierna y maiz",
  });

  containerImg.appendChild(img);
  divCardText.appendChild(pizzaTitle);
  divCardText.appendChild(titleIngredients);
  divCardText.appendChild(pizzaIngredients);

  cardBody.appendChild(containerImg);
  cardBody.appendChild(divCardText);

  menuCard1.appendChild(cardBody);

  return menuCard1;
};

export default menuContent;
