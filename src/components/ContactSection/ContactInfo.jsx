 const ContactInfo = ({ info }) => {

    const { title, Icon, text, link } = info;

    return(
        <div className="flex items-center gap-4 w-full ">

            <Icon />

            <div className="my-2">
                <Title title={title} />
                <Text text={text} />
            </div>

        </div>
    )
}

const Title = ({ title }) => <h1 className="text-zinc-500 text-xl">{title}</h1>;
const Text = ({ text }) => <h1 className="text-main-text text-base">{text}</h1>;

export default ContactInfo;