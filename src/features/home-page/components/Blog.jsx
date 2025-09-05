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
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-4xl font-bold mb-4">DevLog</h1>
      <article className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* Carousel (left side) */}
        {images.length > 0 && (
          <div className="relative w-full md:w-2/5 max-h-[30rem] overflow-hidden rounded-lg shadow-md flex items-center justify-center bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`${latestPost.title} ${index + 1}`}
                className="max-h-[30rem] w-auto object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>

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

        {/* Text (right side) */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{latestPost.title}</h2>
          <p className="text-gray-500 text-sm mb-2">{latestPost.date}</p>
          <p className="text-gray-700">{latestPost.content}</p>
        </div>
      </article>
    </div>
  )
}