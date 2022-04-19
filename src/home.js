import CreateElement from "./elementFactory";

const homeContent = () => {
  const homeCard = CreateElement({
    typeElement: "div",
    classElement: "card-home",
  });

  const cardBody = CreateElement({
    typeElement: "div",
    classElement: "card-body-home",
  });

  const cardTitle = CreateElement({
    typeElement: "h1",
    contentElement: "Welcome to Food in Code",
  });

  const containerImg = CreateElement({
    typeElement: "div",
    classElement: "container-img",
  });

  const img = CreateElement({
    typeElement: "img",
    classElement: "img-card",
    sourceElement: "../src/img/restaurant-background.jpg",
  });

  const divCardText = CreateElement({
    typeElement: "div",
    classElement: "div-card-text",
  });

  const cardText = CreateElement({
    typeElement: "p",
    classElement: "text-card",
    contentElement:
      "We are a restaurant specialized in pizzas, you can enjoy more than 10 different types of pizzas, serving our customers since 1996... remember what a pleasure it is to eat♥.",
  });

  containerImg.appendChild(img);
  divCardText.appendChild(cardText);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(containerImg);
  cardBody.appendChild(divCardText);
  homeCard.appendChild(cardBody);

  return homeCard;
};

export default homeContent;
