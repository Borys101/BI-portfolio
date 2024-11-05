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
        <div className="mt-24 flex gap-20 mb-10 mx-auto w-fit">
            {achievements.map((el) => (
                <motion.div
                    className="text-white flex items-center w-[240px] border-accent text-center border-2 rounded-full px-5 py-3 gap-3"
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
