const showMenu = () => {
  const menu = document.querySelector(".hidden-menu");
  const article = document.querySelector(".article");

  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
    article.style.display = "none";
    document.querySelector(".article-tab").style.display = "none";
  } else {
    menu.style.display = "none";
  }
};

const showInfo = () => {
  const article = document.querySelector(".article");
  const menu = document.querySelector(".hidden-menu");
  const tab = document.querySelector(".article-tab");

  if (article.style.display === "none" || article.style.display === "") {
    article.style.display = "block";
    menu.style.display = "none";
    tab.style.display = "none";
  } else {
    article.style.display = "none";
  }
};

const minimizeArticle = () => {
  const article = document.querySelector(".article");
  const tab = document.querySelector(".article-tab");
  
  article.style.display = "none";
  tab.style.display = "block";
};

const restoreArticle = () => {
  const article = document.querySelector(".article");
  const tab = document.querySelector(".article-tab");
  
  article.style.display = "block";
  tab.style.display = "none";
};
