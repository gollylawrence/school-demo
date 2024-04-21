import { AnimalSanctuary } from '../../src/pages/SelectAnAnimal/AnimalSanctuary';
import {AnimalGlossary} from '../../src/pages/SelectAnAnimal/AnimalSanctuary/AnimalGlossary';
import { mount } from 'cypress/react18';

describe('AnimalSanctuary', () => {
  it('renders the component', () => {
    mount(<AnimalSanctuary location="" selectedAnimal={undefined} setSelectedAnimal={() => {}} />);
    cy.get('.top-item').should('exist');
  });

  it('renders animal images', () => {
    mount(<AnimalSanctuary location="" selectedAnimal={undefined} setSelectedAnimal={() => {}} />);
    cy.get('.animal-images').should('have.length', AnimalGlossary.length);
  });

  it('filters animal images based on location', () => {
    const location = 'Safari';
    mount(<AnimalSanctuary location={location} selectedAnimal={undefined} setSelectedAnimal={() => {}} />);

    // Get the number of animal images for the specified location
    const expectedAnimalCount = AnimalGlossary.filter(photo => photo.location === location).length;

    // Assert that the correct number of animal images is displayed
    cy.get('.animal-images').should('have.length', expectedAnimalCount);
  });

  it('filters animal images based on selected animal', () => {
    const selectedAnimal = 'Lion';
    mount(<AnimalSanctuary location="" selectedAnimal={selectedAnimal} setSelectedAnimal={() => {}} />);

    // Get the number of animal images for the selected animal
    const expectedAnimalCount = AnimalGlossary.filter(photo => photo.animalKey === selectedAnimal).length;

    // Assert that the correct number of animal images is displayed
    cy.get('.animal-images').should('have.length', expectedAnimalCount);
  });
});