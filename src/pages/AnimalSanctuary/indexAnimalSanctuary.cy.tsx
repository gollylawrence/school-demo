import React from 'react'
import { AnimalSanctuary } from './index'

describe('Animal Sanctuary Component Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // Replace '/path/to/your/component' with the actual URL or path
  });

  it('displays animal images', () => {
    cy.get('.animal-images').should('have.length.greaterThan', 0);
  });

  it('selects an animal when image is clicked', () => {
    cy.get('.animal-images').first().click();
    cy.get('.selected-animal').should('be.visible');
  });

  it('displays correct message for selected animal', () => {
    const selectedAnimal = 'Elephant'; // Replace with the animal you expect to be selected
    cy.get('.animal-images').first().click();
    cy.get('.selected-animal').should('contain', `You have selected a ${selectedAnimal}!`);
  });

  it('displays additional information for selected animal', () => {
    cy.get('.animal-images').first().click();
    cy.get('.selected-animal').should('contain', 'Thank you for choosing to learn more');
  });
});
