/**
* @jest-environment jsdom
*/

import { getByTestId } from '@testing-library/dom';
import { router } from './index.js';
import '@testing-library/jest-dom/extend-expect';

describe('Visiting the / URL', () => {
    it('Should render the login page with the title "Veuillez vous connecter"', async () => {
        document.location = '/';
        document.body.innerHTML = '<div id="root"></div>';
        await router();
        expect(getByTestId(document.body, 'sign-in-form-title')).toHaveTextContent('Veuillez vous connecter');
    });
});
