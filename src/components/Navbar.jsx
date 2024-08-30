import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <section id="Contact"> 
      <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

          <a href="https://www.linkedin.com/in/joshua-subido-a25168283/" target="_blank">
            <FaLinkedin className="hover:text-blue-700"/>
          </a>
 
          <a href="https://github.com/joshuasubidocareer" target="_blank">
            <FaGithub className="hover:text-gray-600" />
          </a>

          <a href="https://www.instagram.com/jukabidoo/" target="_blank">
            <FaInstagram className="hover:text-pink-500" />
          </a>  
      </div>
    </nav>
  </section>
  )
}

export default Navbar