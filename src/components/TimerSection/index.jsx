import { useEffect, useState } from 'react';

import { bg } from '../../data/counterSection';
import { title, subtitle, eventDate } from '../../data/hero';

import BackgroundImage from '../HeroSection/BackgroundImage';
import Title from '../Title';

import Timer from '../Timer';

const MILISECONDS_TO_SECONDS = 1000;

const TimerSection = () => {

    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {        
        const eventToDate = new Date(eventDate);        
        const now = Date.now();

        setSeconds(eventToDate.getTime()/MILISECONDS_TO_SECONDS - Math.floor(now/MILISECONDS_TO_SECONDS))

        setInterval(() => {            
            setSeconds(old => old-1);
        },[1000])

    }, []);

    return(
        <section
            className='items-center justify-between
                bg-gradient-to-b to-main-blue via-main-blue from-main-blue h-full'
        >
            <BackgroundImage img={bg} />

            <div
                className='flex flex-col h-full gap-8 text-center px-4 py-12'
            >
                <h1 className="text-4xl text-main-gold font-bold my-8">
                    {title}
                </h1>

                <Timer seconds={seconds} />
            </div>
        </section>
    )
}

export default TimerSection;