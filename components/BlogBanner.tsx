function BlogBanner() {
  return (
    <div className="front-bold mx-auto mb-10 flex max-w-[1240px] flex-col items-center justify-between px-10 py-5 lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl">Ferruccio's Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to my{' '}
          <span className="underline decoration-indigo-700 decoration-4">
            Developer Blog
          </span>{' '}
        </h2>
      </div>

      <p className="mt-5 max-w-sm text-gray-400 md:mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa hic
        dolorem mollitia eaque repudiandae provident.
      </p>
    </div>
  )
}

export default BlogBanner
