import './About.css';
import { Link } from 'react-router-dom';
import pyramid from '../images/english_football_pyramid.jpeg';

function About() {

    return (
        <>
            <section className='main-content'>
                <h1>Premier Tally</h1>
                <h2 className='main-h2'>Tracking England Football Triumphs</h2>
            </section>
            <main className='main-about'>
                <p className='about-p'>The English Premier League is the top football league in England. It includes 20 clubs across England. Each season, the bottom three clubs according to total points are relegated to the league below, and the top three clubs from the league below get promoted to the Premier League. This relegation system keeps the league competitive, and gives all English clubs the opportunity to 'climb' the English football pyramid to get to the Premier League. There are 38 league matches in a season, having one home and away game against every other club. The Premier League is the most watched league in the world, broadcasting to 800 million homes in 188 countries.</p>
                <div className='pyramid-container'>
                    <img className='pyramid-img' src={pyramid} alt='Pyramid showing the tiers of English Football' />
                </div>
                <h4 className='game-blurb'>Like playing games?? Love the Premier League?? Test your knowledge by playing our Premier League <Link to='/goalsgame' className='game-footer'>Goals Game</Link> here, or the Game link at the top of the page.</h4>
            </main>
        </>
    )
}

export default About;