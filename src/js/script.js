import "../css/style.css";
import indexModule from "../index.js";
import homeContent from "../home.js";

const renderIndex = indexModule;

const titulo = document.createElement("h1");
titulo.textContent = "Hola Webpack";

const renderhome = homeContent();

renderIndex.main.appendChild(renderhome);
