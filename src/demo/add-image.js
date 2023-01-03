import imagetest from '../assets/ic_add.png';
import _ from 'lodash'

export default function addImage() {
    const img = document.createElement('img');
    img.alt = 'Image';
    img.width = 300;
    img.src = imagetest;

    const body = document.querySelector('body');
    body.append(img);
}