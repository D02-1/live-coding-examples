// Book ist ein sogenannter consumer component, mit dem wir auf den provider wert zugreifen wollen.
// Der provider "Provided", also "Versorgt" den Consumer, also den "Verbraucher" mit den gewünschten daten.
import { useContext } from "react";
import { CurrencyContext } from "../../CurrencyContext";

const Book = ({ item }) =>
{
    // innerhalb unseres hooks geben wir den gewünschten context an.
    const currency = useContext(CurrencyContext);

    return(
        // Das ganze geht auch ohne hook, mit einem komponenten, mit dem wir den inhalt umschliessen: <CurrencyContext.Consumer></CurrencyContext.Consumer>
        <li className="Book">
            <b>{ item.title } ({ item.topic })</b>
            <span>{ (item.price * currency.currency.conversion).toFixed(2) } { currency.currency.type }</span>
            <br />
            <img src={ item.cover } alt="test" />
            <p>
                by { item.author }
            </p>
        </li>
    )
}

export default Book;
