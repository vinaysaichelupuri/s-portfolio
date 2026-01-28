import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "shivani.daragani@gmail.com",
      href: "mailto:shivani.daragani@gmail.com",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 6281301387",
      href: "tel:+916281301387",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shivani-daragani",
      href: "https://linkedin.com/in/shivani-daragani",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
      gradient: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Let's connect! Feel free to reach out for collaborations,
            opportunities, or just to say hello.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="card flex items-center gap-4 block"
                    >
                      <div
                        className={`w-14 h-14 rounded-lg bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        <contact.icon className="text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-500 text-sm mb-1">
                          {contact.label}
                        </p>
                        <p className="text-gray-900 font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-lg bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        <contact.icon className="text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-500 text-sm mb-1">
                          {contact.label}
                        </p>
                        <p className="text-gray-900 font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card border-2 border-blue-100 flex flex-col justify-center"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FaPaperPlane className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Let's Collaborate
                </h3>
                <p className="text-gray-600 mb-6">
                  Open to opportunities in pharmaceutical business development,
                  clinical research, and healthcare innovation.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:shivani.daragani@gmail.com"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/shivani-daragani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <FaLinkedin />
                  Connect on LinkedIn
                </a>
              </div>

              {/* Availability Badge */}
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-center">
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for Opportunities
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
