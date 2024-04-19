import React from 'react'
import Search from './index'

describe('<Homepage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Search location={'Manchester'} setLocation={() => {}} setSelectedAnimal={() => {}}/>)
  })
})