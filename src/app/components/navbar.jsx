import Link from "next/link";

const Navbar = () => {
    
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-800/30 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
                <div className="navbar-start sm:hidden block">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                            <Link href="/" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/work" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/resume" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Contact
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
                <Link href="/" className="text-xl font-semibold tracking-tight text-white">
                    Ashikul
                </Link>
                <nav className="sm:block hidden">
                    <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-100">
                        <li>
                            <Link href="/" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/work" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/resume" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="rounded-lg px-3 py-2 transition hover:bg-white/10">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
