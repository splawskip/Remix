// Get theme-switches.
const themeSwitches = document.querySelectorAll('.theme-switch__input');
// Get all elements affected by theme-switcher.
const headerImage = document.querySelector('.header__image');
// Handle the theme-switch behav.
export const handleThemeSwitch = () => {
	// Do only once.
	let once = true;
	// For every theme-switch.
	themeSwitches.forEach((themeSwitch, i, array) => {
		let otherSwitches = Array.from(array);
		otherSwitches.splice(i, 1);
		// Attach event listener that on change will toggle dark-theme class.
		themeSwitch.addEventListener('change', () => {
			// Apply dark-theme class to the places where it is needed.
			document.documentElement.classList.toggle('dark-theme');
			headerImage.classList.toggle('dark-theme');
			// Change state of other theme-switches.
			otherSwitches.forEach(otherSwitch => otherSwitch.checked ? otherSwitch.checked = false : otherSwitch.checked = true);
		});

		// If OS of the user prefers dark color theme simulate the change event.
		if (once && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			themeSwitch.dispatchEvent(new Event('change'));
			themeSwitch.checked = true;
			once = false;
		}
	});
}
