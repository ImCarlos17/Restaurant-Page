import CreateElement from "./elementFactory";

const contactCard = CreateElement({
  typeElement: "div",
  classElement: "card-contact",
});

const cardBody = CreateElement({
  typeElement: "div",
  classElement: "card-body-contact",
});

const cardTitle = CreateElement({
  typeElement: "h1",
  contentElement: "Contact Us",
});

const containerImg = CreateElement({
  typeElement: "div",
  classElement: "div-img-contact",
});

const imgCard = CreateElement({
  typeElement: "img",
  classElement: "img-card-home",
  sourceElement: "../src/img/restaurant-background.jpg",
});

const divDataContact = CreateElement({
  typeElement: "div",
  classElement: "data-contact",
});

const instagram = CreateElement({
  typeElement: "h3",
  contentElement: "Instagram: @Food_inCode22",
});

const twitter = CreateElement({
  typeElement: "h3",
  contentElement: "Twitter: @FoodCode22",
});

const facebook = CreateElement({
  typeElement: "h3",
  contentElement: "Facebook: Food in Code",
});

const phoneNumber = CreateElement({
  typeElement: "p",
  contentElement: "Phone number: +235 0425-565-567",
});

const createContactCard = () => {
  containerImg.appendChild(imgCard);
  divDataContact.appendChild(instagram);
  divDataContact.appendChild(twitter);
  divDataContact.appendChild(facebook);
  divDataContact.appendChild(phoneNumber);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(containerImg);
  cardBody.appendChild(divDataContact);

  contactCard.appendChild(cardBody);
};

const createCard = createContactCard();

const changeContentContac = ({
  title,
  newInstagram,
  newTwitter,
  newFacebook,
  img,
}) => {
  if (title) {
    cardTitle.textContent = title;
  }

  if (newInstagram) {
    instagram.textContent = newInstagram;
  }

  if (newTwitter) {
    twitter.textContent = newTwitter;
  }

  if (newFacebook) {
    facebook.textContent = newFacebook;
  }
  if (img) {
    imgCard.setAttribute("src", img);
  }
};

export { contactCard, changeContentContac };
