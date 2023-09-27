import { banner, danielPreto, oscarPreto } from '../../data/speakers';
import Subtitle from '../HeroSection/Subtitle';

import Title from '../Title';

const SpeakersSection = () => {
    return(
        <section id="speakers" className="flex flex-col justify-center items-center gap-4 p-4
            lg:px-32"
        >
            <Title title="Palestrantes Surpresa!" />
            <h1 className='text-xl  lg:font-bold mb-16'>
                Em breve anunciaremos!
            </h1>

            <div className='flex flex-col w-full items-center justify-evenly lg:flex-row'>
                <div
                    className='flex flex-col items-center justify-center'
                >
                    <img 
                        src={oscarPreto}
                        alt="misterioso"
                        className='h-96'
                    />
                    <h1 className='text-[5rem] -mt-4 font-bold'>?</h1>
                </div>
                
                <div
                    className='flex flex-col items-center justify-center'
                >
                    <img 
                        src={danielPreto}
                        alt="misterioso"
                        className='h-96 pt-24'
                    />
                    <h1 className='text-[5rem] -mt-4 font-bold'>?</h1>
                </div>


            </div>

            <Title title="Palestrantes confirmados" />

            <a href={banner} target="_blank" rel="noreferrer" className='bg-main-blue p-12'>
                <img 
                    src={banner}
                    alt="speakers"
                />   
            </a>
        </section>
    )
}

export default SpeakersSection;