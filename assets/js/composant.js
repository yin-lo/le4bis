// // window.addEventListener('scroll', function(){
// // 	let Y=window.scrollY
// // 	if (Y>400) {
// // 		document.querySelector('.h2').classList.add('tracking-in-expand-fwd');
// // 	}
// // 	else{
// // 		document.querySelector('.h2').classList.remove('tracking-in-expand-fwd');
// // 	};
// // });

// // 400 1300 2000 2800

// let options = {
// 	root: document,
// 	rootMargin: '0px',
// 	threshold: .1,
// };

// let target = document.querySelector('.h2');

// let observer = new IntersectionObserver(AddKeyframe, options);
// observer.observe(target);

// function AddKeyframe() {
// 	document.querySelector('.h2').classList.add('tracking-in-expand-fwd');
// }

const headerElt = document.querySelector('header');
const megaMenuElt = document.querySelector('.megamenu');

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

if (window.innerWidth < 1000) {
	const navItems = document.querySelectorAll('.nav li');
	const megaCols = document.querySelectorAll('.megamenu--colunm');
	console.log(megaCols.length);

	for (let i = 0; i < navItems.length; i = i + 1) {
		navItems[i].appendChild(megaCols[i]);
	}
}

document.querySelector('.nav--burger').addEventListener('click', () => {
	const navUL = document.querySelector('.nav .nav--ul');
	if (navUL.style.display === 'block') {
		navUL.style.display = 'none';
	} else {
		navUL.style.display = 'block';
	}
});

const liens = document.querySelectorAll('.nav--lien');

for (let i = 0; i < liens.length; i = i + 1) {
	liens[i].addEventListener('click', function () {
		this.nextSibling.style.display = 'block';
		this.style.display = 'none';
	});
}

const back = document.querySelector('.back');
const navLien = document.querySelector('.nav--lien');
const megamenuColunm = document.querySelector('.megamenu--colunm');

back.addEventListener('click', function () {
	navLien.style.display = 'block';
	megamenuColunm.style.display = 'none';
});
