/**
* @jest-environment jsdom
*/

import { getByTestId } from '@testing-library/dom';
import { router } from './index.js';
import '@testing-library/jest-dom/extend-expect';

describe('Unit Test for router', () => {
    it('Go to / should render the login page with the title "Veuillez vous connecter"', async () => {
        document.location = '/';
        document.body.innerHTML = '<div id="root"></div>';
        await router();
        expect(getByTestId(document.body, 'sign-in-form-title')).toHaveTextContent('Veuillez vous connecter');
    });

    it('Go to #/home should render the page with the title “Vos capteurs” ', async () => {
        document.location = '#/home';
        document.body.innerHTML = '<div id="root"></div>';
        await router();
        expect(getByTestId(document.body, 'home-sensors-title')).toHaveTextContent('Vos capteurs');
    });
    it('Go to #/facade-details should render the page with the title “Détails du capteur” ', async () => {
        document.location = '#/facade-details';
        document.body.innerHTML = '<div id="root"></div>';
        await router();
        expect(getByTestId(document.body, 'sensor-detail-title')).toHaveTextContent('Détails du capteur');
    });
    it('Go to /#/add-sensor should render the page with the title  “Ajout d’un nouveau capteur”', async () => {
        document.location = '/#/add-sensor';
        document.body.innerHTML = '<div id="root"></div>';
        await router();
        expect(getByTestId(document.body, 'add-sensor-title')).toHaveTextContent('Ajout d\'un nouveau capteur');
    });
});
