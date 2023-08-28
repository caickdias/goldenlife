import { picLeft, picRight, title, firstParagraph, secondParagraph, thirdParagraph, fourthParagraph } from '../../data/moreAboutSection';
import Paragraph from '../Paragraph';
import RegisterButton from '../RegisterButton';
import Title from '../Title';

import Pic from './Pic';

const MoreAboutSection = () => {
    return(
        <>
            <section
                className="flex flex-col px-8 py-16 "
            >
                <Pic src={picLeft} />  

                <>
                    <Title title={title} />
                    <Paragraph text={firstParagraph}  />
                    <Paragraph text={secondParagraph}  />
                    <RegisterButton />
                </>      
            </section>
            
            <section
                className="flex flex-col px-8 pb-16"
            >
                <Pic src={picRight} />  

                <>                    
                    <Paragraph text={thirdParagraph}  />
                    <Paragraph text={fourthParagraph}  />
                    <RegisterButton />
                </>      
            </section>
        </>
    )
}

export default MoreAboutSection;