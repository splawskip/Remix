// Handle hamburger behav.
export const handleHamburgerMenu = e => {
	e.currentTarget.classList.toggle('hamburger--active');
	const mobileNav = document.querySelector('.navigation--mobile');
	mobileNav.classList.toggle('navigation--active');
};
