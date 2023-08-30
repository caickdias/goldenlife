import { title, contactInfo } from '../../data/contactSection';

import Title from '../Title';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
    return(
        <section className="flex flex-col items-center justify-center p-8 bg-main-blue mt-4">

            <div className='bg-white rounded-md text-main-text w-full max-w-[450px] overflow-hidden'>

                <div className='flex flex-col gap-4 bg-zinc-100 px-4'>
                    <h1 className="text-3xl text-black font-bold my-8">
                        {title}
                    </h1>
                </div>

                <div className='p-4'>
                {
                    contactInfo.map(contact => <ContactInfo key={contact.title} info={contact} />)
                }
                </div>

            </div>

        </section>
    )
}

export default ContactSection;