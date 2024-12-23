import { ArrowRightIcon, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 ">
          <h1 className="text-3xl font-bold text-gray-900">About Eduprouts</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 ">
        {/* Company Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transforming Education for a Better Tomorrow</h2>
              <p className="text-lg text-gray-700 mb-6">
              Edusprouts Private Limited is transforming the education landscape by delivering innovative solutions that combine cutting-edge technology, affordability, and personalized learning experiences. We are dedicated to bridging educational gaps with comprehensive semester-wise courses, industry-focused skill development programs, and career-oriented placement services, empowering students from all walks of life to achieve their full potential.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
                  <p className="text-gray-600">To make quality education accessible and affordable for all, empowering students to reach their full potential.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
                  <p className="text-gray-600">To create a world where every student has access to innovative, technology-driven education that prepares them for the future.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="EduSprouts Learning Environment"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-blue-100 transition-all duration-300 hover:shadow-lg hover:border-blue-300">
                <div className="text-blue-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Innovative Approach</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ourApproach.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            {timeline.map((event, index) => (
              <div key={index} className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'} items-center w-full`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100 transition-all duration-300 hover:shadow-lg hover:border-blue-300">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{event.date}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shaping the Future of Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureGoals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-blue-100 transition-all duration-300 hover:shadow-lg hover:border-blue-300">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{goal.title}</h3>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {goal.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-600 text-white py-12 px-4 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Join Us in Revolutionizing Education</h2>
          <p className="text-xl mb-8">Be part of our mission to make quality education accessible to all</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300">
              Get Involved
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="/team" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-300">
              Meet Our Team
              <Users className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

const whatWeDo = [
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    title: "Comprehensive Courses",
    description: "Offering semester-wise courses tailored to various educational streams, ensuring students have access to curriculum-aligned content."
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: "Skill Development",
    description: "Providing practical, industry-relevant skills through specialized programs to enhance students' employability and career prospects."
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: "Placement Services",
    description: "Connecting students with job opportunities through our extensive network of industry partners and personalized career guidance."
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: "AI-Powered Learning",
    description: "Leveraging artificial intelligence to create personalized learning experiences, adaptive assessments, and real-time support for students."
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: "Community Learning",
    description: "Fostering a collaborative learning environment where students can interact, share knowledge, and grow together."
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Flexible Learning",
    description: "Offering on-demand access to educational content, allowing students to learn at their own pace and convenience."
  },
]

const ourApproach = [
  {
    title: "Technology Integration",
    description: "Leveraging AI and machine learning to create adaptive learning paths and personalized experiences for each student."
  },
  {
    title: "Industry Collaboration",
    description: "Partnering with leading companies to ensure our curriculum aligns with current industry needs and trends."
  },
  {
    title: "Continuous Innovation",
    description: "Constantly updating our platforms and content to incorporate the latest educational methodologies and technologies."
  },
  {
    title: "Holistic Development",
    description: "Focusing on both academic excellence and soft skills development to produce well-rounded graduates."
  },
  {
    title: "Affordable Access",
    description: "Implementing a pricing model that makes quality education accessible to students from all economic backgrounds."
  },
  {
    title: "Data-Driven Improvement",
    description: "Utilizing analytics to continuously refine our teaching methods and student support systems."
  },
]

const timeline = [
  {
    date: "September 12, 2024",
    description: "Launched EduSprouts YouTube channel, reaching 1,000 subscribers within the first week."
  },
  {
    date: "September 20, 2024",
    description: "Published first mini-series 'Success Stories of Indian Students', gaining 3,000 views on the first video."
  },
  {
    date: "October 10, 2024",
    description: "Expanded digital presence by creating a LinkedIn page for CollegeSe, reaching 100 followers within the first month."
  },
  {
    date: "October 20, 2024",
    description: "Started collaborations with students and influencers to amplify the brand on social media."
  },
  {
    date: "November 15, 2024",
    description: "Completed 10 video scripts and 15 articles for EduSprouts and CollegeSe blogs, initiating partnerships with colleges."
  },
  {
    date: "November 26, 2024",
    description: "Officially registered EduSprouts as a private limited company under the Companies Act, 2013."
  },
  {
    date: "December 12, 2024",
    description: "CollegeSe LinkedIn page crossed 100 subscribers. Released first detailed blog series on 'Future of Personalized Learning in India'."
  },
  {
    date: "December 20, 2024",
    description: "Began connecting with students from Oriental College through WhatsApp groups to gather platform feedback."
  },
]

const futureGoals = [
  {
    title: "Global Education Ecosystem",
    description: "We aim to create a comprehensive global education ecosystem that seamlessly connects learners, educators, and employers.",
    points: [
      "Expand our course offerings to cover all major fields of study",
      "Develop partnerships with international universities and organizations",
      "Create a global network of mentors and industry experts"
    ]
  },
  {
    title: "Advanced AI Integration",
    description: "Our goal is to push the boundaries of AI in education, creating more intelligent and responsive learning systems.",
    points: [
      "Develop AI tutors capable of natural language interaction",
      "Implement predictive analytics to identify and address learning gaps",
      "Create immersive VR and AR learning experiences powered by AI"
    ]
  },
  {
    title: "Workforce Development",
    description: "We're committed to bridging the skills gap and preparing students for the jobs of the future.",
    points: [
      "Develop industry-specific training programs in emerging fields",
      "Collaborate with tech companies to offer cutting-edge certifications",
      "Create a platform for continuous learning and skill updates for professionals"
    ]
  },
  {
    title: "Personalized Education at Scale",
    description: "We envision a future where every student receives a truly personalized education experience, tailored to their unique needs and learning style.",
    points: [
      "Implement advanced learning analytics to create dynamic, adaptive curricula",
      "Develop AI-powered personal learning assistants for each student",
      "Create customizable learning paths that adapt in real-time to student progress"
    ]
  },
]

