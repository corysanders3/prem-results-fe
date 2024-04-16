import './Moments.css';
import { bestMoments } from '../util/bestMomentsData';
import { useState,useEffect } from 'react';
import { topMoments } from '../util/interface';

function Moments() {
    const [moment, setMoment] = useState<topMoments | null>(null);

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
            <h3 className='story-text'>{moment.name}</h3>
            <div className='img-container'>
                <img src={moment.image} alt='Image of classic English football story' className='story-img' />
            </div>
            <h4 className='story-text story'>{moment.story}</h4>
            <a href={moment.link} target='_blank' className='video-a'>
                <button className='video-btn'>Video</button>
            </a>
        </main>
        }
        </>
    )
}

export default Moments;