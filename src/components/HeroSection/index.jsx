import { useEffect, useState } from 'react';

import { bg, title, subtitle, scheduleButton, buyTicketsButton, eventDate } from '../../data/hero';

import BackgroundImage from './BackgroundImage';
import Title from './Title';
import Subtitle from './Subtitle';
import TransparentButton from './TransparentButton';
import SolidButton from './SolidButton';

import Timer from '../Timer';

const MILISECONDS_TO_SECONDS = 1000;

const HeroSection = () => {

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
                bg-gradient-to-b to-main-blue via-main-blue from-main-blue h-full
                lg:h-screen'
        >
            <BackgroundImage img={bg} />

            <div
                className='flex flex-col h-full gap-8 text-center px-4 py-12
                lg:pt-44'
            >
                <Title title={title} />

                <Subtitle title={subtitle} />

                <div className='flex  flex-col w-full
                    lg:flex-row lg:items-center lg:justify-center lg:gap-4'
                >
                    <TransparentButton title={scheduleButton.title} link={scheduleButton.link} />

                    <SolidButton title={buyTicketsButton.title} link={buyTicketsButton.link} />
                </div>

                <Timer seconds={seconds} />
            </div>
        </section>
    )
}

export default HeroSection;