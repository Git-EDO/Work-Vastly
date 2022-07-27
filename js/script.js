// NAV

// Выпадающее меню - бургер

let burger = document.querySelector('.nav__burger');
let menuList = document.querySelector('.main-drop-menu');
let body = document.querySelector('body');

const toggleMenuList = () => {
  menuList.classList.toggle('open');
  burger.classList.toggle('active');
  body.classList.toggle('lock')
}
if (burger) {
  burger.addEventListener('click', e => {
    e.stopPropagation();
  
    toggleMenuList();
  })
}

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menuList || menuList.contains(target);
  let its_hamburger = target == burger;
  let menu_is_active = menuList.classList.contains('open');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenuList();
  }
});

// POPUPS

// POPUP - Avatar

let avatarOpen = document.querySelector('.avatar-button');


// if(avatarOpen) {
//   avatarOpen.addEventListener('click', function(e) {
//     e.preventDefault();
//     let avatarPopup = document.querySelector('.popup-avatar-chng');
//     let avatarPopupBody = document.querySelector('.popup-body-avatar');
//     avatarPopup.classList.add('open');
//     avatarPopupBody.classList.add('open');
//   });
// }

function closePopup() {
  let popups = document.querySelectorAll('.popup');
  let popupsBody = document.querySelectorAll('.popup-body');

  for(i = 0; i < popups.length; i++) {
    let popup = popups[i];
    popup.classList.remove('open');
  }
  for(i = 0; i < popupsBody.length; i++) {
    let popupBody = popupsBody[i];
    popupBody.classList.remove('open');
  }
}



// Скролл страницы

let mainScroll = document.querySelector('.main-btn');

if(mainScroll){
  mainScroll.addEventListener('click', function(e) {
    e.preventDefault();
    let main = document.querySelector('.section-title');
    main.scrollIntoView({block: "start", behavior: "smooth"});
  });
}

let headerScroll = document.querySelector('.logo-link');

if(headerScroll){
  headerScroll.addEventListener('click', function(e) {
    e.preventDefault();
    let main = document.querySelector('main');
    main.scrollIntoView({block: "start", behavior: "smooth"});
  });
}

let footerScroll = document.querySelector('.footer-link');

if(footerScroll) {
  footerScroll.addEventListener('click', function(e) {
    e.preventDefault();
    let main = document.querySelector('main');
    main.scrollIntoView({block: "start", behavior: "smooth"});
  });
}

// Количество миров

let worlds = document.querySelectorAll('.worlds-grid-item');

// Управление формой регистрации

let regSwitch = document.querySelector('.register-switch');

if(regSwitch) {
  regSwitch.addEventListener('click', function(e){
    let signUpBody = document.querySelector('.register-body');
    signUpBody.classList.add('active');
    let signInBody = document.querySelector('.sign-in-body');
    signInBody.classList.add('inactive');
    let regForm =document.querySelector('.registration-form');
    regForm.classList.add('registration');
  })
}
let signSwitch = document.querySelector('.sign-in-switch');

if(signSwitch) {
  signSwitch.addEventListener('click', function(e){
    let signUpBody = document.querySelector('.register-body');
    signUpBody.classList.remove('active');
    let signInBody = document.querySelector('.sign-in-body');
    signInBody.classList.remove('inactive');
    let regForm =document.querySelector('.registration-form');
    regForm.classList.remove('registration');
  })
}

// Управление выпадающими формами настроек при входе в World

function showVideo(anything) {
  document.querySelector('.video-textBox').value = anything;
}

let dropDownVideo = document.querySelector('.video-dropdown');
if(dropDownVideo) {
  dropDownVideo.onclick = function() {
    dropDownVideo.classList.toggle('active')
  };
}

function showAudio(anything) {
  document.querySelector('.audio-textBox').value = anything;
}

let dropDownAudio = document.querySelector('.audio-dropdown');

if(dropDownAudio) {
  dropDownAudio.onclick = function() {
    dropDownAudio.classList.toggle('active')
  };
}