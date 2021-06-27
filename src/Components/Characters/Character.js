import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { CharacterContext } from "../../context/Context";

const Character = () => {
    const { charId } = useContext(CharacterContext);

    let charApiURL = 'https://rickandmortyapi.com/api/character/';
    const { data, isPending, error } = useFetch(charApiURL + charId);

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading data...</div>}
            {!isPending && <div className='character-details'>
                <img src={data.image} alt={data.name} />
                <h3>{data.name}</h3>
                <div>Status:{data.status === 'Alive' ? '😀' : data.status === 'Dead' ? '💀' : '❕'}</div>
                <div>Species:{data.species}</div>
                <div>Gender:{data.gender}</div>
                <div>Location:{data.origin.name}</div>
                <div></div>
            </div>}

        </div>
    );
}

export default Character;