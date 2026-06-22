export interface VolumeInfo {
  title: string
  authors?: string[]
  publishedDate?: string
  imageLinks?: { thumbnail?: string }
  description?: string
}

export interface BookItem {
  id: string
  volumeInfo: VolumeInfo
}

export interface BooksData {
  totalItems?: number
  items?: BookItem[]
}
