import Link from "next/link";

export default function Navbar () {
    return (
        <div>
            <header className="text-gray-600 body-font bg-zinc-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://img.icons8.com/?size=80&id=mbdIxslXkXfK&format=png" alt="logo"/>
      <span className="ml-3 text-2xl">THE BLOGS</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-2xl font-bold justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    
  </div>
</header>
        </div>
    )
}