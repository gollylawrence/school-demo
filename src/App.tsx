import React from "react";
import Homepage from "./pages/Homepage";
import "./App.css";
import { AnimalSanctuary } from "./pages/AnimalSanctuary";

function App() {
    return (
        <div className="App">
            <Homepage />
            <AnimalSanctuary />
        </div>
    );
}

export default App;