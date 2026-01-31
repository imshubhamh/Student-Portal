import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200/20 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-6">
          
          {/* BRAND */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900">
              SPYIschool
            </h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-4 text-gray-500">
              <Facebook className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
              <Github className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
              <Youtube className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Automation</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>Submit ticket</li>
              <li>Documentation</li>
              <li>Guides</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-gray-300 py-6">
          <p className="text-sm text-gray-500">
            © 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
