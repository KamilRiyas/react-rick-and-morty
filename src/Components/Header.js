import { Link } from "react-router-dom";

const header = () => {
    return (
        <header>
            <div className='nav-bar'>
                <Link className='title' to='/'>Rick and Morty Fan Page</Link>
                <Link to='/characters'>Characters</Link>
                <Link to='/episodes'>Episodes</Link>
                <Link to='/locations'>Locations</Link>
            </div>
        </header>
    );
}

export default header;