import React, { useContext } from "react";
import { CharacterContext } from "../../context/Context";

const CharacterList = ({ characters }) => {
    const { setCharId } = useContext(CharacterContext);

    const onSelection = (e) => {
        e.preventDefault();
        setCharId(e.target.id);
    }

    return (
        <div className='character-names'>
            {characters.map(character => (
                <div key={character.id.toString()} className='character-name'>
                    <a id={character.id} href={character.url} onClick={onSelection}>{character.name}</a>
                </div>
            ))}
            <div className="page-icons">
                <div>⏮</div> <div>⏪</div> <div>⏩</div> <div>⏭</div>
            </div>
        </div>
    );
}

export default CharacterList;