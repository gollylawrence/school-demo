import React from 'react'
import { AnimalSanctuary } from './index'

describe('<AnimalSanctuary />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AnimalSanctuary />)
  })
})