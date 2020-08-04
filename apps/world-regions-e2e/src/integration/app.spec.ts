import { getGreeting, obtainRegionCountry } from '../support/app.po';

describe('WHEN: world-regions', () => {
  beforeEach(() => cy.visit('/region/:id'));
  context('WHEN: user visits Region Page', () => {
    it('THEN: should display region', () => {
      obtainRegionCountry().contains('practica-region-country', 'Countries');
    });
  });
});
