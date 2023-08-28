const TransparentButton = ({ title, link }) => {
    return(
        <a 
            href={link}
            className="text-white text-sm font-bold border-2 border-white rounded-md py-6 mt-8
                hover:bg-[#273263] transition-colors duration-300"
        >
            {title}
        </a>
    )
}

export default TransparentButton;