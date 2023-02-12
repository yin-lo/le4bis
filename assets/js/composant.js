
// animation sur les titres
const animatedTitleElts = document.querySelectorAll('.js-animated-title');

const addKeyframe = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('tracking-in-expand-fwd');
		}
	});
}

const observer = new IntersectionObserver(addKeyframe);
for (const animatedTitleElt of animatedTitleElts) {
	observer.observe(animatedTitleElt);
}


// constantes nommées pour le menu
const headerElt = document.querySelector('header');
const megaMenuElt = document.querySelector('.megamenu');
const navItemElts = document.querySelectorAll('.nav li');
const megaColElts = document.querySelectorAll('.megamenu--column');
const burgerElt = document.querySelector('.nav--burger');
const navUlElt = document.querySelector('.nav .nav--ul');
const navLienElt = document.querySelector('.nav--lien');
const megamenuColumnElt = document.querySelector('.megamenu--column');
const lienElts = document.querySelectorAll('.nav--lien');


if (window.innerWidth > 1000) {
	// pr laisser le menu ouvert au survol de la souris
	headerElt.addEventListener('mouseenter', () => {
		megaMenuElt.style.opacity = 1;
		headerElt.style.maxHeight = '800rem';
	});
	
	// Quand la souris quitte le header (megamenu inclu)
	headerElt.addEventListener('mouseleave', () => {
		megaMenuElt.style.opacity = null;
		headerElt.style.maxHeight = null;
	});
}

if (window.innerWidth <= 1000) {
	// On boucle sur la navigation principale
	for (let i = 0; i < navItemElts.length; i = i + 1) {
		const navItemElt = navItemElts[i];
		const megaColElt = megaColElts[i];

		// On bouge la colonne de megamenu dans l'élément de navigation principale
		navItemElt.appendChild(megaColElt);

		const nextElt = navItemElt.querySelector('.next');
		const backElt = navItemElt.querySelector('.back');

		nextElt.addEventListener('click', () => {
			megaColElt.style.display = 'flex';
		});

		backElt.addEventListener('click', () => {
			megaColElt.style.display = null;
		});
	}

	// pour transformer le burger en croix
	burgerElt.addEventListener('click', () => {
		if (burgerElt.classList.toggle('is-open')) {
			navUlElt.style.display = 'flex';
		} else {
			navUlElt.style.display = 'none';
		}
	});
}
