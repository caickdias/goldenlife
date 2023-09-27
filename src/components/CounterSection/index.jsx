import { bg, counterInfo } from '../../data/counterSection';
import BgImage from './BgImage';

import CounterInfo from './CounterInfo';

const CounterSection = () => {
    return(
        <section
            className='relative flex flex-wrap items-center justify-between py-12
                bg-main-blue h-full'
        >
            <BgImage src={bg} />

            {
                counterInfo.map(info => <CounterInfo key={info.name} title={info.title} Icon={info.Icon} number={info.number} />)
            }
        </section>
    )
}

export default CounterSection;