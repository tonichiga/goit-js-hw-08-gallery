// const { default: galleryItems } = require("./gallery-items")

import galleryItems from "./gallery-items.js";

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const modalRef = document.querySelector('div.lightbox');
const btnCloseRef = document.querySelector('button[data-action="close-lightbox"]');
const imageModalRef = document.querySelector('.lightbox__image');


galleryItems.forEach(({ preview, original, description }) => {

    const list = document.createElement('li');
    const imageElement = document.createElement('img');
    const imageLink = document.createElement('a');

    imageElement.setAttribute('src', preview);
    imageLink.setAttribute('href', original);
    imageElement.setAttribute('data-source', original)

    galleryRef.append(list);
    list.append(imageLink);
    imageLink.append(imageElement);

    list.classList.add('gallery__item');
    imageElement.classList.add('gallery__image');
    imageLink.classList.add('gallery__link');

    galleryRef.addEventListener('click', event => {
        event.preventDefault();
        modalRef.classList.add('is-open')
        imageModalRef.src = event.target.dataset.source;
    });

    btnCloseRef.addEventListener('click', event => {
        modalRef.classList.remove('is-open');
        imageModalRef.src = "";
    });
});

