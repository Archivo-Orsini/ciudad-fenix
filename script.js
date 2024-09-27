const desplegar = () => {
  const menu = document.querySelector(".hidden-menu");
  const article = document.querySelector(".article");

  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
    article.style.display = "none";
  } else {
    menu.style.display = "none";
  }
};

const showInfo = () => {
  const article = document.querySelector(".article");
  const menu = document.querySelector(".hidden-menu");

  if (article.style.display === "none" || article.style.display === "") {
    article.style.display = "block";
    menu.style.display = "none";
  } else {
    article.style.display = "none";
  }
};
