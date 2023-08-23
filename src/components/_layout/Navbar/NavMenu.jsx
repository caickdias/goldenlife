import NavItem from "./NavItem";

const NavMenu = ({ items }) => {
    return(
        <div className="hidden lg:flex">
        {
            items.map(item => <NavItem key={item.name} title={item.title} link={item.link} />)
        }
        </div>
    )
}

export default NavMenu;