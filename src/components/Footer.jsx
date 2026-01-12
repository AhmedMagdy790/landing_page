import {navItems, footerData} from "../constants/index";
import { Facebook, X} from 'lucide-react';
import images from "../assets/index";
import ScrollAnmation from "./ScrollAnmation"
import Header from "./Header"



const Footer = () => {

    return (
        <section className="pt-10">
            <div className="container mx-auto px-4 bg-color-dark pt-10 pb-10 px-10 md:px-20 rounded-4xl rounded-b-none">
                {/* top Footer */}
                <div className="flex gap-10 items-center justify-between mb-10">
                    <img
                        className={`
                            z-[51]
                            w-[120px] max-w-[200px]
                        `}
                        src={images['./images/logo-light.png']}
                        alt="Company Logo Dark"
                        />

                    <div className="hidden lg:flex lg:gap-6 xl:gap-10 items-center gap-2">
                        {navItems.map((item) => (
                            <a className="text-white underline decoration-white block" href={item.href}>{item.label}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Facebook
                            className="
                                bg-white p-2 w-[40px] h-[40px] rounded-full cursor-pointer
                                transition-all duration-300
                                hover:bg-blue-600 hover:text-white hover:scale-110
                                active:bg-blue-600 active:text-white active:scale-110
                            "
                            />
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <X
                            className="
                                bg-white p-2 w-[40px] h-[40px] rounded-full cursor-pointer
                                transition-all duration-300
                                hover:bg-black hover:text-white hover:scale-110
                            "
                            />
                        </a>

                        <a
                            href="#"
                            className="
                            inline-block bg-white font-bold text-lg
                            p-2 w-[40px] h-[40px] leading-[24px]
                            text-center rounded-full cursor-pointer
                            transition-all duration-300
                            hover:bg-blue-700 hover:text-white hover:scale-110
                            "
                        >
                            in
                        </a>
                        </div>

                </div>

                {/* Contact US */}
                <div className="flex flex-col lg:flex-row gap-5 justify-between mb-10">
                    <div className="basis-2/5">
                        <h2 className="inline-block mb-5 py-0.5 px-1 rounded-md bg-color-primary">Contact Us:</h2>
                        <div className="">
                            <span className="block text-white mb-2">{footerData['email']}</span>
                            <span className="block text-white mb-2">{footerData['phone']}</span>
                            <span className="block text-white">{footerData['address']}</span>
                            <span className="block text-white">{footerData['stardust']}</span>
                        </div>
                    </div>
                    <div className="basis-3/5 self-center w-full">
                        <form action="" method="post">
                            <div className="flex flex-col lg:flex-row bg-[#292A32] items-center gap-5 py-[40px] px-[30px] rounded-lg ">
                                <input type="email" name="email" className="w-full py-4 px-10 text-sm text-white border-1 border-white placeholder:text-white rounded-md outline-2 outline-transparent focus:outline-color-primary" placeholder="Email" required/>
                                <button className="bg-color-primary w-full text-black text-sm py-4 px-10 rounded-lg cursor-pointer">Subscrube to news</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* CopyRight */}
                <div className="text-white pt-10 pb-5 border-t-1 border-white">
                    <h2>&copy; 2026 Positivus, All Right Reserved. <a className="underline ms-5 cursor-pointer">Privacy Policy</a></h2>
                </div>

            </div>

        </section>
    );
}

export default Footer;