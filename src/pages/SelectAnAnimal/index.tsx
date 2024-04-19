import { useState } from "react";
import { AnimalSanctuary } from "./AnimalSanctuary";
import Search from "./Search";

export const SelectAnAnimal = () => {
    const [location, setLocation] = useState('')
    const [selectedAnimal, setSelectedAnimal] = useState<string | undefined>(undefined);

    return (
        <div style={{
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center' 
        }}>
            <Search location={location} setLocation={setLocation} setSelectedAnimal={setSelectedAnimal} />
            <AnimalSanctuary location={location} selectedAnimal={selectedAnimal} setSelectedAnimal={setSelectedAnimal}/>
        </div>
    );
}