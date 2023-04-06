import { useRouteError } from "react-router-dom"
import ErrorImg from '../../assets/img/404.svg'
import './Error.scss'

/**
 * A React component that renders the error message.
 *
 * @returns { JSX.Element } The JSX element for the error message.
 */
export default function ErrorPage() {
    
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page" className="errorMsg">
            <img src={ErrorImg} alt='404' />
            <p>Oups, cette page n'existe pas.</p>
        </div>
    )
}
