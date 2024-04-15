import './Nav.css';
import { NavLink } from 'react-router-dom';
import premLogo from '../images/england-premier-league.jpeg';

function Nav() {

    return (
        <header className='nav'>
            <img className='prem-logo' src={premLogo} alt='Premier League Logo'/>
            <div className ='nav-links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/goalsgame'>Goals Game</NavLink>
            </div>
        </header>
    )
}

export default Nav;