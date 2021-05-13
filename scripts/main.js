const profile = document.querySelector('.header__profile');
const profileMenu = document.querySelector('.profile-menu');

profile.addEventListener('click', e => {
  if (!e.target.closest('.profile-menu__link'))
  profile.classList.toggle('active');
})

document.addEventListener('click', e => {
  if (!e.target.closest('.header__profile')) {
    profile.classList.remove('active');
  }
});