// import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium, FaBlog, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-gray-800/30 py-8 text-center text-sm text-slate-400">
            <div className="p-6 mt-4">
                <button className="btn glass rounded-full border-white/20 bg-white/5 mb-3 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                    Get in touch

                </button>
                <p>What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </p>

                <div className="flex flex-row items-center justify-center gap-2 my-3 mt-8">
                    {/* Icon Container */}
                    <div className=" ">
                        {/* flex h-8 w-8 items-center glass justify-center rounded-full bg-white/10 text-white */}
                        <FaEnvelope className="h-4 w-4" />
                    </div>

                    {/* Link */}
                    <a href="mailto:theashikulakash@gmail.com" className="text-slate-400  hover:text-blue-400 hover:text-slate-500 transition-colors">
                        theashikulakash@gmail.com
                    </a>
                </div>
                <p>
                    You may also find me on these platforms!
                </p>
                <div className="flex flex-row gap-3 mt-3 items-center justify-center text-center">
                    <a href="https://github.com/theashikulakash" className="rounded-full glass bg-white/10 p-3 text-white transition hover:bg-white/20">
                        <FaGithub className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/theashikulakash" className="rounded-full glass bg-white/10 p-3 text-white transition hover:bg-white/20">
                        <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a href="https://theashikulakash.medium.com" className="rounded-full glass bg-white/10 p-3 text-white transition hover:bg-white/20">
                        <FaMedium className="h-5 w-5" />
                    </a>
                    <a href="/blog" className="rounded-full glass bg-white/10 p-3 text-white transition hover:bg-white/20">
                        <FaBlog className="h-5 w-5" />
                    </a>
                    <a href="https://x.com/theashikulakash" className="rounded-full glass bg-white/10 p-3 text-white transition hover:bg-white/20">
                        <FaXTwitter className="h-5 w-5" />
                    </a>
                    <a href="https://leetcode.com/u/theashikulakash/" className="rounded-full glass bg-white/10 p-3 text-white transition hover:bg-white/20">
                        <SiLeetcode className="h-5 w-5" />
                    </a>
                </div>

                <p className="mt-7">© {new Date().getFullYear()} Ashikul. Built with Next.js.</p>
            </div>

        </footer>
    );
};

export default Footer;
