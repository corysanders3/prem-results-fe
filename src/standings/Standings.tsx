import './Standings.css';
import { useParams, Link } from 'react-router-dom';
import { StandingsProps, PremResults } from '../util/interface';
import Table from '../table/Table';

function Standings({ results }: StandingsProps) {
    const club = useParams().club
    const year = useParams().year

    function filterResults() {
        if(club === 'all') {
            const filteredResults = results.filter((r) => {
                return r.seasonEndYear === parseInt(year || '')
            }).sort((a, b) => {
                return a.rank - b.rank
            })
            return showResults(filteredResults)
        } else if(year === 'all') {
            const filteredResults = results.filter((r) => {
                return r.team === club
            }).sort((a, b) => {
                return b.seasonEndYear - a.seasonEndYear
            })
            return showResults(filteredResults, year)
        } else {
            const filteredResults = results.filter((r) => {
                return r.team === club
            }).filter((f) => {
                return f.seasonEndYear === parseInt(year || '')
            })
            return showResults(filteredResults)
        }
    }

    function showResults(results: PremResults[], year?: string | undefined) {
        return results.map((data) => {
            return (
                <Table 
                    key={data.seasonEndYear + data.team}
                    year={year}
                    data={data}
                />
            )
        })
    }

    const newTable = filterResults()

    return (
        <> 
            { newTable.length ? (
                <>
                    <h3 className='year'>{ year === 'all' ? 'All Finishes' : `${year} Season End Year`}</h3>
                    <main className='league-table'>
                        <section className='table-row'>
                            <p>Rank</p>
                            <p><b>Club</b></p>
                            <p className='clear'>MP*</p>
                            <p>W*</p>
                            <p>D*</p>
                            <p>L*</p>
                            <p className='clear'>GF*</p>
                            <p className='clear'>GA*</p>
                            <p>GD*</p>
                            <p><b>Points</b></p>
                            <p className='notes'>Notes</p>
                        </section>
                        {newTable}
                    </main>
                    <section className='key'>
                        <p><b><u>Key</u></b></p>
                        <p><b>MP* : </b>Matches Played</p>
                        <p><b>W* : </b>Wins</p>
                        <p><b>D* : </b>Draws (ties)</p>
                        <p><b>L* : </b>Losses</p>
                        <p><b>GF* : </b>Goals For</p>
                        <p><b>GA* : </b>Goals Against</p>
                        <p><b>GD* : </b>Goal Difference</p>
                        <p className='year-key'><b>** : </b>Year (only applicable when searching for club only)</p>
                        <h4 className='game-blurb'>Like playing games?? Love the Premier League?? Test your knowledge by playing our Premier League <Link to='/goalsgame' className='game-footer'>Goals Game</Link> here, or the Game link at the top of the page.</h4>
                    </section>
                </>
            ) : 
                <section className='not-found'>
                    <h3>Sorry, that club did not play in the Premier League that year.</h3>
                    <h4>Try searching again, or head back home with the link below.</h4>
                    <Link to='/' className='back-home-btn'>Back To Home</Link>
                </section>
            }
        </>
    )
}

export default Standings;