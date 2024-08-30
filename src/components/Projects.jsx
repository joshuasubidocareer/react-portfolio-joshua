import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Projects = () => {
  const [currentMedia, setCurrentMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handlePlayMedia = (mediaUrl, mediaIndex) => {
    setCurrentMedia(mediaUrl);
    setCurrentMediaIndex(mediaIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMedia(null);
    setCurrentMediaIndex(0);
  };

  const isYouTubeUrl = (url) => url.includes("youtube.com") || url.includes("youtu.be");
  const isImageUrl = (url) => /\.(jpg|jpeg|png|gif)$/.test(url);

  const showNextMedia = (project) => {
    const nextIndex = (currentMediaIndex + 1) % project.play.length;
    setCurrentMedia(project.play[nextIndex]);
    setCurrentMediaIndex(nextIndex);
  };

  const showPreviousMedia = (project) => {
    const prevIndex = (currentMediaIndex - 1 + project.play.length) % project.play.length;
    setCurrentMedia(project.play[prevIndex]);
    setCurrentMediaIndex(prevIndex);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img 
                src={project.image}
                width={150}
                height={150} 
                alt={project.title} 
                className="mb-6 rounded cursor-pointer" 
                onClick={() => handlePlayMedia(project.image, 0)}  // Added click event to open modal with image
              />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap items-center w-full">
                <div className="w-full lg:w-1/2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-full lg:w-1/2 flex justify-end">
                  {project.video.map((videoText, videoIndex) => (
                    <button 
                      key={videoIndex} 
                      className="w-full max-w-xl lg:w-1/2 my-3 py-2 bg-purple-500 text-white font-semibold rounded-lg border border-black hover:bg-white hover:text-black transition duration-300 ease-in-out"
                      onClick={() => handlePlayMedia(project.play[videoIndex], videoIndex)}
                    >
                      {videoText}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
            <button 
              className="absolute top-2 right-2 text-black hover:text-gray-500" 
              onClick={closeModal}
            >
              ✖
            </button>
            <div className="flex items-center">
              {isImageUrl(currentMedia) && (
                <>
                  <button 
                    className="text-3xl font-bold text-gray-700 hover:text-gray-900" 
                    onClick={() => showPreviousMedia(PROJECTS.find(p => p.play.includes(currentMedia)))}
                  >
                    ◀
                  </button>
                  <div className="flex-1 mx-4">
                    <img src={currentMedia} alt="Project Media" className="w-full h-auto rounded-lg" />
                  </div>
                  <button 
                    className="text-3xl font-bold text-gray-700 hover:text-gray-900" 
                    onClick={() => showNextMedia(PROJECTS.find(p => p.play.includes(currentMedia)))}
                  >
                    ▶
                  </button>
                </>
              )}
              {isYouTubeUrl(currentMedia) && (
                <div className="flex-1 mx-4">
                  <iframe
                    className="w-full h-64"
                    src={currentMedia}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {!isImageUrl(currentMedia) && !isYouTubeUrl(currentMedia) && (
                <div className="flex-1 mx-4">
                  <video controls className="w-full">
                    <source src={currentMedia} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
