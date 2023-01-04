import appHeader from "./components/header/header";

class AppTwoShared {
    render() {
        const header = new appHeader();

        header.render('This is App Two!', 'header-class');

        import('TitleRemote/Title').then(module => {
            const title = module.default;
            const appTitle = new title();
            appTitle.render('App Two Title');
        });
    }
}

export default AppTwoShared;