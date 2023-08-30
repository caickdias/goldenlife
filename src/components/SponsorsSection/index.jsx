import { title, sponsors } from '../../data/sponsorsSection';

import Title from '../Title';

const SponsorsSection = () => {
    return(
        <section className='flex flex-col items-center justify-center p-4 pb-6'>

            <Title title={title} />

            <div className='flex flex-wrap gap-4'>
            {
                sponsors.map((sponsor, index) => 
                    <img 
                        className='h-10 my-2'
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