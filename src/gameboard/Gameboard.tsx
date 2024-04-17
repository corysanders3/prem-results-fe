import './Gameboard.css';
import { getPremData } from '../util/apiCalls';
import { useState, useEffect } from 'react';
import { GoalsGameLayout } from '../util/interface';
import Players from '../players/Players';

function Gameboard() {
    const [goals, setGoals] = useState<GoalsGameLayout[] | []>([]);
    const [error, setError] = useState<string>('');
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        getPremData('premstats')
            .then(data => setGoals(data))
            .catch(err => setError(err))
    }, [])

    function changeActive(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setActive(true);
    }

    return (
        <>
            <main className='main-game'>
                <h2>Who Put More in the Back of the Net?</h2>
                <h3>Rules to Play:</h3>
                <ol>
                    <li>Two Premier League top goal scorers will appear below.</li>
                    <li>They can be from 1993 season end to 2023 season end, and will be top three in goals scored for that season.</li>
                    <li>When you are ready to guess, press <b>Select</b> on the player you think has a higher goal total for that season.</li>
                    <li>The <em>goal</em> is to keep guessing correct and see how many in a row you can get.</li>
                    <li>If the goal amount is the same, it will be considered a draw. Two new players will appear, and your total correct will remain the same.</li>
                </ol>
                { !active && <h4 className='ready'>Click <button className='ready-btn' onClick={e => changeActive(e)}>Here</button> When You're Ready!</h4> }
            </main>
            { active && <Players goals={goals}/> } 
        </>
    )
}

export default Gameboard;