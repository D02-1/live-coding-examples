
const Item = ({ item }) => {
    return(
        <li key={ item.id }>
            <h2>
                {item.title}
            </h2>
            <p>
                { item.body }
            </p>
        </li>
    )
}

export default Item;
