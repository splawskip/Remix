import registerPopup from './dialog'; // Get dialog polyfill cuz Safari and FF does not support it.

// Handle onboarding.
export const handleOnboardingPopup = () => {
  // Get all onboarding btns.
  const showBtns = document.querySelectorAll('.btn--figma');
  const closeBtns = document.querySelectorAll('.popup__close');
  // Register popup and get the element.
  const onboardingPopup = registerPopup('.onboarding__popup');
  // Attach open event on all figma buttons.
  showBtns.forEach((showBtn) => showBtn.addEventListener('click', onboardingPopup.showModal));
  // Attach close event.
  closeBtns.forEach((closeBtn) => closeBtn.addEventListener('click', onboardingPopup.close));
};
// Spit it out.
export default handleOnboardingPopup;
