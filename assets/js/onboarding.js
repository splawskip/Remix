import { registerPopup, preventBodyScroll, allowBodyScroll } from './utils';
// Handle onboarding.
export const handleOnboardingPopup = () => {
  // Get all onboarding btns.
  const showBtns = document.querySelectorAll('.btn--figma');
  const closeBtns = document.querySelectorAll('.popup__close');
  // Register popup and get the element.
  const onboardingPopup = registerPopup('.onboarding__popup');
  // Attach open event on all figma buttons.
  showBtns.forEach((showBtn) => showBtn.addEventListener('click', (e) => {
    e.preventDefault();
    onboardingPopup.showModal();
    preventBodyScroll();
  }));
  // Attach close event.
  closeBtns.forEach((closeBtn) => closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    allowBodyScroll();
    onboardingPopup.close();
  }));
  // Allow body to scroll on escape key.
  document.addEventListener('keyup', (e) => (e.key === 'Escape' ? allowBodyScroll() : false));
};
// Spit it out.
export default handleOnboardingPopup;
