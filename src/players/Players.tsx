import './Players.css';
import { GoalsGameLayout, PlayersProps } from '../util/interface';
import { useState, useEffect } from 'react';
import { GoalsLayout } from '../util/interface';

function Players({ goals }: PlayersProps) {
    const [playerOne, setPlayerOne] = useState<GoalsLayout | null>(null);
    const [playerTwo, setPlayerTwo] = useState<GoalsLayout | null>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [result, setResult] = useState<boolean>(false);

    function getRandomPlayer() {
        const indexGoalsOne = Math.floor(Math.random() * goals.length);
        const indexGoalsTwo = Math.floor(Math.random() * goals.length);
        const indexPlaceOne = Math.floor(Math.random() * 3);
        const indexPlaceTwo = Math.floor(Math.random() * 3);
        setPlayerOne(goals[indexGoalsOne].goals[indexPlaceOne])
        setPlayerTwo(goals[indexGoalsTwo].goals[indexPlaceTwo])
    }

    useEffect(() => {
        getRandomPlayer()
    }, [])

    function checkGame(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsButtonDisabled(true);
        const id = e.currentTarget.id

        if(id === 'one' && playerOne && playerTwo) {
            if(playerOne.goals > playerTwo.goals) {
                //win
                setResult(true);
            } else if(playerOne.goals < playerTwo.goals) {
                //lose
            } else {
                // draw
            }
        } else if(id === 'two' && playerOne && playerTwo) {
            if(playerTwo.goals > playerOne.goals) {
                //win
                setResult(true);
            } else if(playerTwo.goals < playerOne.goals) {
                //lose
            } else {
                // draw
            }
        }
    }

    return (
        <>
            { playerOne && playerTwo && (
            <section className='players-section'>
                <div className='player-details'>
                    <h4>{playerOne.name}</h4>
                    <img className='player-pic' src={playerOne.image} alt={`Picture of ${playerOne.name}`} />
                    <p><b>Club:</b> {playerOne.club}</p>
                    <p className='end-year'><b>Season End Year:</b> {playerOne.seasonEndYear}</p>
                    <button className='game-btn' onClick={e => checkGame(e)} disabled={isButtonDisabled} id='one'>Select</button>
                </div>
                <div className='player-details'>
                    <h4>{playerTwo.name}</h4>
                    <img className='player-pic' src={playerTwo.image} alt={`Picture of ${playerTwo.name}`} />
                    <p><b>Club:</b> {playerTwo.club}</p>
                    <p className='end-year'><b>Season End Year:</b> {playerTwo.seasonEndYear}</p>
                    <button className='game-btn' onClick={e => checkGame(e)} disabled={isButtonDisabled} id='two'>Select</button>
                </div>
            </section>
            )}
            { result && 
                <div className='game-result'>
                    <h3>hello</h3>
                </div>
            }
        </>
    )
}

export default Players;