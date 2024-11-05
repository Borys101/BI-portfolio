import { useState } from "react";
import { navLinks } from "../../constants";
import { motion } from "framer-motion";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li
                    key={id}
                    className={`nav-li ${
                        activeIndex === id ? "text-accent-hover" : "text-white"
                    }`}
                >
                    <a href={href} onClick={() => setActiveIndex(id)}>
                        <motion.div className="relative w-fit">
                            {name}
                            {activeIndex === id ? <MenuLine /> : null}
                        </motion.div>
                    </a>
                </li>
            ))}
        </ul>
    );
};

const MenuLine = () => {
    return (
        <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.3 }}
            className="w-full h-[2px] absolute top-6 bg-accent"
        />
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    return (
        <div>
            <div className="flex items-center py-5 mx-auto c-space">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none sm:hidden flex"
                    aria-label="Toggle menu"
                >
                    <img
                        src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                        alt="toggle"
                        className="w-6 h-6"
                    />
                </button>
                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
            <div
                className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
