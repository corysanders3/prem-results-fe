import './Table.css';
import { StandingsProps, PremResults, TableLayout } from '../util/interface';

function Table({ data }: TableLayout) {

    return (
        <section className='table-row'>
            <p className='rank'>{data.rank}</p>
            <p><b>{data.team}</b></p>
            <p>{data.matchesPlayed}</p>
            <p>{data.wins}</p>
            <p>{data.draws}</p>
            <p>{data.losses}</p>
            <p>{data.goalsFor}</p>
            <p>{data.goalsAgainst}</p>
            <p>{data.goalDifference}</p>
            <p><b>{data.points}</b></p>
            <p className='notes'>{data.notes}</p>
        </section>
    )
}

export default Table;