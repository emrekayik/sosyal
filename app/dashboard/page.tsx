import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">sosyal</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/dashboard">Panel'e git</Link></li>
            <li>
              <details>
                <summary>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </summary>
                <ul className="p-2 bg-base-100">
                  <li><a href="https://github.com/emrekayik/sosyal">Github</a></li>
                  <li><a>Hakkında</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    <div>
        dashboard
    </div>
    </div>
  )
}
