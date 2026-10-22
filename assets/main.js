const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-main-nav]');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu';
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    }
  });
}
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
