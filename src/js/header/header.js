const listenerOutsideClick = (ref, callback) => {
  const handler = (event) => {
    const target = event.target;

    if (!ref || ref.contains(target)) {
      return undefined;
    }

    callback?.(event, ref);
  };

  document.addEventListener('click', handler);
  document.addEventListener('ontouchstart', handler);

  return () => {
    document.removeEventListener('click', handler);
    document.removeEventListener('touchstart', handler);
  };
}

function listeners() {
  this.burger.addEventListener('click', this.handlerOpen);
  listenerOutsideClick(this.headerMenu, this.handlerBackdropClick);
}

function toggleVerticalScroll() {

  if (this.headerMenu.classList.contains('visible')) {
    this.body.style.overflowY = 'hidden'
    return
  }

  this.body.style.overflowY = 'visible'
}

function handlerOpen() {
  this.headerMenu.classList.toggle('visible')
  this.burger.classList.toggle('active')
  this.toggleVerticalScroll()
}

function handlerClose() {
  this.headerMenu.classList.remove('visible');
  this.burger.classList.remove('active');
  this.toggleVerticalScroll();
}

function handlerBackdropClick(e) {
  if (this.headerMenu.classList.contains('visible') && (!e.target.closest('.header__mobile') && !e.target.closest('.header__menu')
  && !e.target.closest('.header-menu__top') && !e.target.closest('.header-lang__wrapper'))) {
    this.handlerClose();
  }
}

export function Header(node) {
  this.node = node;
  this.body = document.querySelector('body')
  this.burger = document.querySelector('.header__menu')
  this.headerMenu = document.querySelector('.navigationPanel')
  this.menuList = document.querySelector('.header-menu__List')
  this.lang = document.querySelectorAll('.header__lang')

  this.handlerOpen = handlerOpen.bind(this);
  this.handlerClose = handlerClose.bind(this);
  this.listeners = listeners.bind(this);
  this.handlerBackdropClick = handlerBackdropClick.bind(this);
  this.toggleVerticalScroll = toggleVerticalScroll.bind(this);
  this.listeners();
}


