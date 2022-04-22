import "../css/style.css";
import { header, main, footer } from "../index.js";
import { homeCard, changeContentHome } from "../home";
import { dishesMenu } from "../menu";
import { contactCard, changeContentContac } from "../contact";

const contact = contactCard;
const home = homeCard;
const menu = dishesMenu;

main.appendChild(home);
