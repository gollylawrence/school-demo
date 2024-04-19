import React, { useState } from "react";
import Homepage from "./pages/Search";
import "./App.css";
import { AnimalSanctuary } from "./pages/AnimalSanctuary";

function App() {
    const [location, setLocation] = useState('')
    const [selectedAnimal, setSelectedAnimal] = useState<string | undefined>(undefined);

    return (
        <div className="App">
            <Homepage location={location} setLocation={setLocation} setSelectedAnimal={setSelectedAnimal} />
            <AnimalSanctuary location={location} selectedAnimal={selectedAnimal} setSelectedAnimal={setSelectedAnimal}/>
        </div>
    );
}

export default App;