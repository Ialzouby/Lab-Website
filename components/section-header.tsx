import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Loader2, AlertCircle, CheckCircle2, Clock } from "lucide-react"

interface SectionHeaderProps {
  title: string
  status: "idle" | "loading" | "ready" | "error"
  error?: string | null
  toolbar?: React.ReactNode
}

export default function SectionHeader({ title, status, error, toolbar }: SectionHeaderProps) {
  return (
    <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        {status === "idle" && (
          <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
            <Clock className="mr-2 h-4 w-4" />
            Idle
          </Badge>
        )}

        {status === "loading" && (
          <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Badge>
        )}

        {status === "ready" && (
          <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Ready
          </Badge>
        )}

        {status === "error" && (
          <Badge variant="destructive" className="bg-red-500/20 text-white hover:bg-red-500/30">
            <AlertCircle className="mr-2 h-4 w-4" />
            Error
          </Badge>
        )}
      </div>

      {toolbar && <div className="flex-shrink-0">{toolbar}</div>}

      {error && (
        <div className="lg:col-span-2">
          <p className="text-sm text-red-200">{error}</p>
        </div>
      )}
    </div>
  )
}
