import type { BookItem } from "@/types/books.types"

interface BookResultItemProps {
  book: BookItem
  index: number
}

export function BookResultItem({ book, index }: BookResultItemProps) {
  const { title, authors, publishedDate, imageLinks, description } = book.volumeInfo
  const year = publishedDate?.slice(0, 4)
  const authorLine = authors?.join(", ")
  const staggerDelay = Math.min(index, 7) * 35

  return (
    <li
      className="py-4 flex gap-4 animate-book-item motion-reduce:animate-none"
      style={{ animationDelay: `${staggerDelay}ms` }}
    >
      {imageLinks?.thumbnail !== undefined ? (
        <img
          src={imageLinks.thumbnail}
          alt={`${title} cover`}
          width={48}
          height={72}
          className="w-12 h-[4.5rem] flex-shrink-0 rounded object-cover bg-surface"
        />
      ) : (
        <div
          className="w-12 h-[4.5rem] flex-shrink-0 rounded bg-surface border border-border flex items-center justify-center"
          aria-hidden
        >
          <span className="text-lg font-semibold text-muted select-none">
            {title.charAt(0).toUpperCase()}
          </span>
        </div>
      )}

      <div className="flex-1 min-w-0 py-0.5">
        <h2 className="text-[0.9375rem] font-semibold text-ink leading-snug line-clamp-2">
          {title}
        </h2>
        {(authorLine !== undefined || year !== undefined) && (
          <p className="mt-0.5 text-[0.8125rem] text-muted">
            {[authorLine, year].filter(Boolean).join(" · ")}
          </p>
        )}
        {description !== undefined && (
          <p className="mt-1.5 text-[0.8125rem] text-muted leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </li>
  )
}
