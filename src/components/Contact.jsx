import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10"> 
        <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
          className="my-10 text-center text-4xl">Get in touch
        </motion.h1>

          <motion.div 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-5 w-full items-center text-center">
            <button 
                className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg border border-black hover:bg-white hover:text-black transition duration-300 ease-in-out"
                onClick={() => {
                    const contactSection = document.getElementById('Contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}>
                Contact Me 
            </button>
          </motion.div>

        <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
          className="my-5 pt-10 text-center text-1xl"> Copyright © 2024 Joshua Subido. All Rights Reserved
        </motion.h1>
    </div>
  )
}

export default Contact