import {
  FaHeart,
  FaPrescriptionBottle,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-sm">
                <FaPrescriptionBottle className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Shivani Daragani
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Medical Business Associate passionate about pharmaceutical
              excellence and patient care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/shivani-daragani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="text-xl" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:shivani.daragani@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {currentYear} Shivani Daragani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
