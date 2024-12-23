import TermsContent from '@/components/termscomp/termscontent'
import TableOfContents from '@/components/termscomp/tableofcontents'


export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Terms and Conditions</h1>
            <TermsContent />
          </div>
          <div className="lg:w-1/4">
            <TableOfContents />
          </div>
        </div>
      </div>
     
    </div>
  )
}

