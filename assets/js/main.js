// Load vendor module first.
import Swup from 'swup';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';
// Load our local modules.
import { handleThemeSwitch } from './theme-switch';
import { handleOnboardingPopup } from './dialog';
import { handleHamburgerMenu } from './hamburger';
// Get hamburger toggle.
const hamburger = document.querySelector('button.hamburger');
// Execute the app.
const swup = new Swup( // eslint-disable-line
  {
    plugins: [
      new SwupA11yPlugin(
        {
          contentSelector: '.popup__step',
          headingSelector: 'h6',
        },

      ),
      new SwupPreloadPlugin(),
    ],
  },
);
handleThemeSwitch();
handleOnboardingPopup();
hamburger.addEventListener('click', handleHamburgerMenu);
