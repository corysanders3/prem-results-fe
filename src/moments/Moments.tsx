import './Moments.css';
import { bestMoments } from '../util/bestMomentsData';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TopMoments } from '../util/interface';

function Moments() {
    const [moment, setMoment] = useState<TopMoments | null>(null);

    function findStory() {
        const index = Math.floor(Math.random() * bestMoments.length);
        setMoment(bestMoments[index])
    }

    useEffect(() => {
        findStory()
    }, [])
    

    return (
        <>
        { moment && 
        <main className='story-main'>
            <h3 className='story-text'>Premier League Top Moments...</h3>
            <h3 className='story-text story-name'>{moment.name}</h3>
            <div className='img-container'>
                <img src={moment.image} alt='Athletes Playing Soccer' className='story-img' />
            </div>
            <h4 className='story-text story'>{moment.story}</h4>
            <a href={moment.link} target='_blank' className='video-a'>
                <button className='video-btn'>Video</button>
            </a>
            <p className='game-blurb'><b>Like playing games?? Love the Premier League?? Test your knowledge by playing our Premier League <Link to='/goalsgame' className='game-footer'>Goals Game</Link> here, or the Game link at the top of the page.</b></p>
        </main>
        }
        </>
    )
}

export default Moments;