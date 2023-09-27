import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">sosyal</h1>
            <p className="py-6">Sosyal medya kanallarınızı tek yerden paylaşın.</p>
            <Link className="btn btn-primary" href="/login">Panel'e git</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
