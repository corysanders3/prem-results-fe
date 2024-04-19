import './Gameboard.css';
import { getPremData } from '../util/apiCalls';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { GoalsGameLayout } from '../util/interface';
import Players from '../players/Players';

function Gameboard() {
    const [goals, setGoals] = useState<GoalsGameLayout[] | []>([]);
    const [error, setError] = useState<string>('');
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        setError('');
        if(sessionStorage.getItem('active')) {
            setActive(true);
        } 
        getPremData('premstats')
            .then(data => setGoals(data))
            .catch(err => setError(err.message))
    }, [])

    function changeActive(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setActive(true);
        sessionStorage.setItem('active', JSON.stringify(active))
    }

    return (
        <>
            <main className='main-game'>
                <h1>Who Put More in the Back of the Net?</h1>
                <h2>Rules to Play:</h2>
                <ol className='rules'>
                    <li>Two Premier League top goal scorers will appear below.</li>
                    <li>They can be from 1993 season end to 2023 season end, and will be top three in goals scored for that season.</li>
                    <li>When you are ready to guess, press <b>Select</b> on the player you think has a higher goal total for that season.</li>
                    <li>The <em>goal</em> is to keep guessing correct and see how many in a row you can get.</li>
                    <li>If the goal amount is the same, it will be considered a draw. Two new players will appear, and your total correct will remain the same.</li>
                </ol>
                { !active && <h3 className='ready'>Click <button className='ready-btn' onClick={e => changeActive(e)}>Here</button> When You're Ready!</h3> }
            </main>
            { active && <Players goals={goals} error={error}/> }
        </>
    )
}

export default Gameboard;