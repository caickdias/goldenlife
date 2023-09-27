import bg from '../assets/counter-bg.jpg';

import Hours from '../components/icons/counter/Hours';
import Mic from '../components/icons/counter/Mic';
import Seats from '../components/icons/counter/Seats';

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
        number: 14,
        title: 'Palestrantes'
    },
    {
        name: 'seats',
        Icon: Seats,
        number: 800,
        title: 'Profissionais'
    },
]

export {
    bg,
    counterInfo
}