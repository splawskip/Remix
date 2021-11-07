// Get theme switch element.
const themeSwitches = document.querySelectorAll('.theme-switch__input');
const headerImage = document.querySelector('.header__image');

export const handleThemeSwitch = () => {
	// Fro every switch.
	themeSwitches.forEach(themeSwitch => {
		// Attach event listener that on change will toggle dark-theme class.
		themeSwitch.addEventListener('change', () => {
			document.documentElement.classList.toggle('dark-theme');
			headerImage.classList.toggle('dark-theme');
		});
		// If OS of the user prefers dark color theme simulate the change event.
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			themeSwitch.dispatchEvent(new Event('change'));
			themeSwitch.checked = true;
		}
	});
}
