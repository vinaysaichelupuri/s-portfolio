import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendar,
  FaBook,
} from "react-icons/fa";

const Education = () => {
  const coursework = [
    "Human Anatomy and Physiology",
    "Pharmaceutics",
    "Pathophysiology",
    "Pharmacology of Drugs",
    "Toxicology",
    "Pharmacognosy and Phytochemistry",
    "Herbal Drug Technology",
    "Pharmaceutical Biotechnology",
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card border-2 border-blue-100">
            {/* Degree Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <FaGraduationCap className="text-4xl text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Bachelor of Pharmacy
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaUniversity className="text-blue-500" />
                    <span>
                      St. Peter's Institute of Pharmaceutical Sciences
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-teal-500" />
                    <span>Nov 2020 – July 2024</span>
                  </div>
                </div>
                <p className="text-teal-600 mt-2 font-medium">
                  Warangal, India
                </p>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center gap-3 mb-6">
                <FaBook className="text-2xl text-purple-500" />
                <h4 className="text-xl font-semibold text-gray-900">
                  Relevant Coursework
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Comprehensive pharmaceutical education covering drug
                development, clinical applications, regulatory compliance, and
                patient care. Strong foundation in both theoretical knowledge
                and practical pharmaceutical sciences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
