import './Players.css';
import { GoalsLayout, PlayersProps } from '../util/interface';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Players({ goals, error }: PlayersProps) {
    let record = 0;
    const [playerOne, setPlayerOne] = useState<GoalsLayout | null>(null);
    const [playerTwo, setPlayerTwo] = useState<GoalsLayout | null>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [result, setResult] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [correct, setCorrect] = useState<number>(record);

    function getRandomPlayer() {
        const indexGoalsOne = Math.floor(Math.random() * goals.length);
        const indexGoalsTwo = Math.floor(Math.random() * goals.length);
        const indexPlaceOne = Math.floor(Math.random() * 3);
        const indexPlaceTwo = Math.floor(Math.random() * 3);


        const playerOne = goals[indexGoalsOne].goals[indexPlaceOne]
        const playerTwo = goals[indexGoalsTwo].goals[indexPlaceTwo]

        setPlayerOne(playerOne);
        setPlayerTwo(playerTwo);

        sessionStorage.setItem('one', JSON.stringify(playerOne))
        sessionStorage.setItem('two', JSON.stringify(playerTwo))
    }

    useEffect(() => {
        if(sessionStorage.getItem('one') && sessionStorage.getItem('two')) {
            const playerOne = sessionStorage.getItem('one') || '{}'
            setPlayerOne(JSON.parse(playerOne))
            const playerTwo = sessionStorage.getItem('two') || '{}'
            setPlayerTwo(JSON.parse(playerTwo))
        } else if(goals.length > 0){
            getRandomPlayer()
        }
        const updatedRecord = sessionStorage.getItem('record') || '{}'
        setCorrect(Number(updatedRecord) || 0)
    }, [goals])

    function checkGame(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsButtonDisabled(true);
        sessionStorage.removeItem('correct');
        const id = e.currentTarget.id

        if(id === 'one' && playerOne && playerTwo) {
            if(playerOne.goals > playerTwo.goals) {
                setMessage('Master Class, You Won This Round! See How May You Can Get In A Row!')
                setResult(true);
                record = correct + 1;
                setCorrect(record);
            } else if(playerOne.goals < playerTwo.goals) {
                setMessage('A Bit Of A Shocker, You Lost This Round! Play Again To Build Up Your Streak.')
                setResult(true);
                record = 0;
                setCorrect(record);
            } else {
                setMessage('It\'s A Draw! Your Streak Stays Alive. Move To The Next Round To Keep It Going.')
                setResult(true);
            }
        } else if(id === 'two' && playerOne && playerTwo) {
            if(playerTwo.goals > playerOne.goals) {
                setMessage('Master Class, You Won This Round! See How May You Can Get In A Row!')
                setResult(true);
                record = correct + 1;
                setCorrect(record);
            } else if(playerTwo.goals < playerOne.goals) {
                setMessage('A Bit Of A Shocker, You Lost This Round! Play Again To Build Up Your Streak.')
                setResult(true);
                record = 0;
                setCorrect(record);
            } else {
                setMessage('It\'s A Draw! Your Streak Stays Alive. Move To The Next Round To Keep It Going.')
                setResult(true);
            }
        }
        sessionStorage.setItem('record', JSON.stringify(record))
        sessionStorage.removeItem('one');
        sessionStorage.removeItem('two');
    }

    function gameRefresh(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setResult(false);
        getRandomPlayer();
        setIsButtonDisabled(false);
    }

    return (
        <>
            { error &&
                <section className='api-error player-error'>
                    <h3>We are encountering issues.</h3>
                    <h4>{error}</h4>
                    <Link to='/' className='back-home-btn'>Back To Home</Link>
                </section>
            }
            { playerOne && playerTwo && (
            <>
            <h3 className='correct'>Number Correct In A Row: {correct}</h3>
            <section className='players-section'>
                <div className='player-details'>
                    <h4>{playerOne.name}</h4>
                    <img className='player-pic' src={playerOne.image} alt={`Picture of ${playerOne.name}`} />
                    <p><b>Club:</b> {playerOne.club}</p>
                    { result && <p className='goals'><b>Goals:</b> {playerOne.goals}</p> }
                    <p className='end-year'><b>Season End Year:</b> {playerOne.seasonEndYear}</p>
                    <button className='game-btn' onClick={e => checkGame(e)} disabled={isButtonDisabled} id='one'>Select</button>
                </div>
                <div className='player-details'>
                    <h4>{playerTwo.name}</h4>
                    <img className='player-pic' src={playerTwo.image} alt={`Picture of ${playerTwo.name}`} />
                    <p><b>Club:</b> {playerTwo.club}</p>
                    { result && <p className='goals'><b>Goals:</b> {playerTwo.goals}</p> }
                    <p className='end-year'><b>Season End Year:</b> {playerTwo.seasonEndYear}</p>
                    <button className='game-btn' onClick={e => checkGame(e)} disabled={isButtonDisabled} id='two'>Select</button>
                </div>
            </section>
            </>
            )}
            { result && 
                <div className='game-result'>
                    <h3>{message}</h3>
                    <button className='game-refresh-btn' onClick={e => gameRefresh(e)}>Play!</button>
                </div>
            }
        </>
    )
}

export default Players;