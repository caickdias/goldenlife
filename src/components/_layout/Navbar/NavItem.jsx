const NavItem = ({ title, link }) => {
    return(
        <a
            href={link}
            className="text-white
                hover:text-main-gold transition-colors duration-300"
        >
            {title.toUpperCase()}
        </a>
    )
}

export default NavItem;