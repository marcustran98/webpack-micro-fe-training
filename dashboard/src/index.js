
import NavigationBar from './components/navigation-bar/navigation-bar.js';

const navigationItems = [
    {
        url: '/app1',
        title: 'App One'
    },
    {
        url: '/app2',
        title: 'App Two'
    }
];

function render() {
    const navigationBar = new NavigationBar();
    navigationBar.render(navigationItems);

    const url = window.location.pathname;

    if (url === '/app1') {
        import('AppOne/App')
            .then(module => {
                const appOne = module.default;
                const app = new appOne();
                app.render();
            });
    } else if (url === '/app2') {
        import('AppTwo/App')
            .then(module => {
                const appTwo = module.default;
                const app = new appTwo();
                app.render();
            });
    }
}

render();