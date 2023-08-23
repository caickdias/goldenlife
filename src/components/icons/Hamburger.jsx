const Hamburger = () => {
    return(
        <button
            className="flex flex-col gap-2 items-center justify-center w-16 h-16 mr-2 mt-2 border-2 border-white rounded-full"
        >
            <Line />
            <Line />
            <Line />
        </button>
    )
}

const Line = () => <div className="w-7 h-[3px] bg-white rounded-lg"></div>

export default Hamburger;