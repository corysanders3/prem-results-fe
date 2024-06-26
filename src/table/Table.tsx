import './Table.css';
import { TableLayout } from '../util/interface';

function Table({ data, year }: TableLayout) {


    return (
        <section className='table-row'>
            <p className='rank'>{data.rank}</p>
            <p><b>{data.team} { year && `(${data.seasonEndYear})**`}</b></p>
            <p className='clear'>{data.matchesPlayed}</p>
            <p className='clear-two'>{data.wins}</p>
            <p className='clear-two'>{data.draws}</p>
            <p className='clear-two'>{data.losses}</p>
            <p className='clear'>{data.goalsFor}</p>
            <p className='clear'>{data.goalsAgainst}</p>
            <p className='clear-two'>{data.goalDifference}</p>
            <p><b>{data.points}</b></p>
            <p className='notes'>{data.notes}</p>
        </section>
    )
}

export default Table;