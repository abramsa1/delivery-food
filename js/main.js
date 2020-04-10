const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

window.addEventListener('click', event => {
    if(modal.classList.contains('is-open') && event.target.classList.contains('modal')) {
        modal.classList.remove('is-open');
    }
})
cartButton.addEventListener('click', event => {
    modal.classList.add('is-open');
});
close.addEventListener('click', event => {
    modal.classList.remove('is-open');
});

new WOW().init();