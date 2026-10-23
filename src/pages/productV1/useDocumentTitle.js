// Sets document.title for the page (titles recorded in specs/product.md §4 and specs/product-integrations.json).
import { useEffect } from 'react'

export function useDocumentTitle(title) {
  useEffect(() => {
    if (!title) return undefined
    const prev = document.title
    document.title = title
    return () => {
      document.title = prev
    }
  }, [title])
}
