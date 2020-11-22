// const { default: galleryItems } = require("./gallery-items")

import galleryItems from "./gallery-items.js";

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const modalRef = document.querySelector('div.lightbox');
const btnCloseRef = document.querySelector('button[data-action="close-lightbox"]');
const imageModalRef = document.querySelector('.lightbox__image');
const overlayRef = document.querySelector('.lightbox__overlay');


galleryItems.forEach(({ preview, original, description }, index, i) => {

    const list = document.createElement('li');
    const imageElement = document.createElement('img');
    const imageLink = document.createElement('a');

    imageElement.setAttribute('src', preview);
    imageLink.setAttribute('href', original);
    imageElement.setAttribute('data-source', original);
    imageElement.setAttribute('alt', description);
    imageElement.setAttribute('data-id', index);

    galleryRef.append(list);
    list.append(imageLink);
    imageLink.append(imageElement);

    list.classList.add('gallery__item');
    imageElement.classList.add('gallery__image');
    imageLink.classList.add('gallery__link');


    galleryRef.addEventListener('click', event => {
        if (event.target.nodeName !== "IMG") {
            return;
        };
        event.preventDefault();
        modalRef.classList.add('is-open')
        imageModalRef.src = event.target.dataset.source;

    });
    overlayRef.addEventListener('click', event => {
        if (event.target.nodeName !== "DIV") {
            return;
        };
        modalRef.classList.remove('is-open');
        imageModalRef.src = ""; 
    });

    window.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
        modalRef.classList.remove('is-open');
        imageModalRef.src = "";
        };
    });

    window.addEventListener('keydown', event => {
        if (event.code === 'ArrowRight') {
            if (galleryItems[index + 1] === galleryItems.length) {    
                return;
            } e

                console.log(galleryItems[index + 1].original)
            
            // imageModalRef.src = galleryItems[index + 1].original;
        };
    });

    btnCloseRef.addEventListener('click', event => {
        modalRef.classList.remove('is-open');
        imageModalRef.src = "";
    });
});

