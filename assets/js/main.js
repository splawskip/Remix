// Load vendor module first.
import Swup from 'swup';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';
// Load our local modules.
import { handleThemeSwitch } from './theme-switch.js';
import { handleOnboardingPopup } from './dialog.js';
import { handleHamburgerMenu } from './hamburger.js';
// Setup the Swup.
const swup = new Swup({
	plugins: [
		new SwupA11yPlugin(
			{
				contentSelector: '.popup__step',
				headingSelector: 'h6',
			}

		),
		new SwupPreloadPlugin()
	]
});
// Get hamburger toggle.
const hamburger = document.querySelector('button.hamburger');
// Execute the app.
handleThemeSwitch();
handleOnboardingPopup();
hamburger.addEventListener('click', handleHamburgerMenu);
