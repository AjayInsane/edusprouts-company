import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LinkedinIcon } from 'lucide-react'

export default function LeadershipTeamPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Leadership & Team</h1>
        
        <div className="flex flex-col space-y-16 gap-4">
          <TeamSection title="Leadership Team" members={leadershipTeam} />
          <TeamSection title="Technology Team" members={technologyTeam} />
          <TeamSection title="Advisory Board & Mentors" members={advisoryBoard} />
        </div>
      </div>
    </div>
  )
}

interface TeamMember {
  name: string
  role: string
  description: string
  imageUrl: string
  linkedIn?: string
}

interface TeamSectionProps {
  title: string
  members: TeamMember[]
}

function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-gray-700">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  )
}

function TeamMemberCard({ name, role, description, imageUrl, linkedIn }: TeamMember) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-none">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-1">{name}</CardTitle>
        <p className="text-sm text-gray-600 font-medium mb-4">{role}</p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>
        {linkedIn && (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="mr-2 h-4 w-4" /> Connect on LinkedIn
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

const leadershipTeam: TeamMember[] = [
  {
    name: "Gagan Chaudhary",
    role: "Founder & Chief Executive Officer (CEO)",
    description: "Visionary leader and strategist driving the mission of EduSprouts and CollegeSe, dedicated to transforming education through innovative approaches.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  },
  {
    name: "Niyati Tiwari",
    role: "Co-Founder & Chief Strategy and Standards Officer (CSSO)",
    description: "Ensures strategic excellence and operational standards with a keen eye for detail and quality, shaping the company's core values.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  },
  {
    name: "Aryan Chauhan",
    role: "Co-Founder & Chief Marketing Officer (CMO)",
    description: "Leading innovative marketing strategies to build the brand presence and connect with millions of learners.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  }
]

const technologyTeam: TeamMember[] = [
  {
    name: "Ajay Pawar",
    role: "Head of Technology Team & Chief Technology Officer (CTO)",
    description: "Spearheading the development and implementation of robust technological solutions to enhance user experiences.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  },
  {
    name: "Amarjeet Singh",
    role: "Senior Developer",
    description: "A dedicated team player specializing in innovative software development and system optimization.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  },
  {
    name: "Amish Kumar",
    role: "Software Engineer",
    description: "Focused on building scalable solutions and integrating emerging technologies into the platform.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  },
  {
    name: "Sumit Chauhan",
    role: "Technology Specialist",
    description: "Driving advancements in platform architecture and ensuring seamless functionality.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  }
]

const advisoryBoard: TeamMember[] = [
  {
    name: "Neha Chaturvedi",
    role: "Corporate Trainer & Mentor",
    description: "Guiding the team with her extensive expertise in leadership development and corporate training.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  },
  {
    name: "Sarvesh Shukla",
    role: "Advisor",
    description: "Bringing strategic insights to foster growth and expansion in the education sector.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  },
  {
    name: "Prashant Swami",
    role: "Advisor",
    description: "Providing valuable mentorship with years of experience in business management and innovation.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    linkedIn: "/#"
  }
]

