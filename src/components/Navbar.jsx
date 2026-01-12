import images from "../assets/index";
import {navItems} from "../constants/index";
import { TextAlignJustify, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [showModel, setShowModel] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
        } else if (savedTheme === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
        } else {
        // احترام نظام التشغيل
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        }
    };

    const toggleModel = () => {
        setShowModel(!showModel);
    }

    useEffect(() => {
        const onScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll < 50) {
            setShowNav(true);
        } else if (currentScroll > lastScroll) {
            setShowNav(false); 
        } else {
            setShowNav(true);
        }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScroll]);

    useEffect(() => {
        document.body.style.overflow = showModel ? 'hidden' : 'auto';
    }, [showModel]);

    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );



    return (
        <>
        <div className="h-[91px]">
                <nav className={`
                   
                    ${showNav ? "translate-X-0" : "-translate-X-full"}
                     ${lastScroll > 50  ? 'bg-black/10 dark:bg-black/70 text-white  drop-shadow-sm' : ''}
                    fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition
                    `}>
                    <div className="container mx-auto px-5">
                        <div className="flex justify-between items-center py-5">
                            <div className="z-[51] ">
                                    {/* Light mode */}
                                    <img
                                    className={`
                                        ${showModel ? 'animate-logo' : 'animate-logo-menu-close'}
                                        z-[51] block dark:hidden
                                        w-[150px] max-w-[200px]
                                    `}
                                    src={images['./images/logo.png']}
                                    alt="Company Logo"
                                    />

                                    {/* Dark mode */}
                                    <img
                                    className={`
                                        
                                        ${showModel ? 'animate-logo' : 'animate-logo-menu-close'}
                                        transition
                                        z-[51] hidden dark:block
                                        w-[150px] max-w-[200px]
                                    `}
                                    src={images['./images/logo-light.png']}
                                    alt="Company Logo Dark"
                                    />

                            </div>

                            {/* Layer  */}
                            {showModel && (
                                <div
                                    onClick={() => setShowModel(false)}
                                    className="fixed top-0 right-0 bottom-0 h-screen inset-0 bg-black/40 z-40 lg:hidden"
                                />
                            )}


                            <div className={` 
                                ${showModel 
                                    ? 'flex'
                                    : 'hidden'} 
                                transition-all
                                text-neutral-500
                                lg:flex items-center gap-12 
                               
                                ${showModel 
                                    ? `z-50 pt-[100px] py-5 px-5 min-w-80 flex-col items-start absolute start-0 top-0 bottom-0 
                                    h-screen bg-main-color shadow-lg
                                    animate-open-menu
                                    `
                                    : ""
                                }
                                `}>
                                <button type="button" onClick={() => setShowModel(false)} 
                                className="lg:hidden p-2 cursor-pointer active:scale-120 transition absolute top-2 right-2" aria-label="Open Menu">
                                    <X size={30} />
                                </button>
                                
                                <ul className={`
                                    flex gap-3
                                    
                                    ${showModel
                                        ? "flex-col"
                                        : ""
                                    }
                                    text-color-text
                                    `}>
                                    {navItems.map((item, index) => (
                                        <li key={index}>
                                            <a 
                                            className="inline-block py-2 px-3 text-shadow-[0px_0px_15px_#fff] transition-transform duration-200 ease-out  will-change-transform text-base leading-normal hover:-translate-y-1" 
                                            href={item.href}>{item.label} </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-5 flex-col-reverse lg:flex-row">
                                        <button
                                                onClick={toggleTheme}
                                                className="self-start p-4 rounded-full bg-blue-500/90 dark:bg-gray-700 text-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
                                            >
                                                {isDark ? (
                                                    <Moon color="#fff"/>
                                                ) : (
                                                    <Sun color="#fff"/>
                                                )}
                                            </button>
                                        <a 
                                        className={`
                                            text-color-text
                                            text-sm md:text-base px-6 py-4 
                                            md:px-8 border 
                                            rounded-lg
                                            hover:bg-black hover:text-white dark:hover:bg-color-primary dark:hover:text-color-dark
                                            active:bg-black active:text-white dark:active:bg-color-primary dark:active:text-color-dark
                                            transition`}
                                        href="#">Request a quote</a>
                                </div>
                            </div>


                            <button type="button" onClick={toggleModel} className=" text-color-text p-2 lg:hidden cursor-pointer active:scale-120 transition" aria-label="Open Menu">
                                    {showModel ? <X size={30} /> : <TextAlignJustify size={30}/> }
                            </button>
                        </div>
                    </div>
                </nav>

        </div>
        </>
    );
}

export default Navbar;