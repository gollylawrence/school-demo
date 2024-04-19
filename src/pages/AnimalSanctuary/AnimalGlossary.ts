import dogImage from "./images/dog.jpeg";
import catImage from "./images/cat.jpeg";
import rabbitImage from "./images/rabbit.jpeg";
import georgeAndBertieImage from "./images/george_and_bertie.jpeg"

type PhotoObject = {
    src: string,
    alt: string,
    animalKey: string,
    location: string
  }

  
export default [{
    src: dogImage,
    alt: 'Dog',
    animalKey: 'dog',
    location: 'Manchester'
  },
  {
    src: catImage,
    alt: 'Cat',
    animalKey: 'cat',
    location: 'Not Manchester'
  },
  {
    src: rabbitImage,
    alt: 'Rabbit',
    animalKey: 'rabbit',
    location: 'Sheffield'
  },
  {
    src: georgeAndBertieImage,
    alt: 'George and Bertie',
    animalKey: 'George and Bertie',
    location: 'Liverpool'
  }]