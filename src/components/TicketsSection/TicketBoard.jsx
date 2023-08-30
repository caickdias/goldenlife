const TicketBoard = ({ price, title, details }) => {
    return(
        <div className='bg-white rounded-md text-main-text w-full max-w-[450px] overflow-hidden'>

                <div className='flex flex-col gap-4 py-4 bg-zinc-100 p-4'>
                    <h1 className='font-bold text-xl'>{title}</h1>
                    <h1><span className='text-main-gold text-3xl font-bold'>{price}</span> / pessoa</h1>
                </div>

                <div className='p-4'>
                {
                    details.map(detail => <h1 className='mt-4 pb-2 border-b-[1px] border-zinc-200'><span className='text-green-500 mr-2'>✓</span>{detail}</h1>)
                }
                </div>
                
                <div className='flex items-center justify-center pb-6 pt-2'>
                    <a
                    href="#"
                    className="bg-main-blue p-4 w-fit text-sm text-white font-bold rounded-md
                        hover:text-main-gold transition-colors duration-300"
                    >
                        COMPRAR INGRESSO
                    </a>
                </div>

            </div>
    )
}

export default TicketBoard;