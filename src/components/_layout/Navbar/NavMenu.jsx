import NavItem from "./NavItem";

const NavMenu = ({ items }) => {
    return(
        <div className="hidden lg:flex lg:gap-8 lg:font-bold">
        {
            items.map(item => <NavItem key={item.name} title={item.title} link={item.link} />)
        }
        </div>
    )
}

export default NavMenu;