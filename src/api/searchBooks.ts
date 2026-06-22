import type { BooksData } from "@/types/books.types"
import { axiosInstance } from "@/services/http"

export default function getSearchBooks(query: string) {
  return axiosInstance.get<BooksData>("/volumes", {
    params: { q: query },
  })
}