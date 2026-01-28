import { motion } from "framer-motion";
import { FaBriefcase, FaAward, FaChartLine } from "react-icons/fa";

const About = () => {
  const stats = [
    {
      icon: FaBriefcase,
      value: "1+",
      label: "Years Experience",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: FaAward,
      value: "10+",
      label: "Awards & Achievements",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: FaChartLine,
      value: "15%",
      label: "Avg. Performance Increase",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Pharmaceutical Professional
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Passionate{" "}
                  <span className="text-blue-600 font-semibold">
                    Medical Business Associate
                  </span>{" "}
                  at GlaxoSmithKline Pharmaceuticals Ltd with a strong
                  foundation in pharmaceutical sciences and clinical research.
                </p>
                <p>
                  Specialized in providing pharmaceutical support to healthcare
                  professionals, analyzing market trends, and ensuring optimal
                  medication access for patients. Proven track record of
                  improving product utilization and patient outcomes through
                  evidence-based strategies.
                </p>
                <p>
                  Graduated with a{" "}
                  <span className="text-teal-600 font-semibold">
                    Bachelor of Pharmacy
                  </span>{" "}
                  from St. Peter's Institute of Pharmaceutical Sciences, with
                  expertise in pharmacology, clinical pharmacotherapy, and
                  pharmaceutical regulations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats Cards */}
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}
                  >
                    <stat.icon className="text-3xl text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Key Highlights */}
            <div className="card">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Key Highlights
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Gold Medal Winner - Advance Induction Program, GSK
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    1st Detailing Champion at GlaxoSmithKline
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Treasurer, IPA Student Forum (2023-2024)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Outstanding Performance in Academics & Extension Activities
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
