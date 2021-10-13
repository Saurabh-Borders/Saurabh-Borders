const menuBtn = document.querySelector('.menu-btn');
const menuBlock = document.querySelector('.menu-block');
const menuClose = document.querySelector('.menu-btn-cross');
// const menuposition = document.querySelector('.panel');
let menuOpen = false;
let menuClosebt = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBlock.classList.add('open');
    menuBtn.classList.add('open');
    // menuClose.classList.add('open');
    // menuposition.style.position = "relative";
    menuOpen = true;
  } else {
    menuBlock.classList.remove('open');
    menuBtn.classList.remove('open');
    // menuClose.classList.remove('open');
    // menuposition.style.position = "sticky";
    menuOpen = false;
  }
});
menuClose.addEventListener('click', () => {
  menuBlock.classList.remove('open');
  menuBtn.classList.remove('open');
  menuOpen = false;
});
