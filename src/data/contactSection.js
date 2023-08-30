const title = "Entre em contato";

import Phone from '../components/icons/contact/Phone';
import Email from '../components/icons/contact/Email';
import Address from '../components/icons/contact/Address';
import Instagram from '../components/icons/contact/Instagram';

const contactInfo = [
    {
        Icon: Phone,
        title: "WhatsApp",
        text: "(38) 99999-9999",
        link: "38999999999",
    },
    {
        Icon: Email,
        title: "Email",
        text: "goldenlife@event.com",
        link: "mailto:goldenlife@event.com",
    },
    {
        Icon: Address,
        title: "Endereço",
        text: "Rua Santo Etc etc, N69. Montes Claros - MG",
        link: "38999999999",
    },
    {
        Icon: Instagram,
        title: "Instagram",
        text: "https://www.instagram.com/goldenlife",
        link: "38999999999",
    },
]

export {
    title,
    contactInfo,
}