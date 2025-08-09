"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar"

interface NewsItem {
  id: string
  date: string
  content: string
}

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

export default function HomePage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [recentPublications, setRecentPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load news data
        const newsResponse = await fetch("/data/news.json")
        const newsData = newsResponse.ok ? await newsResponse.json() : []

        // Load publications data
        const pubResponse = await fetch("/data/publications.json")
        const pubData = pubResponse.ok ? await pubResponse.json() : []

        setNews(Array.isArray(newsData) ? newsData.slice(0, 5) : [])
        setRecentPublications(Array.isArray(pubData) ? pubData.slice(0, 3) : [])
      } catch (error) {
        console.error("Error loading data:", error)
        setNews([])
        setRecentPublications([])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <div className="legacy-content">
      <div className="container">
        <Sidebar />
        <main className="content">
          <header className="profile-header">
            <div className="profile-container">
              <img src="/assets/images/puwang.jpg" alt="Dr. Pu Wang" className="profile-pic" />
              <div className="profile-details">
                <h1>Dr. Pu Wang</h1>
                <p>Ph.D., Associate Professor</p>
                <p>IEEE Senior Member, ACM Member</p>
                <p>
                  <a href="https://cws.charlotte.edu/stage-ai4health/">AI4Health Center</a>
                  <br />
                  <a href="https://cci.charlotte.edu/">UNCC Department of CS</a>
                  <br />
                  University of North Carolina Charlotte
                </p>
                <p>Office: Woodward Hall 205E</p>
                <p>Address: 9201 University City Blvd, Charlotte NC, 28223-0001</p>
                <p>Phone: 404-687-6168</p>
                <p>Email: pu.wang@charlotte.edu</p>
                <p>
                  <a href="https://scholar.google.com/citations?user=0buJlAUAAAAJ&hl=en">Google Scholar</a> |{" "}
                  <a href="https://www.linkedin.com/in/pu-wang-54a57914/">LinkedIn</a>
                </p>
              </div>
              <div className="profile-right-image">
                <img src="/assets/images/wordcloud.png" alt="Word Cloud" className="right-image" />
              </div>
            </div>
          </header>

          <section className="highlight">
            <h2>Prospective Students</h2>
            <p>
              I am currently looking for self-motivated graduate students willing to work in the area of deep learning
              for computer vision and smart sensing, reinforcement learning for networking, and computational
              biomechanics.
            </p>
            <p>Requirements: </p>
            <p>
              (1) - Undergraduate or MS students with degrees in Computer Science/Engineering, Electrical Engineering,
              Mechanical Engineering, Mathematics or related majors.
            </p>
            <p>
              (2) - Strong programming and/or mathematical skills. Proficient in deep learning frameworks, e.g., PyTorch{" "}
            </p>
            <p style={{ marginBottom: "20px" }}>
              (3) - Research experience in computer vision and machine learning are preferred.{" "}
            </p>
            <p style={{ marginBottom: "20px" }}>
              If interested, please send your CV, and transcripts to me at pu.wang@uncc.edu{" "}
            </p>
          </section>

          <section className="interests">
            <h2>Research Interests</h2>
            <ul>
              <li>Computer Vision</li>
              <li>Machine Learning</li>
              <li>Image and Video Processing</li>
            </ul>
          </section>

          <section className="news">
            <h2>News</h2>
            {loading ? (
              <p>Loading news...</p>
            ) : (
              <ul>
                {news.length > 0 ? (
                  news.map((item) => (
                    <li key={item.id}>
                      <strong>
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                        :
                      </strong>{" "}
                      {item.content}
                    </li>
                  ))
                ) : (
                  <li>No news items available</li>
                )}
              </ul>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
