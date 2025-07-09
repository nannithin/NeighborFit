import Link from "next/link"
import { ArrowLeft, FileText, Code, Database, BarChart3 } from "lucide-react"

export default function DocumentationPage() {
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
                    <h1 className="text-4xl font-bold text-[#00b857] mb-2">Project Documentation</h1>
                    <p className="text-lg text-gray-600">Complete overview of the NeighborFit project implementation</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center mb-4">
                        <FileText className="w-6 h-6 mr-2 text-blue-600" />
                        Project Overview
                    </h2>
                    <p className="mb-4">
                        NeighborFit solves the challenge of matching people with ideal neighborhoods using data-driven methods.
                        It replaces subjective research with systematic, personalized recommendations.
                    </p>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                        <li>User survey to collect preferences</li>
                        <li>Weighted scoring algorithm</li>
                        <li>Neighborhood ranking based on factors like rent, safety, walkability</li>
                        <li>Live results with a simple user interface</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center mb-4">
                        <Code className="w-6 h-6 mr-2 text-green-600" />
                        Technical Architecture
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 mb-6">
                        <div>
                            <h4 className="font-medium text-gray-800 mb-1">Frontend</h4>
                            <ul className="list-disc ml-5 space-y-1">
                                <li>Next.js (App Router)</li>
                                <li>Tailwind CSS</li>
                                <li>shadcn/ui + Lucide icons</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800 mb-1">Backend</h4>
                            <ul className="list-disc ml-5 space-y-1">
                                <li>Node.js + Express</li>
                                <li>Mongoose (MongoDB)</li>
                                <li>REST API</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800 mb-1">Deployment</h4>
                            <ul className="list-disc ml-5 space-y-1">
                                <li>Frontend on Vercel</li>
                                <li>Backend on Render</li>
                                <li>MongoDB Atlas cloud DB</li>
                            </ul>
                        </div>
                    </div>

                   
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center mb-4">
                        <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                        Matching Algorithm
                    </h2>
                    <p className="mb-4">
                        Our scoring algorithm uses a weighted system to rank neighborhoods based on user preferences:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg font-mono text-sm text-blue-800 mb-4">
                        Final Score = (Budget Score × 0.25) + (Priority Factors × 0.60) + (Lifestyle Match × 0.15)
                    </div>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        <li><strong>Budget:</strong> Prefers lower rent (inverted scale)</li>
                        <li><strong>Priorities:</strong> Weighted sliders (safety, schools, walkability, etc.)</li>
                        <li><strong>Lifestyle:</strong> Bonus points for matching tags like "Quiet", "Pet-Friendly"</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold flex items-center mb-4">
                        <Database className="w-6 h-6 mr-2 text-orange-600" />
                        Data & Integration
                    </h2>
                    <p className="mb-4">
                        We use a seeded mock database for demo purposes. For production, we'd integrate live sources like:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                        <div>
                            <h4 className="font-medium text-gray-800">Government Data</h4>
                            <ul className="list-disc ml-5 space-y-1">
                                <li>US Census Bureau</li>
                                <li>Crime stats APIs</li>
                                <li>School rating databases</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800">Commercial APIs</h4>
                            <ul className="list-disc ml-5 space-y-1">
                                <li>Walk Score</li>
                                <li>Yelp Business Data</li>
                                <li>Real estate platforms</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-[#00b857]">Setup & Deployment</h2>
                    <div>
                        <h4 className="font-semibold mb-2">Local Setup</h4>
                        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                            <pre>{`
# Clone project
git clone <repo-url>
cd neighborfit
# Install dependencies
npm install
# Run dev server
=npm run dev`}</pre>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Production Notes</h4>
                        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                            <li>Deploy frontend to Vercel with GitHub integration</li>
                            <li>Deploy backend to Render using a Node environment</li>
                            <li>Use MongoDB Atlas and environment variables for secrets</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}
