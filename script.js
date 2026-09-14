
function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');

    elemento.innerHTML = '';

    arrTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);



const navLinks = document.querySelectorAll('#menu ul a.link');

navLinks.forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            const headerHeight = document.querySelector('header').offsetHeight;

            const targetPosition =
                target.offsetTop - headerHeight - 1;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

        } 

    });

});