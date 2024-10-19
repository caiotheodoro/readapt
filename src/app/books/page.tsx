
import { elysia } from '@/src/services/elysia/client'
import ReaderPage from '@/src/components/pages/reader'
import React from 'react'

export default async function Reader() {
  const { data, error } = await elysia.api.books.index.get({
    query: {
      page: '1',
      pageSize: '12',
      search: ''
    }
  })

  if (error) {
    console.error('Error fetching books:', error)
    return <div>Error loading books. Please try again later.</div>
  }
  console.log(data)

  return (
    <ReaderPage />
  )
}
