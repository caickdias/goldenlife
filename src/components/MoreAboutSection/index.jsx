import { picLeft, picRight, title, paragraphsRight, paragraphsLeft } from '../../data/moreAboutSection';
import Paragraph from '../Paragraph';
import RegisterButton from '../RegisterButton';
import Title from '../Title';

import Pic from './Pic';

const MoreAboutSection = () => {    

    return(
        <section
            id="goldenlife"
            className='lg:shadow-lg lg:mx-32 lg:shadow-zinc-400'
        >
            <div
                className="flex flex-col px-8 pt-16 
                lg:flex-row lg:gap-8 lg:items-center lg:justify-center lg:mt-8"
            >
                <div className=' lg:w-[600px] lg:flex lg:items-center lg:justify-center lg:p-8'>
                    <Pic src={picLeft} />  
                </div>

                <div className='lg:w-[570px]  lg:flex lg:flex-col lg:items-start lg:justify-center lg:p-8'>
                    <Title title={title} />
                    {
                        paragraphsRight.map((paragraph, index) => (
                            <Paragraph key={index} text={paragraph} />
                        ))
                    }
                </div>
                
            </div>
            
            <div
                className="flex flex-col px-8 pb-16
                lg:flex-row-reverse lg:gap-8 lg:items-center lg:justify-center"
            >
                   <div className=' lg:w-[600px] lg:flex lg:items-center lg:justify-center lg:p-8'>
                        <Pic src={picRight} />  
                    </div>
                   
                   <div className='flex flex-col lg:pl-8'>
                        <div className='lg:w-[510px] lg:gap-4 lg:flex lg:flex-col lg:items-start lg:justify-center'>
                        {
                        paragraphsLeft.map((paragraph, index) => (
                            <Paragraph key={index} text={paragraph} />
                        ))
                    }
                        </div>                
                        
                        <RegisterButton />
                    </div>
                      
            </div>
        </section>
    )
}

export default MoreAboutSection;