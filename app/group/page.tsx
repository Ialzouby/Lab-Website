"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar"

interface Person {
  id: string
  name: string
  role: string
  topic: string
  email: string
  image: string
  notes: string
  status: string
}

export default function Group() {
  const [people, setPeople] = useState<Person[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPeople = async () => {
      try {
        const response = await fetch("/data/people.json")
        if (response.ok) {
          const data = await response.json()
          setPeople(Array.isArray(data) ? data : [])
        } else {
          // Fallback data if JSON doesn't exist
          setPeople([
            {
              id: "1",
              name: "Dr. Pu Wang",
              role: "PI",
              topic: "Computer Vision, Machine Learning, Wireless Communications",
              email: "pu.wang@uncc.edu",
              image: "/assets/images/puwang.jpg",
              notes: "Principal Investigator",
              status: "active",
            },
            {
              id: "2",
              name: "Prabhu Kaliamoorthi",
              role: "PhD Student",
              topic: "Computer Vision and Machine Learning",
              email: "",
              image: "/assets/images/prabhu.jpg",
              notes: "PhD Student",
              status: "active",
            },
            {
              id: "3",
              name: "Akarsh Pokkunuru",
              role: "PhD Student",
              topic: "Wireless Networks and IoT",
              email: "",
              image: "/assets/images/akarsh.jpg",
              notes: "PhD Student",
              status: "active",
            },
            {
              id: "4",
              name: "Ahmad Wisam Mustapha",
              role: "PhD Student",
              topic: "Machine Learning and Signal Processing",
              email: "",
              image: "/assets/images/ahmad.jpg",
              notes: "PhD Student",
              status: "active",
            },
            {
              id: "5",
              name: "Ekkasit Pinyoanuntapong",
              role: "PhD Student",
              topic: "Computer Vision and Human Motion Analysis",
              email: "",
              image: "/assets/images/pinyarash.jpg",
              notes: "PhD Student",
              status: "active",
            },
            {
              id: "6",
              name: "Yagna Patel",
              role: "PhD Student",
              topic: "Federated Learning and Edge Computing",
              email: "",
              image: "/assets/images/yagna.jpg",
              notes: "PhD Student",
              status: "active",
            },
            {
              id: "7",
              name: "Kalvik Jakkala",
              role: "PhD Student",
              topic: "mmWave Communications and Sensing",
              email: "",
              image: "/assets/images/kalvik.jpg",
              notes: "PhD Student",
              status: "active",
            },
            {
              id: "8",
              name: "Austin Hester",
              role: "MS Student",
              topic: "Machine Learning Applications",
              email: "",
              image: "/assets/images/austin.jpg",
              notes: "MS Student",
              status: "active",
            },
            {
              id: "9",
              name: "Varun Chopra",
              role: "MS Student",
              topic: "Computer Vision",
              email: "",
              image: "/assets/images/varun.jpg",
              notes: "MS Student",
              status: "active",
            },
            {
              id: "10",
              name: "Assad Ali",
              role: "MS Student",
              topic: "Wireless Communications",
              email: "",
              image: "/assets/images/assad.jpg",
              notes: "MS Student",
              status: "active",
            },
            {
              id: "11",
              name: "Fahad Alrasheed",
              role: "MS Student",
              topic: "Network Security",
              email: "",
              image: "/assets/images/fahad.jpg",
              notes: "MS Student",
              status: "active",
            },
            {
              id: "12",
              name: "Samuel Twumasi",
              role: "MS Student",
              topic: "IoT and Edge Computing",
              email: "",
              image: "/assets/images/samuel.jpg",
              notes: "MS Student",
              status: "active",
            },
            {
              id: "13",
              name: "Abignan Kesavan",
              role: "Alumni",
              topic: "Former PhD Student",
              email: "",
              image: "/assets/images/abignan.jpg",
              notes: "Former PhD Student",
              status: "alumni",
            },
            {
              id: "14",
              name: "Ayman Rahman",
              role: "Alumni",
              topic: "Former MS Student",
              email: "",
              image: "/assets/images/ayman.jpg",
              notes: "Former MS Student",
              status: "alumni",
            },
            {
              id: "15",
              name: "Avinash Bhat",
              role: "Alumni",
              topic: "Former MS Student",
              email: "",
              image: "/assets/images/avinash.jpg",
              notes: "Former MS Student",
              status: "alumni",
            },
            {
              id: "16",
              name: "Sultan Alshamrani",
              role: "Alumni",
              topic: "Former PhD Student",
              email: "",
              image: "/assets/images/sultan.jpg",
              notes: "Former PhD Student",
              status: "alumni",
            },
            {
              id: "17",
              name: "Vijaya Yajnanarayana",
              role: "Alumni",
              topic: "Former Postdoc",
              email: "",
              image: "/assets/images/vijaya.jpg",
              notes: "Former Postdoc",
              status: "alumni",
            },
            {
              id: "18",
              name: "Arun Singh",
              role: "Alumni",
              topic: "Former PhD Student",
              email: "",
              image: "/assets/images/Arunsingh.jpg",
              notes: "Former PhD Student",
              status: "alumni",
            },
            {
              id: "19",
              name: "Bezabih Molla",
              role: "Alumni",
              topic: "Former PhD Student",
              email: "",
              image: "/assets/images/bezabih.jpg",
              notes: "Former PhD Student",
              status: "alumni",
            },
          ])
        }
      } catch (error) {
        console.error("Error loading people:", error)
        setPeople([])
      } finally {
        setLoading(false)
      }
    }

    loadPeople()
  }, [])

  if (loading) {
    return (
      <div className="legacy-content">
        <div className="container">
          <Sidebar />
          <main className="content">
            <h1 className="group-title">Research Group</h1>
            <p>Loading team members...</p>
          </main>
        </div>
      </div>
    )
  }

  // Separate PI from other members
  const pi = people.find((person) => person.role === "PI")
  const phdStudents = people.filter((person) => person.role === "PhD Student")
  const msStudents = people.filter((person) => person.role === "MS Student")
  const alumni = people.filter((person) => person.status === "alumni")

  return (
    <div className="legacy-content">
      <div className="container">
        <Sidebar />
        <main className="content">
          <h1 className="group-title">Research Group</h1>

          {pi && (
            <section className="principal-investigator">
              <img src={pi.image || "/placeholder.svg"} alt={pi.name} className="investigator-pic" />
              <div className="investigator-details">
                <h2>{pi.name}</h2>
                <p>Principal Investigator</p>
                <p>Associate Professor, Department of Computer Science</p>
                <p>University of North Carolina at Charlotte</p>
                {pi.email && (
                  <p>
                    Email: <a href={`mailto:${pi.email}`}>{pi.email}</a>
                  </p>
                )}
                <p>
                  <a href="https://scholar.google.com/citations?user=0buJlAUAAAAJ&hl=en">Google Scholar</a>
                </p>
              </div>
            </section>
          )}

          <section className="section">
            <h2 className="section-title">Current PhD Students</h2>
            <div className="students-grid">
              {phdStudents.map((person) => (
                <div key={person.id} className="student">
                  <img src={person.image || "/placeholder.svg"} alt={person.name} className="student-pic" />
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  {person.topic && <p className="student-topic">{person.topic}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Current MS Students</h2>
            <div className="students-grid">
              {msStudents.map((person) => (
                <div key={person.id} className="student">
                  <img src={person.image || "/placeholder.svg"} alt={person.name} className="student-pic" />
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  {person.topic && <p className="student-topic">{person.topic}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Alumni</h2>
            <div className="students-grid">
              {alumni.map((person) => (
                <div key={person.id} className="student">
                  <img src={person.image || "/placeholder.svg"} alt={person.name} className="student-pic" />
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  {person.topic && <p className="student-topic">{person.topic}</p>}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
