import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20"
    >
      <div className="container-custom px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1 shadow-lg mb-6"
          >
            <img
              src="/images/profile.jpg"
              alt="Shivani Daragani"
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="heading-1 mb-4 text-gray-900">Shivani Daragani</h1>
            <p className="text-xl md:text-2xl text-primary-teal font-semibold mb-2">
              Medical Business Associate
            </p>
            <p className="text-lg text-gray-600 mb-6">
              GlaxoSmithKline Pharmaceuticals Ltd
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-gray-700 mb-8"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-primary-blue" />
              <span className="text-sm md:text-base">
                shivani.daragani@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-primary-teal" />
              <span className="text-sm md:text-base">+91 6281301387</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent-green" />
              <span className="text-sm md:text-base">Hyderabad, India</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://linkedin.com/in/shivani-daragani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn Profile
            </a>
            <a
              href="/resume/Shivani_Daragani_Resume.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
