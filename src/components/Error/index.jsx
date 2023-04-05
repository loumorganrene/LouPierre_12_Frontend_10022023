import { useRouteError } from "react-router-dom";
import ErrorImg from '../../assets/img/404.svg'
import './Error.css'

/**
 * Component for showing error message.
 * @component
 */
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="errorMsg">
            <img src={ErrorImg} alt='404' />
            <p>Oups, cette page n'existe pas.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
