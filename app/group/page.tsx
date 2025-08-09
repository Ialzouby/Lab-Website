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

  const pi = {
    name: "Dr. Pu Wang",
    role: "Principal Investigator",
    image: "/placeholder.svg?height=250&width=200&text=Dr. Wang",
    email: "pu.wang@uncc.edu",
  }

  const phdStudents = [
    {
      name: "Prabhu Kaliamoorthi",
      topic: "Computer Vision and Machine Learning",
      image: "/placeholder.svg?height=120&width=120&text=Prabhu",
    },
    {
      name: "Akarsh Pokkunuru",
      topic: "Wireless Communications",
      image: "/placeholder.svg?height=120&width=120&text=Akarsh",
    },
    {
      name: "Ahmad Wisam Mustapha",
      topic: "Machine Learning",
      image: "/placeholder.svg?height=120&width=120&text=Ahmad",
    },
    {
      name: "Ekkasit Pinyoanuntapong",
      topic: "Computer Vision",
      image: "/placeholder.svg?height=120&width=120&text=Ekkasit",
    },
    { name: "Yagna Patel", topic: "Federated Learning", image: "/placeholder.svg?height=120&width=120&text=Yagna" },
    {
      name: "Kalvik Jakkala",
      topic: "mmWave Communications",
      image: "/placeholder.svg?height=120&width=120&text=Kalvik",
    },
  ]

  const msStudents = [
    {
      name: "Austin Hester",
      topic: "Machine Learning Applications",
      image: "/placeholder.svg?height=120&width=120&text=Austin",
    },
    { name: "Varun Chopra", topic: "Computer Vision", image: "/placeholder.svg?height=120&width=120&text=Varun" },
    { name: "Assad Ali", topic: "Wireless Networks", image: "/placeholder.svg?height=120&width=120&text=Assad" },
    { name: "Fahad Alrasheed", topic: "Edge Computing", image: "/placeholder.svg?height=120&width=120&text=Fahad" },
  ]

  const alumni = [
    {
      name: "Abignan Kesavan",
      topic: "Former PhD Student",
      image: "/placeholder.svg?height=120&width=120&text=Abignan",
    },
    { name: "Ayman Rahman", topic: "Former MS Student", image: "/placeholder.svg?height=120&width=120&text=Ayman" },
    {
      name: "Sultan Alshamrani",
      topic: "Former PhD Student",
      image: "/placeholder.svg?height=120&width=120&text=Sultan",
    },
    {
      name: "Vijaya Yajnanarayana",
      topic: "Former Postdoc",
      image: "/placeholder.svg?height=120&width=120&text=Vijaya",
    },
  ]

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

  return (
    <div className="legacy-content">
      <div className="container">
        <Sidebar />
        <main className="content">
          <h1 className="group-title">Research Group</h1>

          <section className="principal-investigator">
            <img src={pi.image || "/placeholder.svg"} alt={pi.name} className="investigator-pic" />
            <div className="investigator-details">
              <h2>{pi.name}</h2>
              <p>{pi.role}</p>
              <p>Associate Professor, Department of Computer Science</p>
              <p>University of North Carolina at Charlotte</p>
              <p>
                Email: <a href={`mailto:${pi.email}`}>{pi.email}</a>
              </p>
              <p>
                <a href="https://scholar.google.com/citations?user=0buJlAUAAAAJ&hl=en">Google Scholar</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="section-title">Current PhD Students</h2>
            <div className="students-grid">
              {phdStudents.map((student, index) => (
                <div key={index} className="student">
                  <img src={student.image || "/placeholder.svg"} alt={student.name} className="student-pic" />
                  <h3>{student.name}</h3>
                  <p>PhD Student</p>
                  <p>{student.topic}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-title">Current MS Students</h2>
            <div className="students-grid">
              {msStudents.map((student, index) => (
                <div key={index} className="student">
                  <img src={student.image || "/placeholder.svg"} alt={student.name} className="student-pic" />
                  <h3>{student.name}</h3>
                  <p>MS Student</p>
                  <p>{student.topic}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-title">Alumni</h2>
            <div className="students-grid">
              {alumni.map((student, index) => (
                <div key={index} className="student">
                  <img src={student.image || "/placeholder.svg"} alt={student.name} className="student-pic" />
                  <h3>{student.name}</h3>
                  <p>{student.topic}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
