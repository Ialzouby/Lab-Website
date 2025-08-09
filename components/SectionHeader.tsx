import type React from "react"
import { Badge } from "@/components/ui/badge"

type Props = {
  title: string
  status?: "idle" | "loading" | "ready" | "error"
  error?: string | null
  toolbar?: React.ReactNode
}

function statusBadge(status?: Props["status"]) {
  switch (status) {
    case "loading":
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">loading</Badge>
    case "ready":
      return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">ready</Badge>
    case "error":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">error</Badge>
    case "idle":
    default:
      return <Badge variant="secondary">idle</Badge>
  }
}

export default function SectionHeader({ title, status = "idle", error, toolbar }: Props) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-semibold leading-none">{title}</h2>
        {statusBadge(status)}
        {error ? <span className="text-xs text-red-600">{error}</span> : null}
      </div>
      {toolbar ? <div className="flex items-center gap-2">{toolbar}</div> : null}
    </div>
  )
}
