// NAV

// Выпадающее меню - настройки

let dropMenuSett = document.querySelector('.nav__settings-menu');
let btnMenuSett = document.querySelector('.nav__settings');

btnMenuSett.addEventListener('click', function(e) {
  dropMenuSett.classList.toggle('open');
  btnMenuSett.classList.toggle('active');
});

let dropMenuSrch = document.querySelector('.nav__search-menu');
let btnMenuSrch = document.querySelector('.nav__search');

btnMenuSrch.addEventListener('click', function(e) {
  dropMenuSrch.classList.toggle('open');
  btnMenuSrch.classList.toggle('active');
});

let dropMenuList = document.querySelector('.main-menu__list');
let btnMenuList = document.querySelector('.nav__burger');

btnMenuList.addEventListener('click', function(e) {
  dropMenuList.classList.toggle('open');
  btnMenuList.classList.toggle('active');
})

