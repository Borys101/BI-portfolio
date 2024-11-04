import { Github, Linkedin } from "lucide-react";

const Content = () => {
    return (
        <div className="mt-8 text-white text-2xl sm:w-full lg:w-[40%] flex flex-col order-2 lg:order-1">
            <p>Software Developer</p>
            <p className="text-7xl leading-none">
                Hello, I'm
                <br />
                <span className="text-accent">Borys Ivliev</span>
            </p>
            <p className="text-base mt-5 leading-7 w-2/3 lg:w-full mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                cum veniam expedita deleniti optio temporibus quas. Quasi
                architecto earum repellendus nostrum omnis eaque aspernatur
                iure, possimus autem tenetur maxime reprehenderit.
            </p>
            <div className="flex mt-5 gap-5 items-center mx-auto lg:ml-0">
                <button className="p-3 border-accent border-2 rounded-full hover:bg-accent-hover transition-colors duration-300 text-sm text-accent hover:text-white">
                    DOWNLOAD CV
                </button>
                <div className="flex gap-4">
                    <a href="/" className="icon_link">
                        <Github />
                    </a>
                    <a href="/" className="icon_link">
                        <Linkedin />
                    </a>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Content;
