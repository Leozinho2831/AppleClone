const navBarMobile = document.querySelector('.header__mobile');
const navBarScreen = document.querySelector('.home__header');

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

function inputVisibleScreen(){
    navBarScreen.classList.toggle('openInputScreen');
};