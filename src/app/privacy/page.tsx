import PolicyContent from '@/components/privacycomp/PolicyContent'
import TableOfContents from '@/components/privacycomp/TableOfContents'


export default function PolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
   
      <div className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
            <PolicyContent />
          </div>
          <div className="lg:w-1/4">
            <TableOfContents />
          </div>
        </div>
      </div>
    
    </div>
  )
}

