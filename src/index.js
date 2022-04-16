import style from "./style.css";

function CreateHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const containerTitle = document.createElement("div");
  containerTitle.classList.add("title-header");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "Food In Code";

  const navHeader = document.createElement("div");
  navHeader.classList.add("nav-header");

  const btnHome = document.createElement("button");
  btnHome.classList.add("btn-home");
  btnHome.textContent = "Home";

  const btnMenu = document.createElement("button");
  btnMenu.classList.add("btn-menu");
  btnMenu.textContent = "Menu";

  const btnContac = document.createElement("button");
  btnContac.classList.add("btn-contact");
  btnContac.textContent = "contact";

  containerTitle.appendChild(restaurantName);
  navHeader.appendChild(btnHome);
  navHeader.appendChild(btnMenu);
  navHeader.appendChild(btnContac);

  header.appendChild(containerTitle);
  header.appendChild(navHeader);

  return header;
}
