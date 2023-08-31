import { title, contactInfo } from '../../data/contactSection';

import Title from '../Title';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
    return(
        <div className='bg-white rounded-md text-main-text w-full max-w-[450px] pb-8 '>
            
                <div className='flex flex-col gap-4 px-4 '
                >
                    <h1 className="text-2xl text-black font-bold my-8
                        lg:text-center"
                    >
                        {title}
                    </h1>
                </div>

                <div className='lg:flex lg:flex-col lg:gap-4 '>
                {
                    contactInfo.map(contact => <ContactInfo key={contact.title} info={contact} />)
                }
                </div>


        </div>
    )
}

export default ContactSection;