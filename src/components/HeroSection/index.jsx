import { bg, subtitle, scheduleButton, buyTicketsButton } from '../../data/hero';

import BackgroundImage from './BackgroundImage';
import Subtitle from './Subtitle';
import TransparentButton from './TransparentButton';
import SolidButton from './SolidButton';

import Logo from '../Logo'

const HeroSection = () => {

    

    return(
        <section
            className='items-center justify-between
                bg-gradient-to-b to-main-blue via-main-blue from-main-blue h-full
                lg:h-[110vh]'
        >
            <BackgroundImage img={bg} />

            <div
                className='flex flex-col h-full gap-8 text-center px-4 py-12 z-40
                lg:pt-44'
            >

                <div className='flex items-center justify-center'>
                    <Logo />
                </div>

                <Subtitle title={subtitle} />

                <div className='flex  flex-col w-full
                    lg:flex-row lg:items-center lg:justify-center lg:gap-4 z-40'
                >
                    <TransparentButton title={scheduleButton.title} link={scheduleButton.link} />

                    <SolidButton title={buyTicketsButton.title} link={buyTicketsButton.link} />
                </div>

            </div>
        </section>
    )
}

export default HeroSection;