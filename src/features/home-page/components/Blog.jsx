import { blogPosts } from "../data/blog-data"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


export default function Blog() {
  const latestPost = blogPosts[blogPosts.length - 1]
  const [index, setIndex] = useState(0)

  if (!latestPost) {
    return <p>No posts yet!</p>
  }

  const images = latestPost.images || (latestPost.image ? [latestPost.image] : [])

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }
  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="bg-white p-6 rounded shadow relative">
      <h1 className="text-4xl font-bold mb-4">BLOG</h1>
      <article>
        <h2 className="text-2xl font-semibold">{latestPost.title}</h2>
        <p className="text-gray-500 text-sm">{latestPost.date}</p>

        {/* Carousel */}
        {images.length > 0 && (
          <div className="relative my-4 h-80 w-full overflow-hidden rounded-lg shadow-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`${latestPost.title} ${index + 1}`}
                className="absolute h-full w-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>

            {/* Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
                >
                  ›
                </button>
              </>
            )}
          </div>
        )}

        <p className="mt-2 text-gray-700">{latestPost.content}</p>
      </article>
    </div>
  )
}