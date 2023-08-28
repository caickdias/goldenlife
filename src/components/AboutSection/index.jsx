import { firstParagraph, aboutPic } from '../../data/aboutSection';

import FancyPic from './FancyPic';

const AboutSection = () => {

    return(
        <section
            className="px-4 py-16"
        >
            <FancyPic src={aboutPic} />

        </section>
    )
}

export default AboutSection;