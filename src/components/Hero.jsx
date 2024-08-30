import {ABOUT_TEXT, CONTACT} from "../constants"
import profilePic from "../assets/myProfile.jpg"
import { FaLocationDot } from "react-icons/fa6";
import resume from "../assets/resume.pdf"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
    const handleDownload = () => {
        window.open(resume, "_blank");
    };

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 items-center lg:p-20">
                    <div className="flex flex-col lg:items-start">
                        <motion.p 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl font-light tracking-tighter">
                            Hello, I'm
                        </motion.p>

                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-10 text-6xl font-thin tracking-tight lg:text-8xl">
                            Joshua Subido 
                        </motion.h1>

                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Software Developer
                        </motion.span>

                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {ABOUT_TEXT}
                        </motion.p>

                        <motion.div 
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="max-w-xl">

                            <div className="flex flex-wrap mb-2 items-center">
                                <div 
                                    className="rounded-2xl border-4 border-neutral-800 p-2 mr-2">
                                    <FaLocationDot className="text-2xl"/>
                                </div>
                                <div className=""> {CONTACT.address} </div>
                            </div>

                            <div className="flex flex-wrap mb-2 items-center">
                                <div
                                    className="rounded-2xl border-4 border-neutral-800 p-2 mr-2">
                                    <IoCall className="text-2xl"/>
                                </div>
                                <div className=""> {CONTACT.phoneNo} </div>
                            </div>

                            <div className="flex flex-wrap items-center">
                                <div
                                    className="rounded-2xl border-4 border-neutral-800 p-2 mr-2">
                                    <MdEmail className="text-2xl"/>
                                </div>
                                <div className=""> {CONTACT.email} </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-wrap full-w-xl">
                            <motion.div 
                                variants={container(1.5)}
                                initial="hidden"
                                animate="visible"
                                className="my-5 w-full">
                                <button 
                                    className="px-6 py-2 bg-white text-black font-semibold rounded-lg border border-black hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out"
                                    onClick={handleDownload}>
                                    Download CV 
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-20">
                    <div className="flex justify-center">
                        <motion.img 
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1.5}}
                            className="rounded-3xl w-96 h-auto"
                            src={profilePic} 
                            alt="Joshua Subido" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero