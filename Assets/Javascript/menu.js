const navBar = document.querySelector('.header__mobile');

function menuVisible(){

    if(navBar.classList.contains('openInput')){
        navBar.classList.remove('openInput');
    } else {
        navBar.classList.toggle('openMenu');
    }
    
};

function inputVisible(){
    navBar.classList.toggle('openInput');
};