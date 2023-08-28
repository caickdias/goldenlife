const Display = ({ timeLeft, unit }) => {
    return(
        <div className="flex flex-col flex-1 items-center justify-center
            min-w-[140px] py-4 rounded-md
            bg-[#1F2F3A]"
        >
            <h1 className="text-4xl font-bold text-white">{timeLeft}</h1>
            
            <div className="w-1/3 h-[2px] bg-gray-500 my-2"></div>
            
            <h1 className="text-xl text-white">{unit}</h1>
        </div>
    )
}

export default Display;