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

// let worlds = document.querySelectorAll('.worlds-grid-item');

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

function showRooms(anything) {
  document.querySelector('.rooms-textBox').value = anything;
}

let dropDownRooms = document.querySelector('.rooms-dropdown');

if(dropDownRooms) {
  dropDownRooms.onclick = function() {
    dropDownRooms.classList.toggle('active')
  };
}

// Изменение кнопки копирования приглашающей ссылки

let copyBtns = document.querySelectorAll('.link-copy span');

for (i=0; i<copyBtns.length; i++) {
  copyBtn = copyBtns[i];
  copyBtn.addEventListener('click', function(e) {
    e.target.innerHTML = "Link copied!"
    e.target.closest('.btn').classList.add('copied');
    e.preventDefault();
  })
}

// Изменение кнопки запрета приглашающей ссылки

let disableBtns = document.querySelectorAll('.link-disable span');

for (i=0; i<disableBtns.length; i++) {
  disableBtn = disableBtns[i];
  disableBtn.addEventListener('click', function(e) {
    e.target.innerHTML = "Link disabled!"
    e.target.closest('.btn').classList.add('disabled');
    e.preventDefault();
  })
}

// POPUPS

let closePopupIcons = document.querySelectorAll('.close-popup');

if (closePopupIcons.length>0){
  for (i=0;i<closePopupIcons.length;i++){
    closePopupIcon = closePopupIcons[i];
    closePopupIcon.addEventListener('click', function(e){
      e.target.closest('.popup').classList.remove('open');
      e.target.closest('.popup-body').classList.remove('open');
      body.classList.remove('lock');
      e.preventDefault();
    })
  }
};

let openPopupBtns = document.querySelectorAll('.open-popup');
let popups = document.querySelectorAll('.popup');
let body = document.querySelector('body');

if(openPopupBtns.length>0){
  for(i=0;i<openPopupBtns.length;i++){
    openPopupBtn = openPopupBtns[i];
    openPopupBtn.addEventListener('click', function(e){
      let popupName = e.target.getAttribute('href').replace('#','');
      console.log(popupName)
      let currentPopup = document.getElementById(popupName);
      console.log(currentPopup)
      document.getElementById(popupName).classList.add('open');
      currentPopup.closest('.popup').classList.add('open');
      body.classList.add('lock');
      e.preventDefault();
    })
  }
}

// Master settings

let masterBtns = document.querySelectorAll('.master-settings');

for (i=0; i < masterBtns.length; i++) {
  masterBtn = masterBtns[i];
  masterBtn.addEventListener('click', function(e) {
    e.target.classList.toggle('active');
    let masterContents = document.querySelectorAll('.master-buttons');
    for (i=0; i < masterBtns.length; i++) {
      masterContent = masterContents[i];
      masterContent.classList.toggle('active');
    }
  })
}

// Включение/отключение камеры/микрофона

let microOff = document.querySelectorAll('.micro');

if (microOff.length > 0) {
  for (i=0;i<microOff.length;i++) {
    microOffBtn = microOff[i];
    microOffBtn.addEventListener('click', function(e){
      e.target.closest('.micro').classList.toggle('off');
    })
  }
}

let cameraOff = document.querySelectorAll('.camera');

if (cameraOff.length > 0) {
  for (i=0;i<cameraOff.length;i++) {
    cameraOffBtn = cameraOff[i];
    cameraOffBtn.addEventListener('click', function(e){
      e.target.closest('.camera').classList.toggle('off');
    })
  }
}

// Скрытие интерфейса внутри мира

let hideInterface = document.querySelector('.hide');

if(hideInterface) {
  hideInterface.addEventListener('click', function(){
    hideInterface.classList.toggle('hidden')
    let interfaceCamera = document.querySelector('.interface-camera');
    interfaceCamera.classList.toggle('hidden');
    let interfaceChat = document.querySelector('.interface-chat');
    interfaceChat.classList.toggle('hidden');
  })
}


// Слайдер главной страницы

let menu = ['Templates', "Worlds", 'NFTs']
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  initialSlide: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
  }
}

});


// Управление спойлерами лицензий

let spoilersTitle = document.querySelectorAll('.spoiler-title');


if(spoilersTitle.length>0) {
  for(i=0;i<spoilersTitle.length;i++) {
    spoilerTitle = spoilersTitle[i];
    spoilerTitle.addEventListener('click',function(e) {
      e.target.classList.toggle('active');
    })
  }
}