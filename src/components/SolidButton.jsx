const SolidButton = ({ title, link }) => {
    return(
        <a
            href={link}
            className="bg-main-blue p-6 w-fit text-sm text-white font-bold rounded-md mt-4
                hover:text-main-gold transition-colors duration-300"
        >
            {title}
        </a>
    )
}

export default SolidButton;