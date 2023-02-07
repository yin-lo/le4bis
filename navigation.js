


document.querySelector('.nav').addEventListener('mouseenter', () => {
    document.querySelector('.megamenu').style.opacity = 1;
    // document.querySelector('.megamenu').style.transform= translateY(0%);
});

document.querySelector('.megamenu').addEventListener('mouseleave', () => {
    document.querySelector('.megamenu').style.opacity = 0;
});
