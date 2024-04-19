import { AnimalSanctuary } from '../../src/pages/SelectAnAnimal/AnimalSanctuary';
import AnimalGlossary from '../../src/pages/SelectAnAnimal/AnimalSanctuary/AnimalGlossary';
import { mount } from 'cypress/react18';

describe('AnimalSanctuary', () => {
  it('renders the component', () => {
    mount(<AnimalSanctuary location="" selectedAnimal={undefined} setSelectedAnimal={() => {}} />);
    cy.get('.animal-sanctuary').should('exist');
  });

  it('renders animal images', () => {
    mount(<AnimalSanctuary location="" selectedAnimal={undefined} setSelectedAnimal={() => {}} />);
    cy.get('.animal-images').should('have.length', AnimalGlossary.length);
  });

  it('selects an animal and displays the selected animal information', () => {
    const selectedAnimal = 'Lion';
    cy.viewport(1024, 768); // Set the viewport size
    const setSelectedAnimal = cy.stub();
    mount(<AnimalSanctuary location="" selectedAnimal={undefined} setSelectedAnimal={setSelectedAnimal} />);

    // Click on the image of the animal you want to select
    cy.get('.animal-images').contains('alt', selectedAnimal).click();

    // Assert that the selected animal information is displayed
    cy.get('.selected-animal').should('contain.text', `You have selected a ${selectedAnimal}!`);
    cy.get('.selected-animal').should('contain.text', `Thank you for choosing to learn more about our ${selectedAnimal}s.`);
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