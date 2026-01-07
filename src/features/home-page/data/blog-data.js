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
  },
  {
    id: 6,
    title: "PolyCloud is on the horizon! and The Basement is progressing!",
    date: "2025-09-29",
    content: "No Image sorry~ but I have 2 things in development! The Basement is finally getting some of my focus back and I also started recording some voice lines yes it will have me as a voice actor! and also another project of mine to utilize free cloud storages in one place the PolyCloud! It would be open source so look out for it!",
    image: '',
  },
  {
    id: 7,
    title: "Diving into Microservices Architecture",
    date: "2026-01-5",
    content: "There's been plenty of things that I've learned from starting this massive microservice project 'AllFriends' while it's still in early development, I've learned a lot about how to structure services and communicate between them effectively. About GraphQL and even created an npm library for the shared models and database connections. Excited to see where this project goes!",
    image: '',
  }
]