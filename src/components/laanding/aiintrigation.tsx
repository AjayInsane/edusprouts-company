import { Brain, Lightbulb, Clock, BarChart } from 'lucide-react'

const aiFeatures = [
  { title: 'AI Avatars', description: 'Personalized virtual mentors', icon: Brain },
  { title: 'Smart Learning Tools', description: 'Custom recommendations', icon: Lightbulb },
  { title: '24/7 Assistance', description: 'Continuous AI support', icon: Clock },
  { title: 'Analytics', description: 'Track progress and improvements', icon: BarChart },
]

export default function AIIntegration() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">AI Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

