const contextMenu = document.querySelector(".container");
const subMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  contextMenu.style.visibility = "visible";

  let x = e.offsetX;
  let y = e.offsetY;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const contextMenuWidth = contextMenu.offsetWidth;
  const contextMenuHeight = contextMenu.offsetHeight;

  const smWidth = subMenu.offsetWidth;

  x = x > windowWidth - contextMenuWidth ? windowWidth - contextMenuWidth : x;
  y =
    y > windowHeight - contextMenuHeight ? windowHeight - contextMenuHeight : y;

  if (x > windowWidth - contextMenuWidth - smWidth) {
    subMenu.style.left = "-170px";
  } else {
    subMenu.style.left = "100%";
  }

  contextMenu.style.left = `${x - 1}px`;
  contextMenu.style.top = `${y - 1}px`;
});

document.addEventListener("click", function () {
  contextMenu.style.visibility = "hidden";
});
