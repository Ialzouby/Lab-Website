"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
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
          setPeople(data)
        }
      } catch (error) {
        console.error("Error loading people:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPeople()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Group people by role
  const pi = people.filter((person) => person.role === "PI")
  const phdStudents = people.filter((person) => person.role === "PhD Student")
  const msStudents = people.filter((person) => person.role === "MS Student")
  const alumni = people.filter((person) => person.status === "alumni")

  const PersonCard = ({ person }: { person: Person }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="rounded-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{person.name}</h3>
      <p className="text-blue-600 font-medium mb-2">{person.role}</p>
      <p className="text-sm text-gray-600 mb-3">{person.topic}</p>
      {person.email && (
        <a href={`mailto:${person.email}`} className="text-sm text-blue-600 hover:text-blue-800">
          {person.email}
        </a>
      )}
    </div>
  )

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Group</h1>
            <p className="text-lg text-gray-600">
              Meet our diverse team of researchers working on cutting-edge problems in AI and networking.
            </p>
          </div>

          {/* Principal Investigator */}
          {pi.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Principal Investigator</h2>
              <div className="flex justify-center">
                <div className="max-w-sm">
                  <PersonCard person={pi[0]} />
                </div>
              </div>
            </section>
          )}

          {/* PhD Students */}
          {phdStudents.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">PhD Students</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {phdStudents.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </section>
          )}

          {/* MS Students */}
          {msStudents.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">MS Students</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {msStudents.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </section>
          )}

          {/* Alumni */}
          {alumni.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Alumni</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {alumni.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
