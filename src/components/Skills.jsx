import { motion } from "framer-motion";
import {
  FaPills,
  FaFlask,
  FaUserMd,
  FaClipboardCheck,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Pharmaceutical Knowledge",
      icon: FaPills,
      gradient: "from-blue-500 to-blue-600",
      skills: [
        "Pharmacology",
        "Medicinal Chemistry",
        "Clinical Pharmacotherapy",
      ],
    },
    {
      title: "Clinical Research",
      icon: FaFlask,
      gradient: "from-teal-500 to-teal-600",
      skills: [
        "Prescription Pattern Analysis",
        "Patient Adherence Studies",
        "Clinical Guideline Evaluation",
      ],
    },
    {
      title: "Project Management",
      icon: FaClipboardCheck,
      gradient: "from-purple-500 to-purple-600",
      skills: [
        "Budgeting",
        "Resource Allocation",
        "Business Planning",
        "Event Coordination",
      ],
    },
    {
      title: "Regulatory Compliance",
      icon: FaUserMd,
      gradient: "from-indigo-500 to-indigo-600",
      skills: [
        "Pharmaceutical Regulations",
        "Standard Operating Procedures (SOPs)",
        "Safety Practices",
      ],
    },
    {
      title: "Innovative Problem Solving",
      icon: FaLightbulb,
      gradient: "from-orange-500 to-orange-600",
      skills: [
        "Personalized Treatment Plans",
        "Pharmacological Strategy Development",
      ],
    },
    {
      title: "Community Engagement",
      icon: FaUsers,
      gradient: "from-pink-500 to-pink-600",
      skills: [
        "Health Awareness Initiatives",
        "Extension Activities",
        "Public Health Promotion",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive skill set spanning pharmaceutical sciences, clinical
            research, and business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md`}
                >
                  <category.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
