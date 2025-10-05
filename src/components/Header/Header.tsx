import { logo } from "@assets/images";
import { AddSquar, User } from "@components/Icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const menu = [
        { name: "خانه", key: "" },
        { name: "خدمات", key: "services" },
        { name: "نمونه‌کارها", key: "portfolio" },
        { name: "درباره ما", key: "about" },
        { name: "تماس", key: "contact" },
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
        <header className={`w-full bg-transparent fixed top-0 left-0 z-50 flex items-center ${scrolled && 'p-4 max-md:p-2'} duration-300`}>
            <div className={`${scrolled ? "backdrop-blur-lg rounded-xl shadow-lg" : "bg-transparent"} duration-300
              flex items-center justify-between py-4 px-4 max-md:py-2 w-full`}>
                {/* Logo */}
                <div className="lg:w-1/3 flex justify-start items-center">
                    <img src={logo} alt="وبلو" className="h-12" />
                    <h2 className="text-xl text-zinc-800 YekanBlack">  وبلو </h2>
                </div>

                {/* Navigation Links - Desktop */}
                <nav className="lg:w-1/3 hidden md:flex justify-center items-center gap-8  font-medium">
                    {menu.map((i, idx) => (
                        <Link key={idx} to={`/${i.key}`} className="hover:text-blue-500 duration-200 "> {i.name} </Link>
                    ))}
                </nav>

                {/* CTA Buttons - Desktop */}
                <div className="lg:w-1/3 hidden md:flex items-center justify-end gap-4">
                    {/* Start Project Button */}
                    <Link to="">
                        <button className="cursor-pointer py-2 px-4 flex gap-2 rounded-lg border border-blue-500/60 text-blue-600 
                        bg-white/10 backdrop-blur-md hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]
                        transition-all duration-300">
                            شروع پروژه
                            <AddSquar />
                        </button>
                    </Link>

                    {/* Register/Login Button */}
                    <Link to="/register">
                        <button className="cursor-pointer py-2 px-4 flex gap-2 rounded-lg border border-zinc-500/60 text-zinc-700 
                        bg-white/10 backdrop-blur-md hover:border-blue-500 hover:text-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]
                        transition-all duration-300">
                            ثبت نام / ورود
                            <User />
                        </button>
                    </Link>
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