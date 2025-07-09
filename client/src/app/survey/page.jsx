"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Survey() {
    const [curStep, setCurStep] = useState(1);
    const router = useRouter()
    const [surveyData, setSurveyData] = useState({
        budget: [20000],
        commute: "",
        lifestyle: [],
        priorities: {
            safety: [8],
            schools: [5],
            nightlife: [5],
            parks: [6],
            shopping: [5],
            restaurants: [6],
            publicTransit: [7],
            walkability: [7],
        },
        demographics: "",
        housingType: "",
    })
    const totalSteps = 3

    const handleNext = () => {
        if (curStep < totalSteps) {
            setCurStep(curStep + 1)
        } else {
            localStorage.setItem("neighborfit-survey", JSON.stringify(surveyData))
            router.push("/results")
        }
    }

    const handlePrevious = () => {
        if (curStep > 1) {
            setCurStep(curStep - 1)
        }
    }

    const updateLifestyle = (value, checked) => {
        if (checked) {
            setSurveyData((prev) => ({
                ...prev,
                lifestyle: [...prev.lifestyle, value],
            }))
        } else {
            setSurveyData((prev) => ({
                ...prev,
                lifestyle: prev.lifestyle.filter((item) => item !== value),
            }))
        }
    }

    const updatePriority = (key, value) => {
        setSurveyData((prev) => ({
            ...prev,
            priorities: {
                ...prev.priorities,
                [key]: value,
            },
        }))
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="border-b bg-white">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </header>

            <div className="container max-w-2xl mx-auto px-4 py-8">
                <div className="">
                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>
                                Step {curStep} of {totalSteps}
                            </span>
                            <span>{Math.round((curStep / totalSteps) * 100)}% Complete</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-[#00b857] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(curStep / totalSteps) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
                {
                    curStep == 1 && (
                        <div className="max-w-2xl mx-auto rounded-md shadow-md p-5">
                            <div className="py-3 space-y-1">
                                <h1 className="text-2xl">Budget & Commute Preferences</h1>
                                <p className="text-[16px] text-gray-500">Help us understand your financial constraints and commute needs</p>
                            </div>
                            <div className="space-y-5">
                                <div className="space-y-3">
                                    <p className="text-base font-medium">Monthly Housing Budget</p>
                                    <div className="mt-2">
                                        <Slider
                                            value={surveyData.budget}
                                            onValueChange={(value) => setSurveyData((prev) => ({ ...prev, budget: value }))}
                                            max={40000}
                                            min={10000}
                                            step={1000}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                                            <span>10,000</span>
                                            <span className="font-medium">${surveyData.budget[0].toLocaleString()}</span>
                                            <span>40,000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-base font-medium">Commute Preference</Label>
                                    <RadioGroup
                                        value={surveyData.commute}
                                        onValueChange={(value) => setSurveyData((prev) => ({ ...prev, commute: value }))}
                                        className="mt-2 space-y-3"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="downtown" id="downtown" />
                                            <Label htmlFor="downtown">Close to downtown/business district</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="remote" id="remote" />
                                            <Label htmlFor="remote">Work remotely (commute not important)</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="flexible" id="flexible" />
                                            <Label htmlFor="flexible">Flexible/hybrid work</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="suburbs" id="suburbs" />
                                            <Label htmlFor="suburbs">Prefer suburban office locations</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                    )


                }
                {
                    curStep == 2 && (
                        <div className="rounded-md shadow-md p-5 space-y-5">
                            <div>
                                <h1 className="text-2xl">Lifestyle Preferences</h1>
                                <p className="text-[16px] text-gray-500">Select all lifestyle factors that are important to you</p>
                            </div>
                            <div>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "Active/Fitness Focused",
                                        "Nightlife & Entertainment",
                                        "Family-Friendly",
                                        "Pet-Friendly",
                                        "Arts & Culture",
                                        "Foodie Scene",
                                        "Quiet & Peaceful",
                                        "Social & Community-Oriented",
                                        "Eco-Conscious",
                                        "Tech/Startup Scene",
                                    ].map((lifestyle) => (
                                        <div key={lifestyle} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={lifestyle}
                                                checked={surveyData.lifestyle.includes(lifestyle)}
                                                onCheckedChange={(checked) => updateLifestyle(lifestyle, checked)}
                                            />
                                            <Label htmlFor={lifestyle} className="text-sm">
                                                {lifestyle}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    curStep == 3 && (
                        <div className="space-y-5 shadow-md p-5">
                            <div>
                                <h1 className="text-2xl">Lifestyle Preferences</h1>
                                <p className="text-[16px] text-gray-500">Select all lifestyle factors that are important to you</p>
                            </div>
                            <div>
                                {
                                    
                                        Object.entries(surveyData.priorities).map(([key, value]) => (
                                            <div key={key} className="">
                                                <Label className="text-base font-medium capitalize mt-5">
                                                    {key === "publicTransit" ? "Public Transit" : key}
                                                </Label>
                                                <div className="mt-2">
                                                    <Slider
                                                        value={value}
                                                        onValueChange={(newValue) =>
                                                            updatePriority(key, newValue)
                                                        }
                                                        max={10}
                                                        min={1}
                                                        step={1}
                                                        className="w-full bg-[#00b857]"
                                                    />
                                                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                                                        <span>1</span>
                                                        <span className="font-medium">{value[0]}</span>
                                                        <span>10</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    
                                }
                            </div>
                        </div>
                    )
                }
                <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={handlePrevious} disabled={curStep === 1}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                    </Button>
                    <Button className="bg-[#00b857]" onClick={handleNext}>
                        {curStep === totalSteps ? "Get My Matches" : "Next"}
                        {curStep !== totalSteps && <ArrowRight className="h-4 w-4 ml-2" />}
                    </Button>
                </div>
            </div>
        </div>
    )
}