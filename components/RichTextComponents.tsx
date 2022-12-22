import Image from 'next/image'
import Link from 'next/link'
import urlFor from '../lib/urlFor'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative m-10 mx-auto h-96 w-full">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-extrabold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-extrabold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl font-extrabold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl font-extrabold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-indigo-600 py-5 pl-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-indigo-600 hover:text-black"
        >
          {children}
        </Link>
      )
    },
  },
}
