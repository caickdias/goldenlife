import { title, firstParagraph, aboutPic, secondParagraph, thirdParagraph, button } from '../../data/aboutSection';
import RegisterButton from '../RegisterButton';

import Title from '../Title';
import FancyPic from './FancyPic';
import Paragraph from '../Paragraph';

const AboutSection = () => {

    return(
        <section
            id="about"
            className="flex flex-col px-4 py-16 
            lg:flex-row lg:px-32 lg:items-center lg:justify-center"
        >
            <FancyPic src={aboutPic} />

            <div className='flex flex-col
            lg:px-8'
            >
                <Title title={title} />
            
                <Paragraph text={firstParagraph} />
                <Paragraph text={secondParagraph} />
                <Paragraph text={thirdParagraph} />

                <RegisterButton />
            </div>

        </section>
    )
}

export default AboutSection;