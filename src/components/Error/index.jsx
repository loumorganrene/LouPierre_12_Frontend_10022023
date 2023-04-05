import './Error.css'
import ErrorImg from '../../assets/img/404.svg'

function Error() {

    return (
            <div className="errorMsg">
                <img src={ErrorImg} alt='404' />
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
    )
}

export default Error
