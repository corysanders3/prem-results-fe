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
                            <p>MP*</p>
                            <p>W*</p>
                            <p>D*</p>
                            <p>L*</p>
                            <p>GF*</p>
                            <p>GA*</p>
                            <p>GD*</p>
                            <p><b>Points</b></p>
                            <p>Notes</p>
                        </section>
                        {newTable}
                    </main>
                </>
            ) : 
                <>
                    <h3>Sorry, that club did not play in the Premier League that year.</h3>
                    <h4>Try searching again, or head back home with the link below.</h4>
                    <Link to='/'>Back To Home</Link>
                </>
            }
        </>
    )
}

export default Standings;