import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { ReactElement } from "react";

// Универсальные настройки для анимации
const divVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

const btnVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 100,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
    },
};

// Компонент AnimatedItem для анимации элементов
const AnimatedItem = ({
    children,
    delay = 0,
}: {
    children: ReactElement;
    delay: number;
}) => (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={divVariants}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

const Content = () => {
    return (
        <div className="mt-8 text-white text-2xl sm:w-full lg:w-[40%] flex flex-col order-2 lg:order-1">
            {/* Анимация для заголовка */}
            <AnimatedItem delay={0}>
                <p>Software Developer</p>
            </AnimatedItem>

            {/* Анимация для основного текста */}
            <AnimatedItem delay={0.1}>
                <p className="text-7xl leading-none mt-3">
                    Hello, I'm
                    <br />
                    <span className="text-accent">Borys Ivliev</span>
                </p>
            </AnimatedItem>

            {/* Анимация для описательного текста */}
            <AnimatedItem delay={0.2}>
                <p className="text-base mt-5 leading-7 w-2/3 lg:w-full mx-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Enim cum veniam expedita deleniti optio temporibus quas.
                    Quasi architecto earum repellendus nostrum omnis eaque
                    aspernatur iure, possimus autem tenetur maxime
                    reprehenderit.
                </p>
            </AnimatedItem>

            <motion.div
                className="flex mt-5 gap-5 items-center mx-auto lg:ml-0"
                initial="hidden"
                animate="visible"
                variants={btnVariants}
                transition={{ delay: 0.3, duration: 1 }}
            >
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
                </div>
            </motion.div>
        </div>
    );
};

export default Content;
