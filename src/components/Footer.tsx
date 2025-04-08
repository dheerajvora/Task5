import { Facebook, Instagram, Twitter } from "lucide-react"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


export function Footer() {
  return (
    <div className="bg-dark-blue">
      <div className="bg-gray-col">
        <div className="container mx-auto flex justify-between items-center px-4 py-10 md:py-14 ">
          <h3 className="text-xl font-bold text-dark-blue ">Bandage</h3>
          <div className="flex items-center gap-3">
            <FaFacebook className="w-6 h-6 text-primary" />
            <FaInstagram className="w-6 h-6 text-primary" />
            <FaTwitter className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
      <footer className="bg-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h5 className="font-bold text-dark-blue mb-5">Company Info</h5>
              <ul className="space-y-3 text-muted">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="md:col-span-1">
              <h5 className="font-bold text-dark-blue mb-5">Features</h5>
              <ul className="space-y-3 text-muted">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    User Analytic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="md:col-span-1">
              <h5 className="font-bold text-dark-blue mb-5">Resources</h5>
              <ul className="space-y-3 text-muted">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    IOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-2">
              <h5 className="font-bold text-dark-blue mb-5">Get In Touch</h5>
              <div className="flex gap-2 relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-field"
                />
                <button className="bg-primary button-field absolute right-0 top-0">Subscribe</button>
              </div>
              <p className="text-xs text-muted mt-2">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-light-gray py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted">Made With Love By Finland All Right Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
