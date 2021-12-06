import dialogPolyfill from 'dialog-polyfill'; // Get dialog polyfill cuz Safari and FF does not support it.
// Get body.
const { body } = document;
// Register dialog with polyfill.
export const registerPopup = (popupSelector = 'dialog') => {
  // Get our dialog element.
  const dialog = document.querySelector(popupSelector);
  // Register it with polyfill.
  dialogPolyfill.registerDialog(dialog); // Now dialog always acts like a native <dialog>.
  // Return our dialog element.
  return dialog;
};
// Open dialog.
export const preventBodyScroll = () => {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};
// Close dialog;
export const allowBodyScroll = () => {
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.preventBodyScrill = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};
