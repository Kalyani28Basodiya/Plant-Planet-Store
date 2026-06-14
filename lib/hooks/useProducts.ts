import { useQuery } from '@tanstack/react-query'

export function useProducts(category?: string) {
  return useQuery({
    queryKey: ['products', category],
    queryFn: async () => {
      const url = category && category !== 'all'
        ? `/api/products?category=${category}`
        : '/api/products'
      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to fetch')
      return res.json()
    },
  })
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const res = await fetch(`/api/products/${slug}`)
      if (!res.ok) throw new Error('Failed to fetch')
      return res.json()
    },
  })
}
