'use client'

import { useState, useEffect } from 'react'

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -80% 0px' }
    )

    document.querySelectorAll('h2').forEach((h2) => observer.observe(h2))

    return () => observer.disconnect()
  }, [])

  const sections = [
    { id: 'acceptance-of-terms', title: '1. Acceptance of Terms' },
    { id: 'use-of-services', title: '2. Use of Services' },
    { id: 'account-registration', title: '3. Account Registration' },
    { id: 'intellectual-property', title: '4. Intellectual Property' },
    { id: 'payment-and-subscriptions', title: '5. Payment and Subscriptions' },
    { id: 'limitation-of-liability', title: '6. Limitation of Liability' },
    { id: 'termination', title: '7. Termination' },
    { id: 'changes-to-terms', title: '8. Changes to Terms' },
    { id: 'governing-law', title: '9. Governing Law' },
    { id: 'contact-us', title: '10. Contact Us' },
  ]

  return (
    <nav className="sticky top-4 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block text-sm hover:text-blue-600 transition-colors ${
                activeSection === section.id ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

