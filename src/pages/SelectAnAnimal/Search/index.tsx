import React, { ChangeEvent, FormEvent, useState } from "react";
import "./styles.css"

type Props = {
    location: string, 
    setLocation: (location: string) => void
    setSelectedAnimal: (selectedAnimal?: string) => void
};

export const Search = ({location, setLocation, setSelectedAnimal }: Props) => {
    const [error, setError] = useState<string>();
    const [inputValue, setInputValue] = useState('')

    // Function to handle updating the user's name
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedAnimal(undefined)
        setLocation('')
        setInputValue(event.target.value)
    };

    const validate = (name: string) => {
        if (name.toLocaleLowerCase() === "holly") return false;

        else return true;
    };

    const handleNameSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValid = validate(location);
        setLocation(inputValue);

        if (isValid) {
            setError('');
        }

        else {
            setError("I dont like that name");
        }
    };

    return (
        <div>
            <div id="welcome-message">
                Welcome to our website!
            </div>
            <div >
                <form onSubmit={handleNameSubmit} style={{ display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
                }}>
                    <label htmlFor="name-input">Enter your location:</label>
                    <input
                        type="text"
                        id="name-input"
                        value={inputValue}
                        onChange={handleNameChange}
                        style={{
                            borderColor: error ? "red" : "black"
                        }}
                    />
                    <button>Update</button>
                </form>
            </div>
            {error && <div>
                <p style={{color: "red", display: 'flex', alignContent: 'center', justifyContent: 'center'}}>You cant put that!!</p>
            </div>}
        </div>
    );
}

export default Search;