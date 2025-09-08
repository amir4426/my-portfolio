import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Amir Khan</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center mt-4 space-x-4 sm:space-x-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="my-1 text-sm hover:text-purple-500 sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center mt-6 space-x-4">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/tarun.kaushik.3511041/",
            },
            { icon: <FaGithub />, link: "https://github.com/amir4426" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/amir-khan-34a38a303/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-transform transform hover:text-purple-500 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="mt-6 text-sm text-gray-400">
          © 2025 Amir Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
