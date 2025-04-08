import { ChevronDown, Heart, Menu, Phone, Search, ShoppingCart, X } from "lucide-react"
import { useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
      <div className="bg-dark-blue text-white py-3 hidden md:block">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M14.5 2H1.5C1.224 2 1 2.224 1 2.5V11.5C1 11.776 1.224 12 1.5 12H14.5C14.776 12 15 11.776 15 11.5V2.5C15 2.224 14.776 2 14.5 2Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M3 4L8 8L13 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm">michelle.rivera@example.com</span>
            </div>
          </div>

          <div className="text-sm mb-2 md:mb-0 text-center">Follow Us and get a chance to win 80% off</div>

          <div className="flex items-center gap-2">
            <span className="text-sm hidden sm:inline">Follow Us :</span>
            <div className="flex items-center gap-2">
              <FaInstagram className="h-4 w-4" />
              <FaYoutube className="h-4 w-4" />
              <FaFacebook className="h-4 w-4" />
              <FaTwitter className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 border-b relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-dark-blue">
              Bandage
            </a>

            <nav className="hidden md:flex items-center gap-4">
              <a href="/" className="text-dark-blue font-medium">
                Home
              </a>
              <div className="flex items-center gap-1 text-dark-blue font-medium">
                <a href="/shop">Shop</a>
                <ChevronDown className="h-4 w-4 text-muted" />
              </div>
              <a href="/about" className="text-muted font-medium">
                About
              </a>
              <a href="/blog" className="text-muted font-medium">
                Blog
              </a>
              <a href="/contact" className="text-muted font-medium">
                Contact
              </a>
              <a href="/pages" className="text-muted font-medium">
                Pages
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a href="/login" className="hidden md:flex items-center gap-1 text-primary font-medium">
              <img src="/images/icon/user.svg" alt="login" />
              Login / Register
            </a>
            <Search className="h-5 w-5 text-dark-blue" color="#23A6F0" />
            <div className="flex items-center gap-1">
              <ShoppingCart className="h-5 w-5 text-dark-blue" color="#23A6F0"/>
              <span className="text-primary hidden sm:block">1</span>
            </div>
            <div className="flex items-center gap-1 hidden sm:flex">
              <Heart className="h-5 w-5 text-dark-blue" color="#23A6F0" />
              <span className="text-primary">1</span>
            </div>
            <button className="md:hidden ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6 text-dark-blue" /> : <Menu className="h-6 w-6 text-dark-blue" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 border-b shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="/" className="text-dark-blue font-medium py-2 border-b border-gray-100">
                Home
              </a>
              <div className="flex items-center justify-between text-dark-blue font-medium py-2 border-b border-gray-100">
                <a href="/shop">Shop</a>
                <ChevronDown className="h-4 w-4 text-muted" />
              </div>
              <a href="/about" className="text-muted font-medium py-2 border-b border-gray-100">
                About
              </a>
              <a href="/blog" className="text-muted font-medium py-2 border-b border-gray-100">
                Blog
              </a>
              <a href="/contact" className="text-muted font-medium py-2 border-b border-gray-100">
                Contact
              </a>
              <a href="/pages" className="text-muted font-medium py-2 border-b border-gray-100">
                Pages
              </a>
              <a href="/login" className="flex items-center gap-1 text-primary font-medium py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#23A6F0">
                  <path
                    d="M8.00001 8C9.84095 8 11.3334 6.50762 11.3334 4.66667C11.3334 2.82572 9.84095 1.33334 8.00001 1.33334C6.15906 1.33334 4.66668 2.82572 4.66668 4.66667C4.66668 6.50762 6.15906 8 8.00001 8Z"
                    stroke="#23A6F0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.7267 14.6667C13.7267 12.0867 11.16 10 8.0000 10C4.84002 10 2.27336 12.0867 2.27336 14.6667"
                    stroke="#23A6F0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Login / Register
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};