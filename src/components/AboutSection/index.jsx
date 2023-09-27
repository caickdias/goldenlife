import { title, firstParagraph, secondParagraph, thirdParagraph, fourthParagraph, button } from '../../data/aboutSection';
import RegisterButton from '../RegisterButton';

import Title from '../Title';
import Paragraph from '../Paragraph';

const AboutSection = () => {

    return(
        <section
            id="about"
            className="flex flex-col px-4 py-16 
            lg:flex-row lg:px-32 lg:items-center lg:justify-center"
        >
            <div className='flex flex-col
            lg:px-8'
            >
                <Title title={title} />
            
                <Paragraph text={firstParagraph} />
                <Paragraph text={secondParagraph} />
                <Paragraph text={thirdParagraph} />
                <Paragraph text={fourthParagraph} />

                <RegisterButton />
            </div>

        </section>
    )
}

export default AboutSection;