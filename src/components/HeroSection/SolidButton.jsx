const SolidButton = ({ title, link }) => {
    return(
        <a 
            href={link}
            className="bg-main-blue text-white text-sm font-bold border-2 border-main-blue rounded-md py-6 mt-2 mb-2
                hover:text-main-gold hover:border-main-gold transition-colors duration-300
                lg:w-56 lg:mt-10 lg:border-white"
        >
            {title}
        </a>
    )
}

export default SolidButton;