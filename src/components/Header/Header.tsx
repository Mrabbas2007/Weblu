import { logo } from "@assets/images";
import { AddSquar, CallIcon } from "@components/Icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const menu = [
        {name: "خانه", key: ""},
        {name: "خدمات", key: "services"},
        {name: "نمونه‌کارها", key: "portfolio"},
        {name: "درباره ما", key: "about"},
        {name: "تماس", key: "contact"},
    ]

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <header className="w-full bg-transparent fixed top-0 left-0 z-50">
            <div className={`${scrolled ? "backdrop-blur-lg rounded-xl shadow-lg mt-2 w-[90%]" : "bg-transparent w-full"} duration-300
             container  mx-auto flex items-center justify-between p-4`}>
                {/* Logo */}
                <div className="w-1/3 flex justify-start items-center">
                    <img src={logo} alt="وبلو" className="h-12" />
                    <h2 className="text-xl text-zinc-800 YekanBlack">  وبلو </h2>
                </div>

                {/* Navigation Links - Desktop */}
                <nav className="w-1/3 hidden md:flex justify-center items-center gap-8  font-medium">
                    {menu.map((i, idx) => (
                        <Link key={idx} to={`/${i.key}`} className="hover:text-blue-500 duration-200 "> {i.name} </Link>
                    ))}
                </nav>

                {/* CTA Buttons - Desktop */}
                <div className="w-1/3 hidden md:flex items-center justify-end gap-4">
                    <button className="py-2 px-4 flex gap-2 rounded-lg border-2 border-white hover:bg-white hover:text-blue-700 transition">
                        شروع پروژه
                        <AddSquar />
                    </button>
                    <button className="py-2 px-4 flex gap-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                        مشاوره رایگان
                        <CallIcon className="text-white"/>
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button id="mobile-menu-button" className="text-black focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* ..  .. */}
        </header>

    )
}

export default Header;