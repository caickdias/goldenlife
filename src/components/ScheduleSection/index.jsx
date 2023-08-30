import { useState } from 'react';

import { title, schedule } from '../../data/scheduleSection';

import RegisterButton from '../RegisterButton';

import Title from '../Title';
import ScheduleDay from './ScheduleDay';
import ScheduleEvent from './ScheduleEvent';

const ScheduleSectoin = () => {

    const [activeDay, setActiveDay] = useState(schedule[0].name);
    const [activeSchedule, setActiveSchedule] = useState(schedule[0].schedule);

    const handleChangeDay = (name) => {
        const newActiveSchedule = schedule.find(day => day.name == name).schedule;
        
        setActiveDay(name);
        setActiveSchedule(newActiveSchedule);
    }

    return (
        <section className="p-8 text-center">
            <Title title={title} />
            
            {
                schedule.map(day =>
                    <ScheduleDay 
                        key={day.name} 
                        name={day.name} 
                        date={day.date}                         
                        active={activeDay == day.name}
                        onClick={() => handleChangeDay(day.name)}
                    />
                )
            }
                        
            {
                activeSchedule.map(event => <ScheduleEvent key={`${event.name}${event.startsAt}`} eventInfo={event} />)
            }            

            <div className='mt-12'>
                <RegisterButton />
            </div>
        </section>
    )
}

export default ScheduleSectoin;