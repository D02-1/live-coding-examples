
const Item = ({ item }) => {
    return(
        <li key={ item.id }>
            <h3>
                {item.title}
            </h3>
            <p>
                { item.body }
            </p>
        </li>
    )
}

export default Item;
