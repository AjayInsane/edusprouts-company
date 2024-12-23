import { Phone, Mail, MapPin, Facebook, LinkedinIcon as LinkedIn } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
          <Phone className="h-6 w-6 text-purple-600" />
          <a href="tel:+919058858411" className="text-gray-700 font-medium">+91 9058858411</a>
        </div>
        <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
          <Mail className="h-6 w-6 text-blue-600" />
          <a href="mailto:support@edusprouts.in" className="hover:text-gray-900">support@edusprouts.in</a>
        </div>
        <div className="flex items-center space-x-4 p-3 bg-indigo-50 rounded-lg">
          <MapPin className="h-6 w-6 text-indigo-600" />
          <span className="text-gray-700 font-medium">Vikashnagar, Dakpathar, Dehradun, Uttarakhand (248125)</span>
        </div>
      </div>
      <div className="pt-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
            <span className="sr-only">LinkedIn</span>
            <LinkedIn className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  )
}

