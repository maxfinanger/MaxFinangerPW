const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white mt-auto py-3 footer">
            <div className="container text-center">
                <p>
                    &copy; {new Date().getFullYear()} Max Dyrø Finanger - All
                    Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
