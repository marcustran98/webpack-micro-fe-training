class AppOneShared {
    render() {
        const root = document.getElementById('root');

        if (root) {

            const p = document.createElement('p');
            p.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

            const div = document.createElement("div");
            div.appendChild(p);
            div.style.width = '500px';
            div.style.height = '200px';
            div.style.padding = '15px';
            div.style.border = '1px solid black';
            div.style.display = 'flex';
            div.style.justifyContent = 'flex-star';
            div.style.alignItems = 'center';

            root.appendChild(div);


            import('AppTitle/Title').then(module => {
                const title = module.default;
                const appTitle = new title();
                appTitle.render('App One Title');
            }).catch(err => {
                console.error("import error", err);
            });
        }
    }
}

export default AppOneShared;