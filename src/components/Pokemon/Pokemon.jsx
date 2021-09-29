const Pokemon = ({ pokemon }) => {
    return (
        <li className="list__item">
            { pokemon.name }
            <img src={`${pokemon.sprites.front_default}`} alt="" />
        </li>
    )
}

export default Pokemon;