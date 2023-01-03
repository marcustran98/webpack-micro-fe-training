import './button.scss';

class AppButton {
    #DEFAULT_CLASS_NAME = 'default-class';

    constructor() { }

    render(text, className = '') {
        const button = document.createElement('button');
        button.innerHTML = text;

        button.classList.add(className || this.#DEFAULT_CLASS_NAME);
        
        const body = document.querySelector('body');
        body.appendChild(button);
    }
}

export default AppButton;