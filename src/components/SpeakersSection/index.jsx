import { banner } from '../../data/speakers';

const SpeakersSection = () => {
    return(
        <section id="speakers" className="flex justify-center items-center gap-4 p-4
            lg:px-32"
        >
            <a href={banner} target="_blank" rel="noreferrer">
                <img 
                    src={banner}
                    alt="speakers"
                />   
            </a>
        </section>
    )
}

export default SpeakersSection;