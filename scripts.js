document.getElementById('toggle-bag').addEventListener('click', function() {
    const shoppingBag = document.querySelector('.fas.fa-shopping-bag');
    shoppingBag.classList.toggle('visible');
    if (shoppingBag.classList.contains('visible')) {
        shoppingBag.style.transform = 'scale(1)';
    } else {
        shoppingBag.style.transform = 'scale(0)';
    }
});
