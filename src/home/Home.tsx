import './Home.css';
import Moments from '../moments/Moments';

function Home() {

    return (
        <>
            <section className='main-content'>
                <h1 className='title'>Premier Tally</h1>
                <h2 className='main-h2'>Tracking England Football Triumphs</h2>
            </section>
            <Moments />
        </>
    )
}

export default Home;