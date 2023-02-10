


document.querySelector('.nav').addEventListener('mouseenter', () => {
    document.querySelector('.megamenu').style.opacity = 1;
    // document.querySelector('.megamenu').style.transform= translateY(0%);
});

document.querySelector('.megamenu').addEventListener('mouseleave', () => {
    document.querySelector('.megamenu').style.opacity = 0;
});



if (screen.width < 1000) {
    const navItems = document.querySelectorAll('.nav li');
    const megaCols = document.querySelectorAll('.megamenu--colunm');
    console.log(megaCols.length);

    for (let i = 0; i < navItems.length; i = i + 1) {
        navItems[i].appendChild(megaCols[i]);
    }

}

document.querySelector('.nav--burger').addEventListener('click', () => {
    document.querySelector('.nav .nav--ul').style.display = "block";

});



let liens = document.querySelectorAll('.nav--lien');

for (let i = 0; i < liens.length; i = i + 1) {
    document.querySelectorAll('.nav--lien')[i].addEventListener('click', function () {

        this.nextSibling.style.display = 'block';
        this.style.display = 'none';

    });
}