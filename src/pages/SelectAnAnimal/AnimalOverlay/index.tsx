import { AnimalGlossary } from "../AnimalSanctuary/AnimalGlossary"

type Props = { selectedAnimal: string }

export const AnimalOverlay = ({ selectedAnimal } : Props) => {
    const animalDetails = AnimalGlossary.find(animal => animal.animalKey === selectedAnimal)

    return (<div className="overlay">
                <div className="overlay-content" style={{ width: '100%' }}>
                    <p style={{ textAlign: 'center', textWrap: 'wrap', fontSize: 'x-large' }}>
                        Name: {animalDetails?.name}<br/>
                        Species: {animalDetails?.species?.toUpperCase()}<br/>
                        Location: {animalDetails?.location}
                    </p>
                </div>
            </div>)
}