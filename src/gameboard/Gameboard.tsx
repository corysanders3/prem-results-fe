import './Gameboard.css';
import { getPremData } from '../util/apiCalls';
import { useState, useEffect } from 'react';
import { GoalsGameLayout } from '../util/interface';
import Players from '../players/Players';

function Gameboard() {
    const [goals, setGoals] = useState<GoalsGameLayout[] | []>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        getPremData('premstats')
            .then(data => setGoals(data))
            .catch(err => setError(err))
    }, [])

    return (
        <main>
            <Players goals={goals}/>
        </main>
    )
}

export default Gameboard;