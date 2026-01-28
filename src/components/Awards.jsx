import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate, FaStar } from "react-icons/fa";

const Awards = () => {
  const awards = [
    {
      icon: FaMedal,
      gradient: "from-yellow-400 to-yellow-600",
      title: "Gold Medal - 1st Winner-up Award",
      organization: "GlaxoSmithKline",
      date: "December 2024",
      highlight: true,
    },
    {
      icon: FaTrophy,
      gradient: "from-blue-500 to-blue-600",
      title: "1st Detailing Champion",
      organization: "GlaxoSmithKline",
      date: "March 2024",
      highlight: true,
    },
    {
      icon: FaStar,
      gradient: "from-teal-500 to-teal-600",
      title: "Treasurer - IPA Student Forum",
      organization: "St. Peter's Student Chapter",
      date: "2023-2024",
      highlight: false,
    },
    {
      icon: FaCertificate,
      gradient: "from-purple-500 to-purple-600",
      title: "Clinical Skill Development Training",
      organization: "ISPOR India Telangana Chapter",
      date: "February 2024",
      highlight: false,
    },
    {
      icon: FaTrophy,
      gradient: "from-pink-500 to-pink-600",
      title: "Smt. Thumma Rajamma Memorial Award",
      organization: "St. Peter's Institute",
      date: "2024",
      highlight: true,
    },
    {
      icon: FaMedal,
      gradient: "from-indigo-500 to-indigo-600",
      title: "1st Place - Poster Presentation (BRD-8 in Glioblastoma)",
      organization: "Research Conference",
      date: "2024",
      highlight: false,
    },
    {
      icon: FaMedal,
      gradient: "from-green-500 to-green-600",
      title: "1st Place - Poster Presentation (TPA in Brain Stroke)",
      organization: "Medical Conference",
      date: "2024",
      highlight: false,
    },
    {
      icon: FaStar,
      gradient: "from-orange-500 to-orange-600",
      title: "2nd Place - World Hepatitis Day",
      organization: "Health Awareness Event",
      date: "2024",
      highlight: false,
    },
  ];

  return (
    <section id="awards" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Recognition for excellence in pharmaceutical practice, research, and
            leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card ${award.highlight ? "border-2 border-yellow-300 shadow-md" : "border border-gray-100"}`}
            >
              {/* Highlight Badge */}
              {award.highlight && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${award.gradient} flex items-center justify-center mb-4 shadow-md`}
              >
                <award.icon className="text-3xl text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {award.title}
              </h3>
              <p className="text-teal-600 text-sm mb-1 font-medium">
                {award.organization}
              </p>
              <p className="text-gray-500 text-xs">{award.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50">
            <div className="text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-600 text-sm">Total Awards</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-purple-50">
            <div className="text-4xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-600 text-sm">1st Place Wins</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-4xl font-bold gradient-text mb-2">2</div>
            <div className="text-gray-600 text-sm">Gold Medals</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-blue-50">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-600 text-sm">Dedication</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
