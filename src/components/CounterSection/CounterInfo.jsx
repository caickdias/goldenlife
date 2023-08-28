const CounterInfo = ({ title, Icon, number }) => {
    return(
        <div className="flex flex-1 flex-col items-center justify-center gap-2 min-w-[140px] py-6 px-4">
            <Icon />
            <Number number={number} />
            <Title title={title} />            
        </div>
    )
}

const Number = ({ number }) => <h1 className="text-white font-bold text-4xl mt-4">{number}</h1>;

const Title = ({ title }) => <h1 className="text-white text-xl">{title}</h1>;

export default CounterInfo;