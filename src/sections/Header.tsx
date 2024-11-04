import Navbar from "./Navbar";
import { BriefcaseBusiness } from "lucide-react";

const Header = () => {
    return (
        <header className="flex justify-between h-18 items-center">
            <div className="flex items-center gap-3">
                <BriefcaseBusiness className="text-accent" />
                <a href="/" className="text-white font-bold text-2xl">
                    Borys
                </a>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
