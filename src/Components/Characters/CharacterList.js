import React, { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { CharacterContext } from "../../context/Context";

const CharacterList = () => {
    const [characterListUrl, setCharacterListUrl] = useState('https://rickandmortyapi.com/api/character')
    const { data, isPending, error } = useFetch(characterListUrl);
    const { setCharId } = useContext(CharacterContext);

    const onSelection = (e) => {
        e.preventDefault();
        setCharId(null);
        setCharId(e.target.id);
    }

    const onFirstPageClick = () => {
        setCharacterListUrl('https://rickandmortyapi.com/api/character?page=1');
    }

    const onPrevPageClick = (url) => {
        setCharacterListUrl(url);
    }

    const onNextPageClick = (url) => {
        setCharacterListUrl(url);
    }

    const onLastPageClick = (lastPage) => {
        setCharacterListUrl('https://rickandmortyapi.com/api/character?page=' + lastPage);
    }

    return (
        <div className="names-holder">
            {error && <div>{error}</div>}
            {isPending && <div>Loading data...</div>}
            {!isPending && <div className='character-names'>
                <div className="page-icons">
                    {data.info.prev ? <div onClick={() => onFirstPageClick()}>⏮</div> : <div>⬜</div>}
                    {data.info.prev ? <div onClick={() => onPrevPageClick(data.info.prev)}>⏪</div> : <div>⬜</div>}
                    {data.info.next ? <div onClick={() => onNextPageClick(data.info.next)}>⏩</div> : <div>⬜</div>}
                    {data.info.next ? <div onClick={() => onLastPageClick(data.info.pages)}>⏭</div> : <div>⬜</div>}
                </div>
                {data.results.map(character => (
                    <div key={character.id.toString()} className='character-name'>
                        <a id={character.id} href={character.url} onClick={onSelection}>{character.name}</a>
                    </div>
                ))}
            </div>}
        </div>
    );
}

export default CharacterList;