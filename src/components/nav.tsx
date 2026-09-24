import logo1 from "../assets/logo.png"


const Nav = () => {
    return (
        <nav className = "bg-red-100">


            <div className="container mx-auto flex items-center justify-between py-4">
                <img src={logo1} alt="Logo" />


                <ul className="flex space-x-4 items-center">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>

    );
};

export default Nav;