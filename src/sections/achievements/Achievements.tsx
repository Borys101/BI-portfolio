import { achievements } from "../../constants";
import { motion } from "framer-motion";

const divVariants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 100,
        transition: {
            duration: 0.5,
            delay: custom * 0.2,
        },
    }),
};

const Achievements = () => {
    return (
        <div className="mt-12 lg:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 w-[80%] lg:w-full gap-3 xl:gap-5 lg:gap-15 mb-10 mx-auto justify-items-center">
            {achievements.map((el) => (
                <motion.div
                    className="text-white flex items-center w-[230px] border-accent text-center border-2 rounded-full px-5 py-3 gap-3"
                    initial="hidden"
                    animate="visible"
                    custom={el.id}
                    variants={divVariants}
                >
                    <p className="text-6xl font-bold">{el.number}</p>
                    <p>{el.text}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default Achievements;
