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
    "4Estation",
    " triple jamon, maiz, tocino,peperoni",
    "./img/pizza4.jpg"
  );

  const binary = CreateDish(
    "Binary",
    "Double: queso, jamon, tocino, anchoas",
    "./img/pizza4.jpg"
  );

  const lonely = CreateDish(
    "Lonely",
    "Double: queso, jamon, tocino, anchoas",
    "./img/pizza4.jpg"
  );

  const bigCode = CreateDish(
    "Big-Code",
    "Double: queso, jamon, tocino, anchoas",
    "./img/pizza4.jpg"
  );

  const pixarela = CreateDish(
    "Pixarela",
    "Double: queso, jamon, tocino, anchoas",
    "./img/pizza4.jpg"
  );
}

createInitialDishes();

export { dishesMenu, CreateDish };
