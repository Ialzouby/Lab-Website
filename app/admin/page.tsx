"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Edit2, Trash2, Save, X, GripVertical, Users, FileText, Newspaper, BookOpen } from "lucide-react"

interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  year: number
  image: string
  link: string
  type: string
}

interface ResearchProject {
  id: string
  title: string
  description: string
  image: string
  funding: string
  status: string
}

interface Person {
  id: string
  name: string
  role: string
  image: string
  email: string
  bio: string
  status: string
}

interface NewsItem {
  id: string
  title: string
  content: string
  date: string
  image: string
  category: string
}

export default function AdminDashboard() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [research, setResearch] = useState<ResearchProject[]>([])
  const [people, setPeople] = useState<Person[]>([])
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingItem, setEditingItem] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("publications")

  // Load data on component mount
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [pubRes, resRes, peopleRes, newsRes] = await Promise.all([
        fetch("/data/publications.json").then((res) => (res.ok ? res.json() : [])),
        fetch("/data/research.json").then((res) => (res.ok ? res.json() : [])),
        fetch("/data/people.json").then((res) => (res.ok ? res.json() : [])),
        fetch("/data/news.json").then((res) => (res.ok ? res.json() : [])),
      ])

      setPublications(Array.isArray(pubRes) ? pubRes : [])
      setResearch(Array.isArray(resRes) ? resRes : [])
      setPeople(Array.isArray(peopleRes) ? peopleRes : [])
      setNews(Array.isArray(newsRes) ? newsRes : [])
    } catch (error) {
      console.error("Error loading data:", error)
      // Set empty arrays as fallback
      setPublications([])
      setResearch([])
      setPeople([])
      setNews([])
    } finally {
      setLoading(false)
    }
  }

  // Filter functions with null checks
  const filteredPublications = publications.filter(
    (pub) =>
      (pub?.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pub?.authors || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pub?.venue || "").toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredResearch = research.filter(
    (proj) =>
      (proj?.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (proj?.description || "").toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredPeople = people.filter(
    (person) =>
      (person?.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (person?.role || "").toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredNews = news.filter(
    (item) =>
      (item?.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item?.content || "").toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id: string) => {
    setEditingItem(id)
  }

  const handleSave = (id: string) => {
    setEditingItem(null)
    // Here you would typically save to your backend
    console.log("Saving item:", id)
  }

  const handleCancel = () => {
    setEditingItem(null)
    // Reload data to revert changes
    loadData()
  }

  const handleDelete = (id: string, type: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      switch (type) {
        case "publication":
          setPublications((prev) => prev.filter((p) => p.id !== id))
          break
        case "research":
          setResearch((prev) => prev.filter((r) => r.id !== id))
          break
        case "person":
          setPeople((prev) => prev.filter((p) => p.id !== id))
          break
        case "news":
          setNews((prev) => prev.filter((n) => n.id !== id))
          break
      }
    }
  }

  const addNewItem = (type: string) => {
    const newId = Date.now().toString()
    switch (type) {
      case "publication":
        setPublications((prev) => [
          ...prev,
          {
            id: newId,
            title: "New Publication",
            authors: "",
            venue: "",
            year: new Date().getFullYear(),
            image: "",
            link: "",
            type: "journal",
          },
        ])
        break
      case "research":
        setResearch((prev) => [
          ...prev,
          {
            id: newId,
            title: "New Research Project",
            description: "",
            image: "",
            funding: "",
            status: "active",
          },
        ])
        break
      case "person":
        setPeople((prev) => [
          ...prev,
          {
            id: newId,
            name: "New Person",
            role: "",
            image: "",
            email: "",
            bio: "",
            status: "active",
          },
        ])
        break
      case "news":
        setNews((prev) => [
          ...prev,
          {
            id: newId,
            title: "New News Item",
            content: "",
            date: new Date().toISOString().split("T")[0],
            image: "",
            category: "general",
          },
        ])
        break
    }
    setEditingItem(newId)
  }

  if (loading) {
    return (
      <div className="admin-layout">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-layout">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Site Content Management
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manage your academic website content with ease. Edit publications, research projects, team members, and
              news.
            </p>
          </div>

          {/* Search */}
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search across all content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/50 border-white/30"
                />
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Publications</p>
                    <p className="text-2xl font-bold">{publications.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Research Projects</p>
                    <p className="text-2xl font-bold">{research.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Team Members</p>
                    <p className="text-2xl font-bold">{people.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Newspaper className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">News Items</p>
                    <p className="text-2xl font-bold">{news.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="border-b border-white/20 px-6 pt-6">
                  <TabsList className="grid w-full grid-cols-4 bg-white/50">
                    <TabsTrigger value="publications" className="data-[state=active]:bg-white">
                      Publications
                    </TabsTrigger>
                    <TabsTrigger value="research" className="data-[state=active]:bg-white">
                      Research
                    </TabsTrigger>
                    <TabsTrigger value="people" className="data-[state=active]:bg-white">
                      People
                    </TabsTrigger>
                    <TabsTrigger value="news" className="data-[state=active]:bg-white">
                      News
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Publications Tab */}
                <TabsContent value="publications" className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Publications</h2>
                    <Button onClick={() => addNewItem("publication")} className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Publication
                    </Button>
                  </div>

                  {filteredPublications.length === 0 ? (
                    <div className="text-center py-12">
                      <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No publications found</h3>
                      <p className="text-muted-foreground mb-4">Get started by adding your first publication.</p>
                      <Button onClick={() => addNewItem("publication")}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Publication
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredPublications.map((pub) => (
                        <Card
                          key={pub.id}
                          className="bg-white/50 border-white/30 hover:bg-white/70 transition-all duration-200"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <GripVertical className="h-5 w-5 text-muted-foreground mt-1 cursor-move" />

                              {pub.image && (
                                <img
                                  src={pub.image || "/placeholder.svg"}
                                  alt={pub.title || "Publication"}
                                  className="w-16 h-16 object-cover rounded-lg"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = "none"
                                  }}
                                />
                              )}

                              <div className="flex-1 space-y-3">
                                {editingItem === pub.id ? (
                                  <div className="space-y-4">
                                    <Input
                                      value={pub.title || ""}
                                      onChange={(e) =>
                                        setPublications((prev) =>
                                          prev.map((p) => (p.id === pub.id ? { ...p, title: e.target.value } : p)),
                                        )
                                      }
                                      placeholder="Publication title"
                                      className="font-semibold text-lg"
                                    />
                                    <Input
                                      value={pub.authors || ""}
                                      onChange={(e) =>
                                        setPublications((prev) =>
                                          prev.map((p) => (p.id === pub.id ? { ...p, authors: e.target.value } : p)),
                                        )
                                      }
                                      placeholder="Authors"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                      <Input
                                        value={pub.venue || ""}
                                        onChange={(e) =>
                                          setPublications((prev) =>
                                            prev.map((p) => (p.id === pub.id ? { ...p, venue: e.target.value } : p)),
                                          )
                                        }
                                        placeholder="Venue"
                                      />
                                      <Input
                                        type="number"
                                        value={pub.year || ""}
                                        onChange={(e) =>
                                          setPublications((prev) =>
                                            prev.map((p) =>
                                              p.id === pub.id ? { ...p, year: Number.parseInt(e.target.value) } : p,
                                            ),
                                          )
                                        }
                                        placeholder="Year"
                                      />
                                    </div>
                                    <Input
                                      value={pub.image || ""}
                                      onChange={(e) =>
                                        setPublications((prev) =>
                                          prev.map((p) => (p.id === pub.id ? { ...p, image: e.target.value } : p)),
                                        )
                                      }
                                      placeholder="Image URL"
                                    />
                                    <Input
                                      value={pub.link || ""}
                                      onChange={(e) =>
                                        setPublications((prev) =>
                                          prev.map((p) => (p.id === pub.id ? { ...p, link: e.target.value } : p)),
                                        )
                                      }
                                      placeholder="Link URL"
                                    />
                                  </div>
                                ) : (
                                  <div>
                                    <h3 className="font-semibold text-lg text-gray-900">{pub.title || "Untitled"}</h3>
                                    <p className="text-gray-600">{pub.authors || "No authors"}</p>
                                    <p className="text-sm text-gray-500">
                                      {pub.venue || "No venue"} • {pub.year || "No year"}
                                    </p>
                                    {pub.link && (
                                      <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm"
                                      >
                                        View Publication →
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center space-x-2">
                                <Badge variant="secondary">{pub.type || "journal"}</Badge>
                                {editingItem === pub.id ? (
                                  <div className="flex space-x-2">
                                    <Button
                                      size="sm"
                                      onClick={() => handleSave(pub.id)}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      <Save className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={handleCancel}>
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="flex space-x-2">
                                    <Button size="sm" variant="outline" onClick={() => handleEdit(pub.id)}>
                                      <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleDelete(pub.id, "publication")}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* Research Tab */}
                <TabsContent value="research" className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Research Projects</h2>
                    <Button onClick={() => addNewItem("research")} className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Project
                    </Button>
                  </div>

                  {filteredResearch.length === 0 ? (
                    <div className="text-center py-12">
                      <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No research projects found</h3>
                      <p className="text-muted-foreground mb-4">Get started by adding your first research project.</p>
                      <Button onClick={() => addNewItem("research")}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredResearch.map((project) => (
                        <Card
                          key={project.id}
                          className="bg-white/50 border-white/30 hover:bg-white/70 transition-all duration-200"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <GripVertical className="h-5 w-5 text-muted-foreground mt-1 cursor-move" />

                              {project.image && (
                                <img
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.title || "Research Project"}
                                  className="w-16 h-16 object-cover rounded-lg"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = "none"
                                  }}
                                />
                              )}

                              <div className="flex-1 space-y-3">
                                {editingItem === project.id ? (
                                  <div className="space-y-4">
                                    <Input
                                      value={project.title || ""}
                                      onChange={(e) =>
                                        setResearch((prev) =>
                                          prev.map((r) => (r.id === project.id ? { ...r, title: e.target.value } : r)),
                                        )
                                      }
                                      placeholder="Project title"
                                      className="font-semibold text-lg"
                                    />
                                    <Textarea
                                      value={project.description || ""}
                                      onChange={(e) =>
                                        setResearch((prev) =>
                                          prev.map((r) =>
                                            r.id === project.id ? { ...r, description: e.target.value } : r,
                                          ),
                                        )
                                      }
                                      placeholder="Project description"
                                      rows={4}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                      <Input
                                        value={project.funding || ""}
                                        onChange={(e) =>
                                          setResearch((prev) =>
                                            prev.map((r) =>
                                              r.id === project.id ? { ...r, funding: e.target.value } : r,
                                            ),
                                          )
                                        }
                                        placeholder="Funding source"
                                      />
                                      <Input
                                        value={project.status || ""}
                                        onChange={(e) =>
                                          setResearch((prev) =>
                                            prev.map((r) =>
                                              r.id === project.id ? { ...r, status: e.target.value } : r,
                                            ),
                                          )
                                        }
                                        placeholder="Status"
                                      />
                                    </div>
                                    <Input
                                      value={project.image || ""}
                                      onChange={(e) =>
                                        setResearch((prev) =>
                                          prev.map((r) => (r.id === project.id ? { ...r, image: e.target.value } : r)),
                                        )
                                      }
                                      placeholder="Image URL"
                                    />
                                  </div>
                                ) : (
                                  <div>
                                    <h3 className="font-semibold text-lg text-gray-900">
                                      {project.title || "Untitled Project"}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                      {project.description || "No description"}
                                    </p>
                                    <p className="text-sm text-gray-500">{project.funding || "No funding info"}</p>
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center space-x-2">
                                <Badge variant={project.status === "active" ? "default" : "secondary"}>
                                  {project.status || "unknown"}
                                </Badge>
                                {editingItem === project.id ? (
                                  <div className="flex space-x-2">
                                    <Button
                                      size="sm"
                                      onClick={() => handleSave(project.id)}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      <Save className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={handleCancel}>
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="flex space-x-2">
                                    <Button size="sm" variant="outline" onClick={() => handleEdit(project.id)}>
                                      <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleDelete(project.id, "research")}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* People Tab */}
                <TabsContent value="people" className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Team Members</h2>
                    <Button onClick={() => addNewItem("person")} className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Person
                    </Button>
                  </div>

                  {filteredPeople.length === 0 ? (
                    <div className="text-center py-12">
                      <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No team members found</h3>
                      <p className="text-muted-foreground mb-4">Get started by adding your first team member.</p>
                      <Button onClick={() => addNewItem("person")}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Person
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredPeople.map((person) => (
                        <Card
                          key={person.id}
                          className="bg-white/50 border-white/30 hover:bg-white/70 transition-all duration-200"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <GripVertical className="h-5 w-5 text-muted-foreground mt-1 cursor-move" />

                              {person.image && (
                                <img
                                  src={person.image || "/placeholder.svg"}
                                  alt={person.name || "Team Member"}
                                  className="w-16 h-16 object-cover rounded-full"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = "none"
                                  }}
                                />
                              )}

                              <div className="flex-1 space-y-3">
                                {editingItem === person.id ? (
                                  <div className="space-y-4">
                                    <Input
                                      value={person.name || ""}
                                      onChange={(e) =>
                                        setPeople((prev) =>
                                          prev.map((p) => (p.id === person.id ? { ...p, name: e.target.value } : p)),
                                        )
                                      }
                                      placeholder="Full name"
                                      className="font-semibold text-lg"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                      <Input
                                        value={person.role || ""}
                                        onChange={(e) =>
                                          setPeople((prev) =>
                                            prev.map((p) => (p.id === person.id ? { ...p, role: e.target.value } : p)),
                                          )
                                        }
                                        placeholder="Role/Position"
                                      />
                                      <Input
                                        value={person.email || ""}
                                        onChange={(e) =>
                                          setPeople((prev) =>
                                            prev.map((p) => (p.id === person.id ? { ...p, email: e.target.value } : p)),
                                          )
                                        }
                                        placeholder="Email"
                                        type="email"
                                      />
                                    </div>
                                    <Textarea
                                      value={person.bio || ""}
                                      onChange={(e) =>
                                        setPeople((prev) =>
                                          prev.map((p) => (p.id === person.id ? { ...p, bio: e.target.value } : p)),
                                        )
                                      }
                                      placeholder="Biography"
                                      rows={3}
                                    />
                                    <Input
                                      value={person.image || ""}
                                      onChange={(e) =>
                                        setPeople((prev) =>
                                          prev.map((p) => (p.id === person.id ? { ...p, image: e.target.value } : p)),
                                        )
                                      }
                                      placeholder="Image URL"
                                    />
                                  </div>
                                ) : (
                                  <div>
                                    <h3 className="font-semibold text-lg text-gray-900">
                                      {person.name || "Unnamed Person"}
                                    </h3>
                                    <p className="text-gray-600">{person.role || "No role specified"}</p>
                                    {person.email && <p className="text-sm text-gray-500">{person.email}</p>}
                                    {person.bio && (
                                      <p className="text-sm text-gray-600 line-clamp-2 mt-2">{person.bio}</p>
                                    )}
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center space-x-2">
                                <Badge variant={person.status === "active" ? "default" : "secondary"}>
                                  {person.status || "unknown"}
                                </Badge>
                                {editingItem === person.id ? (
                                  <div className="flex space-x-2">
                                    <Button
                                      size="sm"
                                      onClick={() => handleSave(person.id)}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      <Save className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={handleCancel}>
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="flex space-x-2">
                                    <Button size="sm" variant="outline" onClick={() => handleEdit(person.id)}>
                                      <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleDelete(person.id, "person")}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* News Tab */}
                <TabsContent value="news" className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">News & Updates</h2>
                    <Button onClick={() => addNewItem("news")} className="bg-orange-600 hover:bg-orange-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add News
                    </Button>
                  </div>

                  {filteredNews.length === 0 ? (
                    <div className="text-center py-12">
                      <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No news items found</h3>
                      <p className="text-muted-foreground mb-4">Get started by adding your first news item.</p>
                      <Button onClick={() => addNewItem("news")}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add News
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredNews.map((item) => (
                        <Card
                          key={item.id}
                          className="bg-white/50 border-white/30 hover:bg-white/70 transition-all duration-200"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <GripVertical className="h-5 w-5 text-muted-foreground mt-1 cursor-move" />

                              {item.image && (
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.title || "News Item"}
                                  className="w-16 h-16 object-cover rounded-lg"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = "none"
                                  }}
                                />
                              )}

                              <div className="flex-1 space-y-3">
                                {editingItem === item.id ? (
                                  <div className="space-y-4">
                                    <Input
                                      value={item.title || ""}
                                      onChange={(e) =>
                                        setNews((prev) =>
                                          prev.map((n) => (n.id === item.id ? { ...n, title: e.target.value } : n)),
                                        )
                                      }
                                      placeholder="News title"
                                      className="font-semibold text-lg"
                                    />
                                    <Textarea
                                      value={item.content || ""}
                                      onChange={(e) =>
                                        setNews((prev) =>
                                          prev.map((n) => (n.id === item.id ? { ...n, content: e.target.value } : n)),
                                        )
                                      }
                                      placeholder="News content"
                                      rows={4}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                      <Input
                                        type="date"
                                        value={item.date || ""}
                                        onChange={(e) =>
                                          setNews((prev) =>
                                            prev.map((n) => (n.id === item.id ? { ...n, date: e.target.value } : n)),
                                          )
                                        }
                                      />
                                      <Input
                                        value={item.category || ""}
                                        onChange={(e) =>
                                          setNews((prev) =>
                                            prev.map((n) =>
                                              n.id === item.id ? { ...n, category: e.target.value } : n,
                                            ),
                                          )
                                        }
                                        placeholder="Category"
                                      />
                                    </div>
                                    <Input
                                      value={item.image || ""}
                                      onChange={(e) =>
                                        setNews((prev) =>
                                          prev.map((n) => (n.id === item.id ? { ...n, image: e.target.value } : n)),
                                        )
                                      }
                                      placeholder="Image URL"
                                    />
                                  </div>
                                ) : (
                                  <div>
                                    <h3 className="font-semibold text-lg text-gray-900">
                                      {item.title || "Untitled News"}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">{item.content || "No content"}</p>
                                    <p className="text-sm text-gray-500">{item.date || "No date"}</p>
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{item.category || "general"}</Badge>
                                {editingItem === item.id ? (
                                  <div className="flex space-x-2">
                                    <Button
                                      size="sm"
                                      onClick={() => handleSave(item.id)}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      <Save className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={handleCancel}>
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="flex space-x-2">
                                    <Button size="sm" variant="outline" onClick={() => handleEdit(item.id)}>
                                      <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={() => handleDelete(item.id, "news")}>
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
