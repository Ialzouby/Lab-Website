"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Sidebar from "@/components/Sidebar"
import { ChevronDown, ChevronRight } from "lucide-react"

interface Publication {
  id: string
  year: number
  title: string
  authors: string
  venue: string
  image: string
  link: string
  type: string
}

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)
  const [collapsedYears, setCollapsedYears] = useState<Set<number>>(new Set())

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const response = await fetch("/data/publications.json")
        if (response.ok) {
          const data = await response.json()
          setPublications(data)
        }
      } catch (error) {
        console.error("Error loading publications:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPublications()
  }, [])

  const toggleYear = (year: number) => {
    const newCollapsed = new Set(collapsedYears)
    if (newCollapsed.has(year)) {
      newCollapsed.delete(year)
    } else {
      newCollapsed.add(year)
    }
    setCollapsedYears(newCollapsed)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-24 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Group publications by year
  const publicationsByYear = publications.reduce(
    (acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = []
      }
      acc[pub.year].push(pub)
      return acc
    },
    {} as Record<number, Publication[]>,
  )

  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
            <p className="text-lg text-gray-600">
              Our research publications in computer vision, machine learning, and wireless communications.
            </p>
          </div>

          <div className="space-y-6">
            {sortedYears.map((year) => {
              const yearPublications = publicationsByYear[year]
              const isCollapsed = collapsedYears.has(year)

              return (
                <div key={year} className="bg-white rounded-lg shadow-md border border-gray-200">
                  <button
                    onClick={() => toggleYear(year)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 rounded-t-lg"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      {year} ({yearPublications.length} publications)
                    </h2>
                    {isCollapsed ? (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {!isCollapsed && (
                    <div className="px-6 pb-6">
                      <div className="space-y-6">
                        {yearPublications.map((pub) => (
                          <div key={pub.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                            {pub.image && (
                              <div className="flex-shrink-0">
                                <Image
                                  src={pub.image || "/placeholder.svg"}
                                  alt={pub.title}
                                  width={100}
                                  height={100}
                                  className="rounded-lg object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {pub.link && pub.link !== "#" ? (
                                  <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 transition-colors"
                                  >
                                    {pub.title}
                                  </a>
                                ) : (
                                  pub.title
                                )}
                              </h3>
                              <p className="text-gray-600 mb-2">{pub.authors}</p>
                              <p className="text-sm text-gray-500 mb-2">{pub.venue}</p>
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    pub.type === "journal"
                                      ? "bg-blue-100 text-blue-800"
                                      : pub.type === "conference"
                                        ? "bg-green-100 text-green-800"
                                        : pub.type === "workshop"
                                          ? "bg-yellow-100 text-yellow-800"
                                          : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {pub.type}
                                </span>
                                {pub.link && pub.link !== "#" && (
                                  <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                  >
                                    View Paper →
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
