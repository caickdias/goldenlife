import { navItems } from "../../../data/navbar";

import NavMenu from './NavMenu';
import Logo from '../../Logo';
import Hamburger from "../../icons/Hamburger";

const Navbar = () => {
    return(
        <nav
            className="fixed flex w-full items-center justify-between px-2 py-4"
        >

            <Logo />

            <NavMenu items={navItems} />

            <Hamburger />
        </nav>
    )
}

export default Navbar;