const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});

const headerb =document.querySelector(".header") ;
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if(window.pageYOffset >=100){
    headerb.classList.add("shadowb")
  }
  else{
    headerb.classList.remove("shadowb")
  }
})
