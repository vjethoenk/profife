const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">DevPortfolio</h3>
          <p>
            Passionate full-stack developer creating innovative solutions with
            modern technologies. Specialized in React, Node.js, and cloud
            architectures.
          </p>
          <div className="flex space-x-4 mt-4 text-white">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["About Me", "Projects", "Skills", "Blog"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-blue-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2">
            {[
              "Web Development",
              "Mobile Apps",
              "API Development",
              "Consulting",
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-blue-400">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2024 DevPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
