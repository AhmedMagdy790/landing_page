import images from "../assets/index";
import {navItems} from "../constants/index";
import { TextAlignJustify } from 'lucide-react';

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 right-0 z-50 py-3 backdrop-blur-lg">
                <div className="container mx-auto px-3">
                    <div className="flex justify-between items-center py-5">
                        <div>
                            <img src={images['./images/logo.png']} alt="Company Logo" />
                        </div>
                        <div className="hidden lg:flex items-center gap-12">
                            <ul className="flex gap-3">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                        className="inline-block py-2 px-3 transition-transform duration-200 ease-out  will-change-transform text-base leading-normal hover:-translate-y-1 " 
                                        href={item.href}>{item.label} </a>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <a className="py-4 px-8 border rounded-md hover:bg-black hover:text-white transition" href="#">Request a quote</a>
                            </div>
                        </div>
                        <button type="button" className="lg:hidden cursor-pointer" aria-label="Open Menu">
                                <TextAlignJustify />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;