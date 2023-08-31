 const ContactInfo = ({ info }) => {

    const { title, Icon, text, link } = info;

    return(
        <a 
            href={link}
            className="flex items-center gap-4 w-full pl-4
            hover:bg-zinc-100
            lg:pl-8"
        >

            <Icon />

            <div className="my-2">
                <Title title={title} />
                <Text text={text} />
            </div>

        </a>
    )
}

const Title = ({ title }) => <h1 className="text-zinc-500 text-xl">{title}</h1>;
const Text = ({ text }) => <h1 className="text-main-text text-base">{text}</h1>;

export default ContactInfo;