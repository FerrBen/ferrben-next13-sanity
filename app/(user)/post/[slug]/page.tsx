import BannerBlog from '../../../../components/BlogBanner'
import { groq } from 'next-sanity'
import { client } from '../../../../lib/sanity.client'
import Image from 'next/image'
import urlFor from '../../../../lib/urlFor'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '../../../../components/RichTextComponents'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60

export async function getStaticParams() {
  const query = groq`
    *[_type == "post"] {
        slug
    }
    `
  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug: any) => slug.slug.current)

  return slugRoutes.map((slug) => {
    slug
  })
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    }
    `
  const post = await client.fetch(query, { slug })

  return (
    <>
      <BannerBlog />
      <article className="rounded-lg px-10 pb-28">
        <section className=" space-y-2 rounded-lg border border-indigo-600 text-white">
          <div className="min-h-56 relative flex flex-col justify-between rounded-lg md:flex-row">
            <div className="absolute top-0 h-full w-full rounded-lg p-10 opacity-10 blur-sm">
              <Image
                className="mx-auto rounded-lg object-cover object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>

            <section className="w-full rounded-lg bg-indigo-600 p-5">
              <div className="flex flex-col justify-between gap-y-5 rounded-lg md:flex-row">
                <div>
                  <h1 className="text-4xl font-extrabold">{post.title}</h1>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    className="rounded-full"
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                  />

                  <div className="w-64">
                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                    <div>{/* TODO: Author BIO */}</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="pt-10 italic">{post.description}</h2>
                <div className="mt-auto flex items-center justify-end space-x-2">
                  {post.categories.map((category: any) => (
                    <p
                      key={category._id}
                      className="mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-white"
                    >
                      {category.title}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        <PortableText value={post.body} components={RichTextComponents} />
      </article>
    </>
  )
}

export default Post
