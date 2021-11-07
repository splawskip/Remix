import dialogPolyfill from 'dialog-polyfill'; // Get dialog polyfill cuz Safari and FF does not support it.

// Get all onboarding btns.
const onboardingBtns = document.querySelectorAll('.btn--figma');

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
export const handleOnboarding = () => {
	// Grab our popup.
	const onboardingPopup = registerPopup();
	//
	onboardingBtns.forEach(onboardingBtn => {
		onboardingBtn.addEventListener('click', onboardingPopup.showModal);
	});
}

