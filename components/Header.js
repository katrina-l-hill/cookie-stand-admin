import Link from 'next/link'

export default function Header() {
    return (
        <header className="px-8 py-2 text-4xl text-black bg-emerald-500">
            <h1 className="text-4xl">Cookie Stand Admin</h1>
            {/* <button className='ml-auto mr-6 text-sm bg-gray-200 border rounded hover:bg-gray-500'>Overview</button> */}
            <div className="flex items-center gap-2 ">
                {username && <><Link href="/user" ><a className="px-3 py-1 text-gray-800 bg-green-100 rounded-lg">{username}</a></Link>
                    <Link href="/">
                        <a onClick={onLogout} className="px-3 py-1 text-gray-100 bg-green-600 rounded-lg">Sign Out</a>
                    </Link>
                    <nav>
                        <Link href="/overview"><a className="px-2 py-1 rounded bg-green-50">Overview</a></Link>
                    </nav>
                </>
                }
            </div>
        </header>
    );
}