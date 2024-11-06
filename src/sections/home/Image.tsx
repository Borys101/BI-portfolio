import { motion } from "framer-motion";

const imgVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
    },
};

const Image = () => {
    return (
        <div className="flex justify-center items-center sm:order-1">
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full flex items-center justify-center p-3">
                <div className="absolute inset-0 border-2 border-accent rounded-full animate-pulse"></div>

                <motion.img
                    src="public/assets/developer.png"
                    alt="developer"
                    className="w-full h-full object-cover rounded-full mix-blend-lighten"
                    initial="initial"
                    animate="animate"
                    variants={imgVariants}
                />
            </div>
        </div>
    );
};

export default Image;
