import { handleThemeSwitch } from './theme-switch.js';
import { handleOnboardingPopup } from './dialog.js';
import Swup from 'swup';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';
handleThemeSwitch();
handleOnboardingPopup();

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

