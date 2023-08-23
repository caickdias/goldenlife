const NavItem = ({ title, link }) => {
    return(
        <a
            href={link}
            className="text-red-500"
        >
            {title}
        </a>
    )
}

export default NavItem;