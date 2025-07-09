"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ResultsPage() {
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])
    const router = useRouter()

    useEffect(() => {
        const stored = localStorage.getItem("neighborfit-survey")
        if (!stored) {
            router.push("/")
            return
        }

        const fetchMatches = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: stored,
                })
                const data = await response.json()
                setMatches(data)
            } catch (error) {
                console.error("Error fetching matches:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchMatches()
    }, [])

    if (loading) return <div className="p-8 text-gray-600">Loading your results...</div>

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="flex items-center text-[#00b857] hover:underline mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Home
                </Link>
                <h1 className="text-3xl font-bold text-[#00b857] mb-6">
                    Your Top Neighborhood Matches
                </h1>
                <p className="text-gray-600 mb-10">
                    Based on your preferences, here are neighborhoods that best fit your lifestyle:
                </p>
                <div className="space-y-6">
                    {matches.map((match, index) => (
                        <div
                            key={match._id || index}
                            className="bg-white p-5 rounded-xl shadow-md border border-[#00b857]/20 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-xl font-semibold text-gray-800">{match.name}</h2>
                                <span className="text-[#00b857] font-bold text-lg">
                                    {match.matchScore?.toFixed(1)}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
                                <div><strong>Rent:</strong> ₹{match.rentAverage.toLocaleString()}</div>
                                <div><strong>Crime Rate:</strong> {match.crimeRate}</div>
                                <div><strong>Walk Score:</strong> {match.walkScore}</div>
                                <div><strong>School Rating:</strong> {match.schoolRating}</div>
                                <div><strong>Nightlife:</strong> {match.nightlife}</div>
                                <div><strong>Parks:</strong> {match.parks}</div>
                                <div><strong>Restaurants:</strong> {match.restaurants}</div>
                                <div><strong>Shopping:</strong> {match.shopping}</div>
                                <div><strong>Transit:</strong> {match.publicTransit}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
