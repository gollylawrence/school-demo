import React, { useState } from "react";
import dogImage from "./images/dog.jpeg";
import catImage from "./images/cat.jpeg";
import rabbitImage from "./images/rabbit.jpeg";
import "./styles.css"

export const AnimalSanctuary = () => {
  // State to store the selected animal
  const [selectedAnimal, setSelectedAnimal] = useState<string>("");

  // Function to handle selecting an animal
  const handleAnimalSelect = (animal: string) => {
    setSelectedAnimal(animal);
  }

  const photos = [{
    src: dogImage,
    alt: 'Dog',
    animalKey: 'dog'
  },
  {
    src: catImage,
    alt: 'Cat',
    animalKey: 'cat'
  },
  {
    src: rabbitImage,
    alt: 'Rabbit',
    animalKey: 'rabbit'
  }]

  return (
    <div className="animal-sanctuary">
      <h1>Welcome to the Animal Sanctuary!</h1>
      <div className="photo-grid">
      {photos.map(({src, alt, animalKey}, index) => (
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
        <div className="selected-animal">
            {selectedAnimal && (
                        <div>
                            <h2>You have selected a {selectedAnimal}!</h2>
                            <p>
                                Thank you for choosing to learn more about our {selectedAnimal}s. 
                                At the Animal Sanctuary, we provide a safe and loving 
                                environment for all animals in need of a home.
                            </p>
                        </div>
                    )} 
        </div>
    </div>
  );
};
