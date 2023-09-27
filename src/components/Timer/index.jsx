const TO_SECONDS = 60;
const TO_HOUR = 3600;
const SECONDS_A_DAY= 86400;
const SECONDS_A_MINUTE = 60;

import Display from './Display';

const Timer = ({ seconds }) => {

    const daysLeft = Math.floor(seconds / SECONDS_A_DAY);

    const hoursLeftInSeconds = seconds % SECONDS_A_DAY;     
    const hoursLeft = Math.floor(hoursLeftInSeconds / TO_HOUR);

    const minuteLeftInSeconds = Math.floor(hoursLeftInSeconds - (hoursLeft * TO_HOUR)) ;
    const minutesLeft = Math.floor(minuteLeftInSeconds / SECONDS_A_MINUTE);
    const secondsLeft = seconds % TO_SECONDS;

    return(
        <div className="flex w-full h-full flex-wrap gap-2
            lg:items-center lg:justify-center lg:gap-12"
        >            
            <Display timeLeft={daysLeft} unit='Dias' />
            <Display timeLeft={hoursLeft} unit='Horas' />
            <Display timeLeft={minutesLeft} unit='Minutos' />
            <Display timeLeft={secondsLeft} unit='Segundos' />
        </div>
    )
} 

export default Timer;