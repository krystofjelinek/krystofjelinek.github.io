let state = false
const menu = document.querySelector('#menu')
const body = document.querySelector('body')
const nav = document.querySelector('body > header > nav > div.navigation-links')
menu.addEventListener('click', () => {
    if (state == false) {
        nav.classList.remove('shown')
        nav.classList.add('full-width')
        state = true
    } else {
        nav.classList.add('shown')
        state = false
    }
})

const images = document.querySelectorAll('#i1, #i2, #i3, #i4, #i5, #i6, #i7, #i8');
const events = document.querySelectorAll('#i11, #i12, #i13, #i14, #i15, #i16, #i17, #i18, #i19, #i20, #i21, #i22');
let opened = false

images.forEach(image => {
    console.log('run')
    image.addEventListener('click', () => {
        openOverlay(image);
        opened = true
    });
});

events.forEach(eventa => {
    eventa.addEventListener('click', () => {
        openOverlay(eventa)
        opened = true
    })
})

const openOverlay = (image) => {
    if (opened) return;
    opened = true;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'centered');

    const cloned = image.cloneNode(true);
    cloned.classList.add('max');

    overlay.appendChild(cloned);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>';

    closeButton.addEventListener('click', () => {
        overlay.remove();
        opened = false;
    });

    overlay.addEventListener('click', () => {
        overlay.remove();
        opened = false;
    });

    overlay.appendChild(closeButton);

    document.body.appendChild(overlay);
}