import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import CharacterList from "./CharacterList";
import Character from './Character';
import { CharacterContext } from "../../context/Context";

const Characters = () => {
    const [charId, setCharId] = useState(1);
    const { data, isPending, error } = useFetch('https://rickandmortyapi.com/api/character');

    return (
        <CharacterContext.Provider value={{ charId, setCharId }}>
            <div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading data...</div>}
                {!isPending && <div className="characters-holder">
                    <CharacterList characters={data.results} />
                    <Character />
                </div>}
            </div>
        </CharacterContext.Provider>
    );
}

export default Characters;