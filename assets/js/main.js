// Get theme switch element.
const themeSwitch = document.querySelector('#theme-switch__input');
const headerImage = document.querySelector('.header__image');
// On state change toggle the dark-theme class.
themeSwitch.addEventListener('change', () => {
	document.body.classList.toggle('dark-theme');
	headerImage.classList.toggle('dark-theme');
});
// If OS of the user prefers dark color theme simulate the change event.
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	themeSwitch.dispatchEvent(new Event('change'));
	themeSwitch.checked = true;
}
