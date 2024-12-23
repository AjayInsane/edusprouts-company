import ContactForm from '@/components/testing-components/contact-form'
import ContactInfo from '@/components/testing-components/contactinfo'
import Map from '@/components/testing-components/contactmap'

export default function ContactPageMain() {
  return (
    <div className="border">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-600">We&apos;re here to help and answer any question you might have</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <ContactInfo />
            <Map />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

