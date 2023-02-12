// window.addEventListener('scroll', function(){
// 	let Y=window.scrollY
// 	if (Y>400) {
// 		document.querySelector('.h2').classList.add('tracking-in-expand-fwd');
// 	}
// 	else{
// 		document.querySelector('.h2').classList.remove('tracking-in-expand-fwd');
// 	};
// });

// 400 1300 2000 2800

let options = {
	root: document,
	rootMargin: '0px',
	threshold: .1,
};

let target = document.querySelector('.h2');

let observer = new IntersectionObserver(AddKeyframe, options);
observer.observe(target);

function AddKeyframe() {
	document.querySelector('.h2').classList.add('tracking-in-expand-fwd');
}
