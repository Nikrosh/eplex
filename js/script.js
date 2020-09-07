let controlToggleControl = document.querySelector('.solutions__control');
let controlToggleSales = document.querySelector('.solutions__sales');
let controlToggleShipment = document.querySelector('.solutions__shipment');
let controlToggleStock = document.querySelector('.solutions__stock');
let slideControl = document.querySelector('.solutions__slide--control');
let slideSales = document.querySelector('.solutions__slide--sales');
let slideShipment = document.querySelector('.solutions__slide--shipment');
let slideStock = document.querySelector('.solutions__slide--stock');

controlToggleControl.addEventListener('click', function (evt) {
    evt.preventDefault();

    controlToggleControl.classList.add('solutions__toggle--active');
    controlToggleSales.classList.remove('solutions__toggle--active');
    controlToggleShipment.classList.remove('solutions__toggle--active');
    controlToggleStock.classList.remove('solutions__toggle--active');
    

    slideControl.classList.add('block-flex');
    slideControl.classList.remove('block-none');

    slideSales.classList.add('block-none');
    slideSales.classList.remove('block-flex');

    slideShipment.classList.add('block-none');
    slideShipment.classList.remove('block-flex');

    slideStock.classList.add('block-none');
    slideStock.classList.remove('block-flex');

});

controlToggleSales.addEventListener('click', function (evt) {
    evt.preventDefault();

    controlToggleControl.classList.remove('solutions__toggle--active');
    controlToggleSales.classList.add('solutions__toggle--active');
    controlToggleShipment.classList.remove('solutions__toggle--active');
    controlToggleStock.classList.remove('solutions__toggle--active');

    slideControl.classList.add('block-none');
    slideControl.classList.remove('block-flex');

    slideSales.classList.add('block-flex');
    slideSales.classList.remove('block-none');

    slideShipment.classList.add('block-none');
    slideShipment.classList.remove('block-flex');

    slideStock.classList.add('block-none');
    slideStock.classList.remove('block-flex');

});

controlToggleShipment.addEventListener('click', function (evt) {
    evt.preventDefault();

    controlToggleControl.classList.remove('solutions__toggle--active');
    controlToggleSales.classList.remove('solutions__toggle--active');
    controlToggleShipment.classList.add('solutions__toggle--active');
    controlToggleStock.classList.remove('solutions__toggle--active');

    slideControl.classList.add('block-none');
    slideControl.classList.remove('block-flex');

    slideSales.classList.add('block-none');
    slideSales.classList.remove('block-flex');

    slideShipment.classList.add('block-flex');
    slideShipment.classList.remove('block-none');

    slideStock.classList.add('block-none');
    slideStock.classList.remove('block-flex');

});

controlToggleStock.addEventListener('click', function (evt) {
    evt.preventDefault();

    controlToggleControl.classList.remove('solutions__toggle--active');
    controlToggleSales.classList.remove('solutions__toggle--active');
    controlToggleShipment.classList.remove('solutions__toggle--active');
    controlToggleStock.classList.add('solutions__toggle--active');

    slideControl.classList.add('block-none');
    slideControl.classList.remove('block-flex');

    slideSales.classList.add('block-none');
    slideSales.classList.remove('block-flex');

    slideShipment.classList.add('block-none');
    slideShipment.classList.remove('block-flex');

    slideStock.classList.add('block-flex');
    slideStock.classList.remove('block-none');

});