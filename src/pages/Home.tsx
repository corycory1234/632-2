import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router"

export default function HomePage() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    navigate(`/search?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">

        <div className="mb-10 text-center">
          <h1 className="text-[2rem] font-semibold tracking-tight text-ink text-balance">
            找下一本書
          </h1>
          <p className="mt-2.5 text-[0.9375rem] text-muted">
            透過 Google Books 探索數百萬本書籍
          </p>
        </div>

        <form onSubmit={handleSearch} noValidate>
          <div className="relative flex items-center">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜尋書名、作者、ISBN…"
              autoComplete="off"
              spellCheck={false}
              className="
                w-full h-14 pl-5 pr-24
                text-[1rem] text-ink placeholder:text-muted
                bg-bg border border-border rounded-full
                outline-none
                transition-[border-color,box-shadow] duration-150 ease-out
                focus:border-primary focus:ring-[3px] focus:ring-primary/15
              "
            />
            <button
              type="submit"
              disabled={!query.trim()}
              aria-label="搜尋"
              className="
                absolute right-1.5
                h-11 px-5 rounded-full
                text-[0.875rem] font-medium text-white
                bg-primary hover:bg-primary-hover
                active:scale-[0.97]
                transition-[background-color,transform] duration-150 ease-out
                disabled:opacity-40 disabled:cursor-not-allowed
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
              "
            >
              搜尋
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
