// NAV

// Выпадающее меню - бургер

let burger = document.querySelector('.nav__burger');
let menuList = document.querySelector('.main-menu__list');

const toggleMenuList = () => {
  menuList.classList.toggle('open');
  burger.classList.toggle('active');

  menuSrch.classList.remove('open');
  search.classList.remove('active');
  menuSett.classList.remove('open');
  settings.classList.remove('active');
}

burger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenuList();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menuList || menuList.contains(target);
  let its_hamburger = target == burger;
  let menu_is_active = menuList.classList.contains('open');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenuList();
  }
})

// Выпадающее меню - настройки

let settings = document.querySelector('.nav__settings');
let menuSett = document.querySelector('.nav__settings-menu');

const toggleMenuSet = () => {
  menuSett.classList.toggle('open');
  settings.classList.toggle('active');

  menuSrch.classList.remove('open');
  search.classList.remove('active');
  menuList.classList.remove('open');
  burger.classList.remove('active');
}

settings.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenuSet();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menuSett || menuSett.contains(target);
  let its_hamburger = target == settings;
  let menu_is_active = menuSett.classList.contains('open');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenuSet();
  }
})

// Выпадающее меню - поиск

let search = document.querySelector('.nav__search');
let menuSrch = document.querySelector('.nav__search-menu');

const toggleMenuSrch = () => {
  menuSrch.classList.toggle('open');
  search.classList.toggle('active');

  menuSett.classList.remove('open');
  settings.classList.remove('active');
  menuList.classList.remove('open');
  burger.classList.remove('active');
}

search.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenuSrch();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menuSrch || menuSrch.contains(target);
  let its_hamburger = target == search;
  let menu_is_active = menuSrch.classList.contains('open');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenuSrch();
  }
})


