function BlogBanner() {
  return (
    <div className="mx-auto mb-10 flex max-w-[1240px] flex-col items-center justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="px-5 text-7xl">Hey there!</h1>
        <h2 className="mt-5 px-5 md:mt-0">
          Welcome to my{' '}
          <span className="underline decoration-indigo-700 decoration-4">
            Developer Blog
          </span>{' '}
        </h2>
      </div>

      <p className=" mt-5 max-w-sm text-gray-400 md:mt-2">
        Here you can find articles about web development, programming, and
        technology. I hope you enjoy them! Opinons expressed here are my own.
      </p>
    </div>
  )
}

export default BlogBanner
