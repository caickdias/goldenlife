const Display = ({ timeLeft, unit }) => {
    return(
        <div className="flex flex-col flex-1 items-center justify-center
            min-w-[140px] py-4 rounded-md
            border-main-gold border-2
            
            lg:w-[200px] lg:aspect-square lg:flex-none"
        >
            <h1 className="text-4xl font-bold text-white lg:text-5xl">{timeLeft}</h1>
            
            <div className="w-1/3 h-[2px] bg-gray-500 my-2"></div>
            
            <h1 className="text-xl text-white lg:text-2xl">{unit}</h1>
        </div>
    )
}

export default Display;