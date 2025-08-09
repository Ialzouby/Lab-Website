"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar"

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
  const [collapsedSections, setCollapsedSections] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const response = await fetch("/data/publications.json")
        if (response.ok) {
          const data = await response.json()
          setPublications(Array.isArray(data) ? data : [])
        }
      } catch (error) {
        console.error("Error loading publications:", error)
        setPublications([])
      } finally {
        setLoading(false)
      }
    }

    loadPublications()
  }, [])

  const toggleSection = (year: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
  }

  // Group publications by year
  const groupedPublications = publications.reduce(
    (acc, pub) => {
      const year = pub.year.toString()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(pub)
      return acc
    },
    {} as { [key: string]: Publication[] },
  )

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPublications).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  if (loading) {
    return (
      <div className="legacy-content">
        <div className="container">
          <Sidebar />
          <main className="content">
            <h1 className="section-title">Publications</h1>
            <p>Loading publications...</p>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="legacy-content">
      <div className="container">
        <Sidebar />
        <main className="content">
          <div className="publications-section">
            <h1 className="section-title">Publications</h1>
            <p className="copyright">
              <strong>DISCLAIMER:</strong> Readers may view, browse, and/or download any material in this website for
              temporary use only, provided that this is used for noncommercial personal purposes only. Except as
              provided by law, this material may not be further reproduced, distributed, transmitted, modified, adapted,
              performed, displayed, published, or sold in whole or part, without prior written permission from the
              publisher and the web site owner.
            </p>

            {sortedYears.map((year) => (
              <div key={year}>
                <div className="section-header">
                  <h2 className="collapsible-header" onClick={() => toggleSection(year)}>
                    {year} <span className="toggle-indicator">{collapsedSections[year] ? "+" : "-"}</span>
                  </h2>
                </div>
                <div className={`collapsible-content ${collapsedSections[year] ? "collapsed" : ""}`}>
                  {groupedPublications[year].map((pub) => (
                    <div key={pub.id} className="publication">
                      <img src={pub.image || "/placeholder.svg"} alt={pub.title} className="publication-image" />
                      <div className="publication-details">
                        <h3>{pub.title}</h3>
                        <p>{pub.authors}</p>
                        <p>
                          <em>{pub.venue}</em>
                        </p>
                        {pub.link && pub.link !== "#" && (
                          <a href={pub.link} target="_blank" className="link" rel="noreferrer">
                            Link
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
