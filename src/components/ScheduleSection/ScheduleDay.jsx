const ScheduleDay = ({ name, date, active, onClick }) => {

    const activeStyle = `text-main-gold bg-main-blue`;
    const unactiveStyle = `text-main-text`;

    return(
        <button 
            className={`flex-col items-center justify-center w-full py-4
                border-b-[1px] border-zinc-300 transition-colors duration-300
                ${active ? activeStyle : unactiveStyle}`}
            onClick={onClick}
        >
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1>{date}</h1>
        </button>
    )
}

export default ScheduleDay;