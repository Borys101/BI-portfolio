import Content from "./Content";
import Image from "./Image";

const Home = () => {
    return (
        <section
            className="flex flex-wrap mt-16 justify-center lg:justify-between lg:w-full text-center lg:text-start"
            id="#home"
        >
            <Content />
            <Image />
        </section>
    );
};

export default Home;
