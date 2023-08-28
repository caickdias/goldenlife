import { title, firstParagraph, aboutPic, secondParagraph, thirdParagraph, button } from '../../data/aboutSection';
import RegisterButton from '../RegisterButton';

import Title from '../Title';
import FancyPic from './FancyPic';
import Paragraph from '../Paragraph';

const AboutSection = () => {

    return(
        <section
            className="flex flex-col px-4 py-16 "
        >
            <FancyPic src={aboutPic} />

            <Title title={title} />
        
            <Paragraph text={firstParagraph} />
            <Paragraph text={secondParagraph} />
            <Paragraph text={thirdParagraph} />

            <RegisterButton />

        </section>
    )
}

export default AboutSection;