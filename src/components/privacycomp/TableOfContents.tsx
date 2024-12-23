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
    { id: 'information-we-collect', title: '1. Information We Collect' },
    { id: 'how-we-use-your-information', title: '2. How We Use Your Information' },
    { id: 'sharing-your-information', title: '3. Sharing Your Information' },
    { id: 'data-retention', title: '4. Data Retention' },
    { id: 'security-of-your-information', title: '5. Security of Your Information' },
    { id: 'your-rights', title: '6. Your Rights' },
    { id: 'childrens-privacy', title: '7. Children\'s Privacy' },
    { id: 'changes-to-this-privacy-policy', title: '8. Changes to This Privacy Policy' },
    { id: 'contact-us', title: '9. Contact Us' },
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

