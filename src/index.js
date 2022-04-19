import CreateElement from "../src/elementFactory";

const container = document.querySelector("#content");

const indexModule = (() => {
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

    const bntMenu = CreateElement({
      typeElement: "button",
      classElement: "btn-menu",
      contentElement: "Menu",
    });

    const btnConct = CreateElement({
      typeElement: "button",
      classElement: "btn-contact",
      contentElement: "Contact",
    });

    header.appendChild(containerTitle);
    containerTitle.appendChild(restaurantName);
    header.appendChild(navHeader);

    navHeader.appendChild(btnHome);
    navHeader.appendChild(bntMenu);
    navHeader.appendChild(btnConct);

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
    const textFooter = CreateElement({
      typeElement: "p",
      contentElement: "Copyright &copy The Odin Project 2022",
    });

    const footer = CreateElement({
      typeElement: "div",
      classElement: "footer",
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

  return { header, main, footer };
})();

export default indexModule;
