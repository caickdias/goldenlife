import { title, price, details } from '../../data/ticketsSection';
import { contactInfo } from '../../data/contactSection';

import TicketBoard from './TicketBoard';
import ContactInfo from '../ContactSection/ContactInfo';
import ContactSection from '../ContactSection';

const TicketsSection = () => {
    return(
        <section id="tickets" className="flex flex-col items-center justify-center p-4 bg-main-blue mt-4
            lg:pb-12"
        >
            
            <h1 className="text-4xl text-center text-main-gold font-bold my-8">
                Inscreva-se agora e garanta o SEU LUGAR!
            </h1>

            <h1 className="text-xl text-center text-white mb-4">
                Junte-se a nós e trilhe o caminho rumo a uma <b>alta performance esportiva saudável.</b>
            </h1>

            <h1 className="text-xl text-center text-white mb-8">
                Sucesso, conhecimento e conexões esperam por você!
            </h1>

            <div className='flex flex-col gap-8
                lg:flex-row lg:my-6'
            >
                <TicketBoard price={price} details={details} title={title} />

                <ContactSection />
            </div>

        </section>
    )
}

export default TicketsSection;