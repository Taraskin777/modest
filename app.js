let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});

// modal

const modal = document.querySelector(".modal");
const closemodal = document.querySelector(".modal__close");
const sendbutton = document.querySelector(".send-but");

function showModal() {
  sendbutton.addEventListener("click", () => {
    if (modal.classList.contains("hide")) {
      modal.classList.add("show");
      modal.classList.remove("hide");
    } else {
      modal.classList.remove("hide");
      modal.classList.add("show");
    }
  });
}

showModal();

closemodal.addEventListener("click", () => {
  modal.classList.add("hide");
});


