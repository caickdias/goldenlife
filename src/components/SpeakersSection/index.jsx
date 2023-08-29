import { speakers } from '../../data/speakers';
import SpeakerPortrait from './SpeakerPortrait';

const SpeakersSection = () => {
    return(
        <section className="flex flex-wrap gap-4 p-4">
            {
                speakers.map(speaker => <SpeakerPortrait key={speaker.name} name={speaker.name} role={speaker.role} src={speaker.image} />)
            }
        </section>
    )
}

export default SpeakersSection;