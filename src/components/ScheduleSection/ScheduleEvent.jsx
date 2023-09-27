const ScheduleEvent = ({ eventInfo }) => {
    return(
        <div className="flex flex-col my-4 border-zinc-300 bg-zinc-100  border-b-[1px] p-2 transition-all duration-300">
            <Duration startsAt={eventInfo.startsAt} endsAt={eventInfo.endsAt} />
            <Name name={eventInfo.name} />
            <Speaker speaker={eventInfo.speaker} />
        </div>
    )
}

const Duration = ({ startsAt, endsAt }) => <h1 className="text-md text-zinc-500">{startsAt} - {endsAt}</h1>

const Name = ({ name }) => <h1 className="text-xl text-main-text font-bold my-2">{name}</h1>

const Speaker = ({ speaker }) => <h1 className="text-md"><span className="text-zinc-600 font-bold">{speaker}</span></h1>

export default ScheduleEvent;