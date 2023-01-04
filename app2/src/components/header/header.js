import "./header.scss";

class Header {
    #DEFAULT_CLASS_NAME = 'app-header';

    render(text, className) {
        const header = document.createElement('header');

        header.classList.add(this.#DEFAULT_CLASS_NAME);
        if (className && typeof className === 'string') {
            header.classList.add(className);
        }

        const body = document.querySelector('body');
        body.appendChild(header);

        const h1 = document.createElement('h1');
        h1.innerHTML = text;
        header.appendChild(h1);
    }
}

export default Header;