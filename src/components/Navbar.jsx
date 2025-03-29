import logo from "../assets/SsLogo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (<nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img  className="mx-2 w-16"src={logo} alt="logo"/> 
    </div>
    <div className="m-8 flex itens-center justify-center gap-4 text-2xl">
         <a href="https://github.com/SakshiSharan1912" ><FaGithub /></a>
         <a href="https://www.linkedin.com/in/sakshi-sharan-330b02260/" ><FaLinkedin/></a>
         <a href="https://www.instagram.com/she_shine264/?next=%2F&hl=en" ><FaInstagram/></a>

    </div>
  </nav>
  );
};

export default Navbar