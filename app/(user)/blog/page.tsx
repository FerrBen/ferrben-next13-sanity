import BannerBlog from '../../../components/BlogBanner'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '../../../lib/sanity.client'
import PreviewSuspense from '../../../components/PreviewSuspense'
import PreviewBlogList from '../../../components/PreviewBlogList'
import BlogList from '../../../components/BlogList'

const query = groq`
*[_type == "post"] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

export const revalidate = 60

export default async function Blog() {
  if (previewData()) {
    return (
      <>
        <BannerBlog />
        <PreviewSuspense
          fallback={
            <div role="status">
              <p className="animate-pulse text-center text-lg text-indigo-700">
                Loading Preview Data...
              </p>
            </div>
          }
        >
          <div>Preview Mode</div>
          <PreviewBlogList query={query} />
        </PreviewSuspense>
      </>
    )
  }

  const posts = await client.fetch(query)

  return (
    <>
      <BannerBlog />
      <BlogList posts={posts} />
    </>
  )
}
