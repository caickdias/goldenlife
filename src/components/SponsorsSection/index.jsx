import { title, subtitle, sponsors } from '../../data/sponsorsSection';

import Title from '../Title';

const SponsorsSection = () => {
    return(
        <section className='flex flex-col items-center justify-center p-4 pb-8'>

            <Title title={title} />

            <h1 className='text-2xl mb-8'>
                {subtitle}
            </h1>

            <div className='flex flex-wrap gap-4 lg:gap-24 lg:px-60 lg:justify-center'>
            {
                sponsors.map((sponsor, index) => 
                    <img 
                        className='h-20 my-2'
                        key={index}
                        src={sponsor}
                        alt="sponsor"
                    />
                )
            }
            </div>

        </section>
    )
}

export default SponsorsSection;