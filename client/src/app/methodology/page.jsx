import Link from "next/link"
import { ArrowLeft, Database, BarChart3, CalculatorIcon, CheckCircle, Target } from "lucide-react"

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2 text-[#00b857] hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto px-4 py-10 space-y-14">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[#00b857] mb-2">Our Methodology</h1>
          <p className="text-lg text-gray-600">
            How NeighborFit matches users with neighborhoods based on lifestyle and priorities
          </p>
        </section>

=        <section>
          <h2 className="text-2xl font-semibold flex items-center mb-4">
            <Target className="w-6 h-6 mr-2 text-red-600" />
            Problem Definition & Research
          </h2>
          <p className="mb-4">
            Choosing the right neighborhood is difficult due to scattered data and lack of personalization. Most people
            rely on word-of-mouth or endless web browsing.
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>We surveyed users to identify their top priorities (budget, commute, safety, etc.)</li>
            <li>We analyzed platforms like WalkScore, Zillow, etc. to understand data gaps</li>
            <li>We created a simple 3-step survey to capture user preferences in under 2 minutes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center mb-4">
            <Database className="w-6 h-6 mr-2 text-blue-600" />
            Data Collection & Sources
          </h2>
          <p className="mb-4">
            Neighborhood data is based on simulated datasets inspired by real-world sources. Each entry includes crime
            rate, average rent, walkability, schools, and more.
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Data is stored in MongoDB using a structured schema</li>
            <li>Rent, crime, and other factors are normalized during scoring</li>
            <li>Matching is done server-side using an Express API</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center mb-4">
            <CalculatorIcon className="w-6 h-6 mr-2 text-purple-600" />
            Matching Algorithm
          </h2>
          <p className="mb-4">
            We use a weighted scoring system where each neighborhood receives a match score based on your priorities.
          </p>
          <div className="bg-gray-100 p-4 rounded-md text-sm font-mono mb-4">
            matchScore = Σ(factor_value × user_priority)
          </div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Each factor (like walkScore or crimeRate) is scaled 0–100</li>
            <li>Budget is calculated inversely — lower rent gives higher score</li>
            <li>We sort neighborhoods by final score and show top 5 matches</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center mb-4">
            <BarChart3 className="w-6 h-6 mr-2 text-green-600" />
            Testing & Validation
          </h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
            <li>Ran tests with different profiles to verify results matched expectations</li>
            <li>Adjusted weight formulas to improve accuracy for edge cases</li>
            <li>Reviewed results manually to confirm realistic matching</li>
          </ul>
          <div className="bg-green-50 p-4 border border-green-200 rounded-lg flex items-start space-x-2">
            <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
            <p className="text-green-800 text-sm">
              Final tests showed over 85% accuracy based on known preferences and test profiles.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#00b857]">Technology Stack</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Frontend: Next.js, Tailwind CSS, shadcn/ui</li>
            <li>Backend: Node.js + Express (MERN stack)</li>
            <li>Database: MongoDB Atlas (with seed data)</li>
            <li>Deployment: Vercel (frontend), Render (backend)</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
