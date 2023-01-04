class Title {
    #DEFAULT_CLASS_NAME = 'app-title';

    render(text, className) {
        const h1 = document.createElement('h1');

        h1.classList.add(this.#DEFAULT_CLASS_NAME);

        if (className && typeof className === 'string') {
            h1.classList.add(className);
        }

        const body = document.querySelector('body');
        h1.innerHTML = typeof text === 'string' ? text : "Something went wrong!!!";
        body.appendChild(h1);

    }
}

export default Title;