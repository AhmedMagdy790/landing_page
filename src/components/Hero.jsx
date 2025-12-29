import images from "../assets/index";

const Hero = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col mb-10 lg:flex-row items-center gap-10 xl:gap-30">
                    <div className="flex flex-col justify-between basis-2/4">
                        <h1 className="text-6xl xl:text-7xl leading-tight mb-10">Navigating the digital landscape for success</h1>
                        <img className="w-full max-w-xl mx-auto lg:hidden" src={images['./images/hero.png']} alt="Digital marketing illustration" />
                        <div>
                            <p className="mb-10 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad harum, deleniti provident nihil fuga asperiores quos tempore consectetur iure illo. Possimus voluptate voluptatem at, facere ipsum ipsam blanditiis pariatur.</p>
                            <a className="block md:inline-block py-4 px-8 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition shadow-2xl" href="#">Book a consultation</a>
                        </div>
                    </div>
                    <div className="hidden lg:block basis-2/4 ">
                        <img className="w-full max-w-xl mx-auto" src={images['./images/hero.png']} alt="Digital marketing illustration" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center py-10 gap-x-10 lg:gap-x-20 gap-y-5">
                    <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/amazon.png']} alt="Amazon Logo" />
                    <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/company_logo.png']} alt="Company Logo" />
                    <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/hubspot.png']} alt="HubSpot Logo" />
                    <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/netflix.png']} alt="Netflix Logo" />
                    <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/notion.png']} alt="Notion Logo" />
                    <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/zoom.png']} alt="Zoom Logo" />
                </div>


            </div>
        </section>
    );
}

export default Hero;