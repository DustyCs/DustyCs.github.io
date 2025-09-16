import SliderBG from '../../../assets/projects/SliderBG.png'
import Post1 from '../../../assets/blog/Post1.PNG'
import Post2 from '../../../assets/blog/Post2.PNG'

export const blogPosts = [
  {
    id: 1,
    title: "Started My Portfolio",
    date: "2025-08-10",
    content: "I finally started building my portfolio using React and Tailwind!",
    image: SliderBG,
  },
  {
    id: 2,
    title: "Learning Next.js",
    date: "2025-08-15",
    content: "Tried Next.js today — SSR is really nice for SEO and blogs.",
    image: SliderBG,
  },
  {
    id: 3,
    title: "Latest Project: RPS Online",
    date: "2025-08-18",
    content: "Just deployed my RPS Online game — really happy with the animations",
    images: [
      SliderBG,
      SliderBG,
    ], 
  },
  {
    id: 4,
    title: "Updated the website!",
    date: "2025-09-05",
    content: "Finally able to focus on my website again, added a blog section and portfolio. and change the graphics a bit",
    image: Post1,
  },
  {
    id: 5,
    title: "Created my first post on LinkedIn!",
    date: "2025-09-14",
    content: "So, Posted something just to try and get tracktion of my account. Hoping maybe some recruiters would visit my profile! still looking for ojt/internships! Contact me if you are interested!",
    image: Post2,
  }
]