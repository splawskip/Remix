import dialogPolyfill from 'dialog-polyfill'; // Get dialog polyfill cuz Safari and FF does not support it.
// Register popup with polyfill.
const registerPopup = (popupSelector = 'dialog') => {
  // Get our dialog element.
  const dialog = document.querySelector(popupSelector);
  // Register it with polyfill.
  dialogPolyfill.registerDialog(dialog); // Now dialog always acts like a native <dialog>.
  // Return our dialog element.
  return dialog;
};

// Spit it out.
export default registerPopup;
