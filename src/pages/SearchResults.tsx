import { useState, useEffect, type FormEvent } from "react"
import { useSearchParams, useNavigate, Link } from "react-router"
import { isAxiosError } from "axios"
import { BookResultItem } from "@/components/BookResultItem"
import getSearchBooks from "@/api/searchBooks"
import type { BooksData } from "@/types/books.types"

function SkeletonItem() {
  return (
    <li className="py-4 flex gap-4">
      <div className="w-12 h-[4.5rem] flex-shrink-0 rounded bg-surface animate-pulse motion-reduce:animate-none" />
      <div className="flex-1 min-w-0 py-0.5 space-y-2">
        <div className="h-[0.875rem] bg-surface rounded-full animate-pulse motion-reduce:animate-none w-3/4" />
        <div className="h-3 bg-surface rounded-full animate-pulse motion-reduce:animate-none w-1/3" />
        <div className="h-3 bg-surface rounded-full animate-pulse motion-reduce:animate-none w-full" />
        <div className="h-3 bg-surface rounded-full animate-pulse motion-reduce:animate-none w-5/6" />
      </div>
    </li>
  )
}

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const urlQuery = searchParams.get("q") ?? ""

  const [inputValue, setInputValue] = useState(urlQuery)
  const [results, setResults]       = useState<BooksData | null>(null)
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState<string | null>(null)

  useEffect(() => {
    setInputValue(urlQuery)
  }, [urlQuery])

  useEffect(() => {
    if (urlQuery === "") return

    let cancelled = false
    setLoading(true)
    setError(null)
    setResults(null)

    getSearchBooks(urlQuery)
      .then((response) => {
        if (!cancelled) setResults(response.data)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        if (isAxiosError(err)) {
          setError(
            err.response?.status === 429
              ? "搜尋太頻繁，請稍後再試。"
              : "搜尋失敗，請再試一次。"
          )
        } else {
          setError("搜尋失敗，請再試一次。")
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [urlQuery])

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    navigate(`/search?q=${encodeURIComponent(trimmed)}`)
  }

  const books = results?.items ?? []
  const total = results?.totalItems ?? 0
  const isEmpty = !loading && error === null && results !== null && books.length === 0

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-10 bg-bg border-b border-border">
        <div className="max-w-2xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link
            to="/home"
            aria-label="回到首頁"
            className="flex-shrink-0 text-ink hover:text-primary transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </Link>
          <form onSubmit={handleSearch} noValidate className="flex-1 flex items-center gap-2">
            <input
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="再次搜尋…"
              autoComplete="off"
              spellCheck={false}
              className="
                flex-1 h-10 px-4
                text-[0.9375rem] text-ink placeholder:text-muted
                bg-surface border border-border rounded-full
                outline-none
                transition-[border-color,background-color] duration-150 ease-out
                focus:border-primary focus:bg-bg focus:ring-2 focus:ring-primary/15
              "
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="
                h-10 px-5 rounded-full flex-shrink-0
                text-[0.875rem] font-medium text-white
                bg-primary hover:bg-primary-hover
                transition-colors duration-150 ease-out
                disabled:opacity-40 disabled:cursor-not-allowed
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
              "
            >
              搜尋
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">

        {loading && (
          <ul className="divide-y divide-border">
            {Array.from({ length: 6 }, (_, i) => <SkeletonItem key={i} />)}
          </ul>
        )}

        {error !== null && (
          <p className="text-[0.875rem] text-error text-center py-12" role="alert">
            {error}
          </p>
        )}

        {isEmpty && (
          <div className="text-center py-16">
            <p className="text-[0.9375rem] font-medium text-ink">
              找不到「{urlQuery}」的相關書籍
            </p>
            <p className="mt-1.5 text-[0.875rem] text-muted">
              試試其他關鍵字，或縮短搜尋條件
            </p>
          </div>
        )}

        {!loading && error === null && books.length > 0 && (
          <>
            <p className="text-[0.8125rem] text-muted mb-5">
              找到{" "}
              <span className="text-ink font-medium">{total.toLocaleString("zh-TW")}</span>{" "}
              筆結果，關鍵字「<span className="text-ink">{urlQuery}</span>」
            </p>
            <ul className="divide-y divide-border">
              {books.map((book, index) => (
                <BookResultItem key={book.id} book={book} index={index} />
              ))}
            </ul>
          </>
        )}

      </main>
    </div>
  )
}
