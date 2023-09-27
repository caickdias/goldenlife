const TicketBoard = ({ price, title, details }) => {
    return(
        <div className='bg-white rounded-md text-main-text w-full max-w-[450px] overflow-hidden'
        >

            <div className='flex flex-col gap-4 py-4 bg-zinc-100 p-4 lg:p-12'>
                <h1 className='font-bold text-xl'>{title}</h1>
                
            </div>

            <div className='p-4 lg:px-12'>
            {
                details.map(detail => <h1 className='mt-4 pb-2 border-b-[1px] border-zinc-200'><span className='text-green-500 mr-2'>✓</span>{detail}</h1>)
            }
            </div>
            
            <div className='flex items-center justify-center pb-6 pt-2 lg:pt-4 lg:justify-start lg:pl-12'>
                <a
                href="#"
                className="bg-main-blue p-4 w-fit text-md text-white font-bold rounded-md
                    hover:text-main-gold transition-colors duration-300"
                >
                    EM BREVE
                </a>
            </div>

        </div>
    )
}

export default TicketBoard;