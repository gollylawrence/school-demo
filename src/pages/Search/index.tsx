import React, { useState } from "react";
import "./styles.css"

type Props = {
    location: string, 
    setLocation: (location: string) => void
    setSelectedAnimal: (selectedAnimal?: string) => void
};

export const Homepage = ({location, setLocation, setSelectedAnimal }: Props) => {
    // State to store the user's name
    const [title, setTitle] = useState("Friend");
    const [error, setError] = useState<string>();

    // Function to handle updating the user's name
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnimal(undefined)
        setLocation(event.target.value);
    };

    const validate = (name: string) => {
        if (name.toLocaleLowerCase() === "holly") return false;

        else return true;
    };

    const handleNameSubmit = () => {
        const isValid = validate(location);

        if (isValid) {
            setTitle(location);
            setError('');
        }

        else {
            setError("I dont like that name");
        }
    };

    return (
        <div>
            {/* Welcome message with dynamic user's name */}
            <div id="welcome-message">
                Welcome to our website, {title}!
            </div>
            <div style={{ display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
            }}>
                <label htmlFor="name-input">Enter your location:</label>
                <input
                    type="text"
                    id="name-input"
                    value={location}
                    onChange={handleNameChange}
                    style={{
                        borderColor: error ? "red" : "black"
                    }}
                />
                <button onClick={handleNameSubmit}>Update</button>
            </div>
            {error && <div>
                <p style={{color: "red", display: 'flex', alignContent: 'center', justifyContent: 'center'}}>You cant put that!!</p>
            </div>}
        </div>
    );
}

export default Homepage;