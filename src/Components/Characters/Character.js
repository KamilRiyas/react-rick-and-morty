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
            {!isPending && <div>{data.image}</div>}
        </div>
    );
}

export default Character;