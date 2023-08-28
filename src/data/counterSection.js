import bg from '../assets/counter-bg.jpg';

import Hours from '../components/icons/counter/Hours';
import Mic from '../components/icons/counter/Mic';
import Seats from '../components/icons/counter/Seats';
import Sponsors from '../components/icons/counter/Sponsors';
import Workshop from '../components/icons/counter/Workshop';

const counterInfo = [
    {
        name: 'hours',
        Icon: Hours,
        number: 48,
        title: 'Horas'
    },
    {
        name: 'speakers',
        Icon: Mic,
        number: 15,
        title: 'Palestrantes'
    },
    {
        name: 'seats',
        Icon: Seats,
        number: 800,
        title: 'Profissionais'
    },
    {
        name: 'workshops',
        Icon: Workshop,
        number: 10,
        title: 'Oficinas'
    },
    {
        name: 'sponsors',
        Icon: Sponsors,
        number: 16,
        title: 'Patrocinadores'
    },
]

export {
    bg,
    counterInfo
}