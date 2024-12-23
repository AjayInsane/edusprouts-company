"use client";
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'
import { Facebook, Instagram, Linkedin, Send, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-gray-900 text-xl font-bold">Edusprouts</h2>
            <p className="text-sm">Accessible AI Education and Career Services for a Brighter Tomorrow.</p>
          </div>
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-gray-900 transition-colors">Solutions</Link></li>
              <li><Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link></li>
              <li><Link href="/team" className="hover:text-gray-900 transition-colors">Team</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Vikashnagar, Dakpathar</p>
              <p>Dehradun, Uttarakhand (248125)</p>
              <p>
                <a href="mailto:support@edusprouts.in" className="hover:text-gray-900 transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  support@edusprouts.in
                </a>
              </p>
              <p>
                <a href="tel:+919058858411" className="hover:text-gray-900 transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 9058858411
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-2 mb-4">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                aria-label="Email for newsletter"
              />
              <Button 
                type="submit" 
                size="icon" 
                variant="outline"
                onClick={() => toast("Thank you for subscribing!")}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm">
          <div className="flex flex-wrap justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Edusprouts.Pvt.Ltd. All rights reserved.</p>
            <nav className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-900 transition-colors">T&C</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

