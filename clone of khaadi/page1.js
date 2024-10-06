


function bottomToggle(bool) {
  const menu = document.querySelector('.bottom-menu-nav');
  const color = document.querySelector('.js-bottom-bar');

  if (bool === 'true') {
    menu.classList.add('bottom-small-scr')
    color.classList.add('bottom-bar')
  }

  else {
    menu.classList.remove('bottom-small-scr')
    color.classList.remove('bottom-bar')
  }


}
