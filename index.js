// Esse arquivo foi criado para gerenciar o menu responsivo

window.onload = () => {
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".sideMenu img");

  menuIcon.addEventListener("click", () => {
    //Quando houver um click no ícone do menu
    menu.classList.toggle("active");
  });
};
