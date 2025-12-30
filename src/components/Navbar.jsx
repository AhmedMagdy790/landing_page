import images from "../assets/index";
import {navItems} from "../constants/index";
import { TextAlignJustify, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [showModel, setShowModel] = useState(false);

    const toggleModel = () => {
        setShowModel(!showModel);
    }


    return (
        <>
            <nav className="sticky top-0 right-0 z-50 py-3 backdrop-blur-lg">
                <div className="container mx-auto px-5">
                    <div className="flex justify-between items-center py-5">
                        <div className="z-[51]">
                            <img className={`
                                ${showModel ? 'animate-open-menu' : 'animate-logo-menu-close'} 
                                z-[51]
                                w-[150px] sm:w-auto max-w-[200px]`
                                } 
                                src={images['./images/logo.png']} alt="Company Logo" />
                        </div>
                        <div className={` 
                            ${showModel ? 'flex' : 'hidden'} 
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
                                `}>
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                        className="inline-block py-2 px-3 transition-transform duration-200 ease-out  will-change-transform text-base leading-normal hover:-translate-y-1 " 
                                        href={item.href}>{item.label} </a>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <a className="text-sm md:text-base px-6 py-4 md:px-8 border rounded-md hover:bg-black hover:text-white transition" href="#">Request a quote</a>
                            </div>
                        </div>
                        <button type="button" onClick={toggleModel} className="p-2 lg:hidden cursor-pointer active:scale-120 transition" aria-label="Open Menu">
                                {showModel ? <X size={30} /> : <TextAlignJustify size={30}/> }
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;