import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function MainLayout() {
  return (
    <div className="w-full !h-screen flex flex-col">
        <NavBar />
        <main className="h-full">
            <Outlet />
        </main>
    </div>
  )
}
