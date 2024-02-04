const listenerOutsideClick = (ref, callback) => {
  const handler = (event) => {
    const target = event.target;

    if (ref instanceof NodeList && Array.from(ref).some(el => el.contains(target))) {
      return undefined;
    }

    if (ref instanceof Element && ref.contains(target)) {
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
  this.buttonsModal.forEach(button => {
    button.addEventListener('click', this.handlerOpen);
  });
  this.close.forEach(button => {
    button.addEventListener('click', this.handlerClose);
  });
  this.form.forEach(formElement => {
    formElement.addEventListener('submit', this.handlerClose);
  });
  listenerOutsideClick(this.form, this.handlerBackdropClick);
}

function toggleVerticalScroll() {

  if (this.node.classList.contains('modalw_is-open')) {
    this.body.style.overflowY = 'hidden'
    return
  }

  this.body.style.overflowY = 'visible'
}

function handlerOpen(event) {
  const isButton = event.target.classList.contains('buttonModalw');
  const isHRButton = event.target.classList.contains('button__hr');

  if (!isButton) {
    return;
  }

  if (isHRButton) {
    this.formGeneral.classList.add('d-none');
  }

  else {
    this.formHr?.classList.add('d-none');
  }

  this.node.classList.add('modalw_is-open');
  this.toggleVerticalScroll();
}

function handlerClose() {
  this.node.classList.remove('modalw_is-open');
  this.formHr?.classList.remove('d-none');
  this.formGeneral.classList.remove('d-none');
  this.toggleVerticalScroll();
}

function handlerBackdropClick(event) {
  if (this.node.classList.contains('modalw_is-open') && (!event.target.classList.contains('buttonModalw'))) {
    this.handlerClose();
  }
}

export function Modal(node) {
  this.node = node;
  this.body = document.querySelector('body')
  this.form = document.querySelectorAll('.modalwForm');
  this.formHr = node.querySelector('.formHr');
  this.formGeneral = document.querySelector('.formGeneral');
  this.buttonsModal = document.querySelectorAll('.buttonModalw');
  this.close = document.querySelectorAll('.modalw__close');
  this.handlerOpen = handlerOpen.bind(this);
  this.handlerClose = handlerClose.bind(this);
  this.listeners = listeners.bind(this);
  this.handlerBackdropClick = handlerBackdropClick.bind(this);
  this.toggleVerticalScroll = toggleVerticalScroll.bind(this);
  this.listeners();
}


