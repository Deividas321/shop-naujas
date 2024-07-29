import { PageContact } from "./PageContact.js";
import { PageHome } from "./PageHome.js";
import { PageServices } from "./PageServices.js";
import { PageTeam } from "./PageTeam.js";

export class Layout {
    constructor() {
        this.render();
    }

    header() {
        const HTML = `
            <header class="container main-header">
                <div class="row">
                    <div class="col-12 main-header-content">
                        <img class="logo" src="./img/logo.png" alt="Logo">
                        <nav class="hidden visible-sm-flex main-nav">
                            <button class="link" data-page="home">Home</button>
                            <button class="link" data-page="services">Services</button>
                            <button class="link" data-page="team">Team</button>
                            <button class="link" data-page="contact">Contact us</button>
                        </nav>
                    </div>
                </div>
            </header>`;
        return HTML;
    }

    headerEvents() {
        const buttonsDOM = document.querySelectorAll('.main-header-content button');

        for (const buttonDOM of buttonsDOM) {
            buttonDOM.addEventListener('click', () => {
                const page = buttonDOM.getAttribute('data-page');
                this.loadPage(page);
            });
        }
    }

    loadPage(page) {
        let pageObject;
        switch (page) {
            case 'home':
                pageObject = new PageHome();
                break;
            case 'services':
                pageObject = new PageServices();
                break;
            case 'team':
                pageObject = new PageTeam();
                break;
            case 'contact':
                pageObject = new PageContact();
                break;
        }

        const mainDOM = document.querySelector('main');
        if (mainDOM) {
            mainDOM.innerHTML = pageObject.render();
        }
    }

    main() {
        const pageObject = new PageHome();
        const HTML = `
            <main class="container">
                ${pageObject.render()}
            </main>`;
        return HTML;
    }

    footer() {
        const HTML = '<footer class="container">&copy; Copyright 2024</footer>';
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);

        this.headerEvents();
    }
}