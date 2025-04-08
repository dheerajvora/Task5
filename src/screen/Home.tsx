import { ChevronDown, Heart, Menu, Phone, Search, ShoppingCart, X } from "lucide-react"
import { useState } from "react"
import { Footer } from "../components/Footer"
import Banner from "../components/Banner"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { Header } from "../components/Header"
import FeaturedPosts from "../components/FeaturedPosts"
import BestSeller from "../components/BestSeller"
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <BestSeller />
      <FeaturedPosts />
      <Footer />
    </div>
  )
}
