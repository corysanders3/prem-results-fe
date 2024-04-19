import './Error.css';
import { Link } from 'react-router-dom'

function Error() {

    return (
        <section className='error-section'>
            <h3>Sorry, that page does not exist.</h3>
            <h4>Try searching for a season standings or head back home with the link below.</h4>
            <Link to='/' className='back-home-btn'>Back To Home</Link>
        </section>
    )
}

export default Error;