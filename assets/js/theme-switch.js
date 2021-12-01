// Get theme-switches.
const themeSwitches = document.querySelectorAll('.theme-switch__input');
// Get all elements affected by theme-switcher.
const headerImage = document.querySelector('.header__image');
// Handle the theme-switch behav.
export const handleThemeSwitch = () => {
  // Create iterator for color-scheme.
  let once = true;
  // For every theme-switch.
  themeSwitches.forEach((themeSwitch, i, array) => {
    // Cache variables.
    const currentThemeSwitch = themeSwitch;
    const otherSwitches = Array.from(array);
    // Get all other switches without the current one.
    otherSwitches.splice(i, 1);
    // Attach event listener that on change will toggle dark-theme class.
    currentThemeSwitch.addEventListener('change', () => {
      // Apply dark-theme class to the places where it is needed.
      document.documentElement.classList.toggle('dark-theme');
      headerImage.classList.toggle('dark-theme');
      // Change state of other theme-switches.
      otherSwitches.forEach((otherSwitch) => {
        // Cache variables.
        const currentOtherSwitch = otherSwitch;
        // Resolve checked attr state of other switches.
        if (currentOtherSwitch.checked) {
          currentOtherSwitch.checked = false;
        } else {
          currentOtherSwitch.checked = true;
        }
        // Returned resolved switch.
        return currentOtherSwitch;
      });
    });

    // If OS of the user prefers dark color theme simulate the change event.
    if (
      once
        && window.matchMedia
        && window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      currentThemeSwitch.dispatchEvent(new Event('change'));
      currentThemeSwitch.checked = true;
      once = false;
    }
  });
};
// Show it to the world.
export default handleThemeSwitch;
