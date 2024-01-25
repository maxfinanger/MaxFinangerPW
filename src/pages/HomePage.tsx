import { Carousel } from "react-bootstrap";

const HomePage = () => {
    return (
        <div className="bg-dark p-3 mb-5">
            <h1 className="text-center text-white">
                Welcome to My Professional Portfolio
            </h1>
            <p className="text-center text-white">
                Hi there! I'm Max Dyrø Finanger, and I'm passionate about coding
                and web development. This is my digital space where I showcase
                my work, share insights, and connect with like-minded
                professionals. Explore my portfolio and discover how I can make
                a difference in the IT and programming fields.
            </p>
            <br />
            <Carousel />
        </div>
    );
};

export default HomePage;
