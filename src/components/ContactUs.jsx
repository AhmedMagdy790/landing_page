import {testimonialsData} from "../constants/index";
import ScrollAnmation from "./ScrollAnmation"
import Header from "./Header"



const ContactUs = () => {


    return (
        <section className="py-10">
            <div className="container mx-auto mb-5 px-4">
                <Header title="Contact Us" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi maiores sit odit perferendis iusto nisi quasi unde ducimus, officiis possimus repellat suscipit enim vel, nemo nulla corporis esse similique." />
                  <ScrollAnmation type="fade" direction="top" delay={700}>
                    <div className="bg-main-color dark:bg-color-dark pt-10 pb-10 px-10 md:px-20 rounded-4xl">
                        <form>

                                <div className="flex gap-5 mb-10">
    
                                    {/* Say Hi */}
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                        type="radio"
                                        name="contact-type"
                                        value="sayhi"
                                        className="hidden peer"
                                        defaultChecked
                                        />

                                        <span className="
                                        w-5 h-5 rounded-full border-3 border-white
                                        outline-1 outline-color-dark/85
                                        flex items-center justify-center
                                        peer-checked:bg-color-primary
                                        ">
                                        </span>

                                        <span className="text-dark">Say Hi</span>
                                    </label>

                                    {/* Get a Quote */}
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                        type="radio"
                                        name="contact-type"
                                        value="quote"
                                        className="hidden peer"
                                        />

                                        <span className="
                                        w-5 h-5 rounded-full border-3 border-white
                                        outline-1 outline-color-dark/85
                                        flex items-center justify-center
                                            peer-checked:bg-color-primary
                                        ">
                                    
                                        </span>

                                        <span>Get a Quote</span>
                                    </label>

                                </div>

                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm block w-full px-3 py-2.5 focus:outline-none"
                                        placeholder="Name"
                                        required
                                    />
                                    </div>

                                    <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm block w-full px-3 py-2.5 focus:outline-none"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div className="mb-10">
                                    <label for="message" class="block mb-2.5 text-sm font-medium text-heading">Your message</label>
                                    <textarea id="message" rows="4" class="min-h-[200px] max-h-[400px] bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm block w-full px-3 py-2.5 focus:outline-none" placeholder="Write your thoughts here..."></textarea>
                                </div>

                                <button type="submit" className="bg-color-dark text-white py-4 w-full rounded-lg">Send Message</button>

                            </form>

                    </div>

                  </ScrollAnmation>
            </div>

        </section>
    );
}

export default ContactUs;