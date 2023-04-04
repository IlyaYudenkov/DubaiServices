let visibleBurger = document.querySelector('.right__burger');
let invisibleBurger = document.querySelector('.banner__burger');
//функции позволяют открывать и скрывать скрытое меню и менять иконку бургера через data-trigger 
showHiddenMenu = () => {
        document.querySelector('.header__invisible').style.display = 'block';
        document.body.style.overflow = 'hidden';
}
closeHiddenMenu = () => {
    document.querySelector('.header__invisible').style.display = 'none';
    document.body.style.overflow = 'visible';
}
visibleBurger.addEventListener('click', showHiddenMenu)
invisibleBurger.addEventListener('click', closeHiddenMenu)

//функция для смены языка
langRu = (event) => {
    if(event.target.parentNode.childNodes[1].classList.contains('_active')){
      document.querySelectorAll('.lang__en').forEach
      (el => el.classList.remove('_active'))
      document.querySelectorAll('.lang__ru').forEach
      (el => el.classList.add('_active'))
    }
}
langEn = (event) => {
  if(event.target.parentNode.childNodes[3].classList.contains('_active')){
    document.querySelectorAll('.lang__ru').forEach
    (el => el.classList.remove('_active'))
    document.querySelectorAll('.lang__en').forEach
    (el => el.classList.add('_active'))
  }
}
document.body.addEventListener('click', (event) => { 
    if(event.target.classList.contains('lang__ru')){
    langRu(event);
   /* translateRu();*/
  }
  });
  document.body.addEventListener('click', (event) => { 
    if(event.target.classList.contains('lang__en')){
    langEn(event)
  /*  translateEn();*/
  }
  });
  
//функция позволяет открывать скрытые submenu конкретного пункта через data-trigger и this
function openCloseSubmenu (event){
    let mainMenu = event.target.parentNode.parentNode;
    let submenu =  event.target.parentNode.parentNode.childNodes[3];
      if(mainMenu.dataset.trigger == 'true'){
        this.querySelector('div:last-child').style.transform = 'rotate(0deg)';
        submenu.style.display = 'block';
        mainMenu.dataset.trigger = 'false';
      }
      else if(mainMenu.dataset.trigger == 'false'){
          this.querySelector('div:last-child').style.transform = 'rotate(180deg)';
          submenu.style.display = 'none';
          mainMenu.dataset.trigger = 'true'; 
      }
  }
  
  document.querySelector('.buy__box').addEventListener('click', openCloseSubmenu);
  document.querySelector('.blog__box').addEventListener('click', openCloseSubmenu);
  document.querySelector('.about__box').addEventListener('click', openCloseSubmenu);
  document.querySelector('.contact__box').addEventListener('click', openCloseSubmenu);

//footer
function openCloseSubmenuFooter (event){
  let mainMenuFooter = event.target.parentNode.parentNode;
  let subMenuFooter = event.target.parentNode.parentNode.childNodes[3];
  if(mainMenuFooter.dataset.trigger == 'true'){
    subMenuFooter.style.display = 'block';
    mainMenuFooter.dataset.trigger = 'false';
  }
  else if(mainMenuFooter.dataset.trigger == 'false'){
    subMenuFooter.style.display = 'none';
    mainMenuFooter.dataset.trigger = 'true';
  }
}
if(screen.width < 1919){
  document.querySelector('.contextMenu__buy').addEventListener('click', openCloseSubmenuFooter)
  document.querySelector('.contextMenu__services').addEventListener('click', openCloseSubmenuFooter)
  document.querySelector('.contextMenu__information').addEventListener('click', openCloseSubmenuFooter)
  document.querySelector('.contextMenu__about').addEventListener('click', openCloseSubmenuFooter)
}