import { navItems } from "../../../data/navbar";

import NavMenu from './NavMenu';
import Logo from '../../Logo';
import Hamburger from "../../icons/Hamburger";

const Navbar = () => {
    return(
        <nav
            className="fixed flex w-full items-center justify-between px-2 py-4
            z-50
            lg:border-b-[1px] lg:border-zinc-500 lg:px-12 lg:bg-main-blue 
            xl:py-6 xl:px-20"
        >

            <Logo />

            <NavMenu items={navItems} />

            <Hamburger />

            <div
                className="hidden lg:flex items-center justify-center"
            >
                <a
                    href="#"
                    className="p-4 w-fit text-sm text-main-gold font-bold rounded-md border-[2px] border-main-blue
                        hover:border-main-gold transition-colors duration-300"
                >
                    INSCREVA-SE
                </a>
            </div>
        </nav>
    )
}

export default Navbar;