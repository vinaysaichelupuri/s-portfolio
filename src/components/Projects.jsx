import { motion } from "framer-motion";
import { FaFlask, FaHeartbeat } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Prescription Pattern Analysis of Drugs Used in Diabetic Patients",
      icon: FaFlask,
      gradient: "from-blue-500 to-blue-600",
      department: "Cardiology Department",
      achievements: [
        {
          text: "15% improvement in patient glycemic control and cardiovascular outcomes",
        },
        {
          text: "10% reduction in cardiovascular events through ADA/AHA compliance",
        },
        {
          text: "20% increase in medication adherence with personalized plans",
        },
        {
          text: "12% reduction in adverse effects through polypharmacy management",
        },
      ],
    },
    {
      title: "Pancreatic Health Insights",
      icon: FaHeartbeat,
      gradient: "from-teal-500 to-teal-600",
      department: "Research Project",
      achievements: [
        { text: "Enhanced understanding of endocrine and exocrine functions" },
        {
          text: "Examined pathophysiology and treatment modalities for pancreatic diseases",
        },
        {
          text: "Research on artificial pancreas technology and immunotherapy",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">Research Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Clinical research demonstrating analytical skills and evidence-based
            approach
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card border-2 border-gray-100"
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <project.icon className="text-3xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-teal-600 text-sm font-medium">
                    {project.department}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                {project.achievements.map((achievement, achIndex) => (
                  <div
                    key={achIndex}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
