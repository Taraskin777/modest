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
  modal.classList.add("show");
  modal.classList.remove("hide");
  clearInterval(showModalByTimeOut);
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    showModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

sendbutton.addEventListener("click", showModal);
closemodal.addEventListener("click", closeModal);

const showModalByTimeOut = setTimeout(showModal, 6000);
