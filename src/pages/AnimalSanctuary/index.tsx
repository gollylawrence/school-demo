import React, { useState } from "react";
import "./styles.css"
import AnimalGlossary from "./AnimalGlossary";

type Props = {
  location: string,
  selectedAnimal?: string,
  setSelectedAnimal: (selectedAnimal?: string) => void
}

export const AnimalSanctuary = ({ location, selectedAnimal, setSelectedAnimal }: Props) => {

  // Function to handle selecting an animal
  const handleAnimalSelect = (animal: string) => {
    setSelectedAnimal(animal);
  }


  const activeAnimals = (location || selectedAnimal) ? AnimalGlossary.filter(photo => photo.location === location) : AnimalGlossary

  return (
    <div className="animal-sanctuary" >
      <div className="container">
        <div className="top-item">
          <div className="inner-component">
            <div className="animal-grid">
              {activeAnimals.map(({src, alt, animalKey}, index) => (
                <div key={index} className="photo">
                  <img
                  src={src}
                  alt={alt}
                  className="animal-images"
                  onClick={() => handleAnimalSelect(animalKey)}
                />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom-item">
        {selectedAnimal && (
          <div className="inner-component">
            <div className="selected-animal">
                  <div>
                    <h2>You have selected a {selectedAnimal}!</h2>
                    <p>
                        Thank you for choosing to learn more about our {selectedAnimal}s. 
                        At the Animal Sanctuary, we provide a safe and loving 
                        environment for all animals in need of a home.
                    </p>
                  </div>
            </div>
          </div>
        )} 
        </div>
      </div>
    </div>
  );
};
