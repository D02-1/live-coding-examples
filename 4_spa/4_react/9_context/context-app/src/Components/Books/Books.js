import { Book } from './../';

const Books = ({ list }) =>
{
    return(
        <ul className="Books">
            {
                list.map((book) =>
                {
                    return <Book key={ book.id } item={ book } />
                })
            }
        </ul>
    )
}

export default Books;
