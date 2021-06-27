import { useState } from "react";
import CharacterList from "./CharacterList";
import Character from './Character';
import { CharacterContext } from "../../context/Context";

const Characters = () => {
    const [charId, setCharId] = useState(1);

    return (
        <CharacterContext.Provider value={{ charId, setCharId }}>
            <div className="characters-holder">
                <CharacterList />
                <Character />
            </div>
        </CharacterContext.Provider>
    );
}

export default Characters;