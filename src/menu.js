import { main } from "../src/index";

const dishesMenu = [];

function CreateDish(name, ingredients, img) {
  const dish = { name, ingredients, img };

  dishesMenu.push(dish);
}

function createInitialDishes() {
  const pizzaNapolitana = CreateDish(
    "Napolitana",
    "Jamon, doble queso, anchos y tocino",
    "./img/pizza4.jpg"
  );

  const estation = CreateDish(
    "4Estaciones",
    " triple jamon, maiz, tocino,peperoni",
    "./img/pizza4.jpg"
  );

  const homeSpecial = CreateDish(
    "Especial Code",
    "Double: queso, jamon, tocino, anchoas",
    "./img/pizza4.jpg"
  );
}

createInitialDishes();

export { dishesMenu, CreateDish };
