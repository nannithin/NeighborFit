import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, BarChart3, Target, Users2, Database, CircleCheckBig } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-[#00b857]" />
              <h1 className="text-2xl font-bold text-gray-900">NeighborFit</h1>
            </div>
            <nav className="flex space-x-4">
              <Link href="/survey" className="text-gray-600 hover:text-[#00b857]">
                Take Survey
              </Link>
              <Link href="/methodology" className="text-gray-600 hover:text-[#00b857]">
                Methodology
              </Link>
              
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Find Your Perfect Neighborhood Match</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Using data-driven analysis and algorithmic matching, we help you discover neighborhoods that align with your
            lifestyle, preferences, and needs. No guesswork, just science.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/survey">
              <Button size="lg" className="bg-[#00b857] ">
                Start Matching Process
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline" size="lg">
                View Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 border rounded-md p-5">
              <h1 className="text-2xl font-bold flex items-center gap-2"> <Users2 className="text-green-500"/> 1. Preference Survey</h1>
              <p className="text-gray-500">Complete our comprehensive lifestyle survey to identify your priorities, preferences, and deal-breakers for neighborhood selection.</p>
            </div>
            <div className="space-y-3 border rounded-md p-5">
              <h1 className="text-2xl font-bold flex items-center gap-2"> <Database className="text-blue-600"/> 2. Data Analysis</h1>
              <p className="text-gray-500">Our algorithm processes real neighborhood data including demographics, safety, amenities, and lifestyle factors using weighted scoring.</p>
            </div>
            <div className="space-y-3 border rounded-md p-5">
              <h1 className="text-2xl font-bold flex items-center gap-2"> <CircleCheckBig className="text-purple-600"/> 3. Personalized Matches</h1>
              <p className="text-gray-500">Receive ranked neighborhood recommendations with detailed explanations of why each area matches your specific lifestyle needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#00b857] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Neighborhood?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of users who have found their ideal living situation through data-driven matching.
          </p>
          <Link href="/survey">
            <Button size="lg" variant="secondary">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      
    </div>
  )
}
