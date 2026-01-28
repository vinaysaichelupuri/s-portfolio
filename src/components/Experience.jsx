import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendar,
  FaMapMarkerAlt,
  FaChartLine,
} from "react-icons/fa";

const Experience = () => {
  const achievements = [
    {
      text: "Provided Pharmaceutical Support to Healthcare Professionals",
      impact: "15% increase in product utilization",
    },
    {
      text: "Analyzed Market and Patient Needs",
      impact: "20% increase in product reach",
    },
    {
      text: "Ensured Effective Brand Positioning",
      impact: "Increased patient adherence",
    },
    {
      text: "Demand Forecasting and Inventory Management",
      impact: "25% improvement in order accuracy",
    },
    {
      text: "Compliance with Pharmaceutical Guidelines",
      impact: "100% regulatory compliance",
    },
    {
      text: "Developed Territory-Based Business Plans",
      impact: "15% increase in medication dispensation",
    },
    {
      text: "Educated HCPs on Drug Mechanisms",
      impact: "Informed decision-making on dosage forms",
    },
  ];

  const products = ["Ceftum", "Supacef", "Eltroxin", "CCM", "Calpol T"];

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Company Header */}
          <div className="card border-2 border-blue-100 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <FaBriefcase className="text-4xl text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Medical Business Associate
                </h3>
                <p className="text-xl text-teal-600 mb-3 font-semibold">
                  GlaxoSmithKline Pharmaceuticals Ltd
                </p>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-500" />
                    <span>September 2024 – Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-teal-500" />
                    <span>Mumbai, India</span>
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
                {products.map((product, index) => (
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
            {achievements.map((achievement, index) => (
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
      </div>
    </section>
  );
};

export default Experience;
