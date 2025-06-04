import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/file.svg" alt="BMSBF Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold">BMSBF</span>
            </div>
            <p className="text-gray-400">
              Leading provider of professional mining services in Burkina Faso
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/mining" className="text-gray-400 hover:text-white transition-colors">
                  Mining Operations
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-400 hover:text-white transition-colors">
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/safety" className="text-gray-400 hover:text-white transition-colors">
                  Safety Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Burkina Faso</li>
              <li>Email: contact@bmsbf.com</li>
              <li>Phone: +226 XX XX XX XX</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BMSBF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
