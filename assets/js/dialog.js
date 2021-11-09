import dialogPolyfill from 'dialog-polyfill'; // Get dialog polyfill cuz Safari and FF does not support it.
// Register popup with polyfill.
const registerPopup = (popupSelector = '.onboarding__popup') => {
	// Get our dialog element.
	const dialog = document.querySelector(popupSelector);
	// Register it with polyfill.
	dialogPolyfill.registerDialog(dialog); // Now dialog always acts like a native <dialog>.
	// Return our dialog element.
	return dialog;
}
// Handle onboarding.
export const handleOnboardingPopup = () => {
	// Get all onboarding btns.
	const showBtns = document.querySelectorAll('.btn--figma');
	const closeBtns = document.querySelectorAll('.popup__close');
	// Register popup and get the element.
	const onboardingPopup = registerPopup();
	// Attach open event on all figma buttons.
	showBtns.forEach(showBtn => showBtn.addEventListener('click', onboardingPopup.showModal));
	// Attach close event.
	closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', onboardingPopup.close));
}

