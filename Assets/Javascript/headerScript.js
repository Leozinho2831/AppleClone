const navBarMobile = document.querySelector('.header__mobile');

function menuVisible(){

    if(navBarMobile.classList.contains('openInputMobile')){
        navBarMobile.classList.remove('openInputMobile');
    } else {
        navBarMobile.classList.toggle('openMenu');
    }
    
};

function inputVisibleMobile(){
    navBarMobile.classList.toggle('openInputMobile');
};

// screen

const navBarScreen = document.querySelector('.header__screen');

function inputVisibleScreen(){
    navBarScreen.classList.toggle('openInputScreen');
};