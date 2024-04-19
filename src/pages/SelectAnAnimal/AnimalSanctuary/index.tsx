import React from "react";
import "./styles.css"
import { AnimalGlossary } from "./AnimalGlossary";

type Props = {
  location: string,
  selectedAnimal?: string,
  setSelectedAnimal: (selectedAnimal?: string) => void
}

type PhotoObject = {
  src: string,
  alt: string,
  animalKey: string,
  location: string
}


export const AnimalSanctuary = ({ location, selectedAnimal, setSelectedAnimal }: Props) => {
  // Function to handle selecting an animal
  const handleAnimalSelect = (animal: string) => {
    const valueToBe = selectedAnimal ? '' : animal
    setSelectedAnimal(valueToBe);
  }

  const selectedAnimalCard = selectedAnimal ? AnimalGlossary.find(animal => animal.animalKey === selectedAnimal) : undefined
  const activeLocationAnimals = location ? AnimalGlossary.filter(photo => photo.location === location) : AnimalGlossary
  const activeAnimals: PhotoObject[] = selectedAnimalCard ? [selectedAnimalCard] : activeLocationAnimals

  return (<>
        {activeAnimals &&  <div className="top-item">
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
        </div>}
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
        </div></>
  );
};
