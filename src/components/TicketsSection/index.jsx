import { title, price, details } from '../../data/ticketsSection';

import TicketBoard from './TicketBoard';

const TicketsSection = () => {
    return(
        <section className="flex flex-col items-center justify-center p-4 bg-main-blue mt-4">
            
            <h1 className="text-4xl text-center text-main-gold font-bold my-8">
                Adquira seu ingresso
            </h1>

            <TicketBoard price={price} details={details} title={title} />

        </section>
    )
}

export default TicketsSection;