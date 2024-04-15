import './Form.css';
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { StandingsProps, Property } from '../util/interface';
import Dropdown from '../dropdown/Dropdown';

function Form({ results }: StandingsProps) {
    const [clubInput, setClubInput] = useState<string>('');
    const [yearInput, setYearInput] = useState<number | string>('');
    const [error, setError] = useState<string>('');
    const clubDropdown = useRef<HTMLSelectElement>(null);
    const yearDropdown = useRef<HTMLSelectElement>(null);
    
    function sortResults(property: keyof Property) {
        const allValues = results.map((r) => {
            return r[property]
        })

        const allValuesFiltered = allValues.filter((f, index) => {
            return allValues.indexOf(f) === index;
        }).sort()

        if(property === 'seasonEndYear') {
            allValuesFiltered.sort((a, b) => {
                return Number(b) - Number(a)
            })
        }

        return allValuesFiltered.map((element) => {
            return (
                <Dropdown 
                    key={element}
                    field={element}
                />
            )
        }) 
    }

    const allClubs = sortResults('team')
    const allYears = sortResults('seasonEndYear')

    function checkInputs(e: React.MouseEvent<HTMLButtonElement>) {
        setError('');

        if(!clubInput && !yearInput) {
            e.preventDefault();
            setError('Please select either a club or year.')
        } else {
            setClubInput('');
            setYearInput('');
            if(clubDropdown.current) {
                clubDropdown.current.selectedIndex = 0;
            }
            if(yearDropdown.current) {
                yearDropdown.current.selectedIndex = 0;
            }
        }
    }

    return (
        <section className='search-section'>
            <h2 className='search-header'>See past season standings by season end year, team, or both:</h2>
            <form className='form-container'>
                <select className='dropdown' ref={clubDropdown} onChange={e => setClubInput(e.target.value)}>
                    <option value={''}>Choose a club</option>
                    {allClubs}
                </select>
                <select className='dropdown' ref={yearDropdown} onChange={e => setYearInput(e.target.value)}>
                    <option value=''>Choose a year</option>
                    {allYears}
                </select>
                <Link to={`/standings/${clubInput ? clubInput : 'all'}/${yearInput ? yearInput : 'all'}`}>
                    <button className='form-btn' onClick={e => checkInputs(e)}>Go!</button>
                </Link>
            </form>
            { error && <h3>{error}</h3>}
        </section>
    )
}

export default Form;