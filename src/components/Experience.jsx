import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendar,
  FaMapMarkerAlt,
  FaChartLine,
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Territory Business Executive – Cardiovascular (Vymada)",
      company: "Novartis Healthcare Pvt. Ltd.",
      date: "July 2025 – Present",
      location: "Hyderabad, India",
      products: ["Vymada (Sacubitril/Valsartan)"],
      achievements: [
        { text: "Lead institutional business for Vymada across Apollo, Yashoda, and KIMS hospitals.", impact: "Incremental prescription growth" },
        { text: "Executed Hub & Spoke engagement model connecting KOLs.", impact: "Strategic account planning" },
        { text: "Organized in-hospital scientific meetings aligning with heart failure guidelines.", impact: "Evidence-based dissemination" },
        { text: "Participated in CSI – Year in Heart Failure conference and Fellows India Conference.", impact: "Academic engagement" }
      ]
    },
    {
      role: "Territory Business Executive",
      company: "GlaxoSmithKline Pharmaceuticals Ltd.",
      date: "September 2024 – July 2025",
      location: "Warangal, India",
      products: ["Eltroxin", "Ceftum", "Supacef", "CCM", "Calpol T"],
      achievements: [
        { text: "Conducted scientific discussions on pharmacology and therapeutic use of general medicine brands.", impact: "Prescription adoption" },
        { text: "Supported physicians in therapy selection by explaining indications and patient safety.", impact: "Treatment adherence" },
        { text: "Ensured adherence to pharmaceutical SOPs and ethical promotion guidelines.", impact: "Regulatory compliance" },
        { text: "Recognized during Advance Induction Program for strong performance.", impact: "Execution discipline" }
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Company Header */}
              <div className="card border-2 border-blue-100 mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <FaBriefcase className="text-4xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-teal-600 mb-3 font-semibold">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-blue-500" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-teal-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Products */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Key Pharmaceutical Products
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.products.map((product, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-lg bg-white text-blue-600 text-sm font-medium border border-blue-200 shadow-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {exp.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card border-l-4 border-blue-500"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {achievement.text}
                        </h4>
                        <div className="flex items-center gap-2 text-teal-600">
                          <FaChartLine className="text-sm" />
                          <span className="text-sm font-medium">
                            {achievement.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
