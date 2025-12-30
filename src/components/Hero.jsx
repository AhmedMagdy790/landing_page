import images from "../assets/index";
import ScrollAnmation from "./ScrollAnmation"

const Hero = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col mb-10 lg:flex-row items-center gap-10 xl:gap-30">
                    <div className="flex flex-col justify-between basis-2/4">
                    <ScrollAnmation type="fade" direction="right" delay={700}>
                        <h1 className="text-6xl xl:text-7xl leading-tight mb-10">Navigating the digital landscape for success</h1>
                    </ScrollAnmation>
                    <ScrollAnmation type="fade" direction="top" delay={700}>
                        <img className="w-full max-w-xl mx-auto lg:hidden" src={images['./images/hero.png']} alt="Digital marketing illustration" />
                    </ScrollAnmation>
                        <div>
                    <ScrollAnmation type="fade" direction="left" delay={100}>
                            <p className="mb-10 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad harum, deleniti provident nihil fuga asperiores quos tempore consectetur iure illo. Possimus voluptate voluptatem at, facere ipsum ipsam blanditiis pariatur.</p>
                    </ScrollAnmation>
                    <ScrollAnmation type="fade" direction="right" delay={100}>
                            <a className="block md:inline-block py-4 px-8 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition shadow-2xl" href="#">Book a consultation</a>
                    </ScrollAnmation>
                        </div>
                    </div>
                    <div className="hidden lg:block basis-2/4 ">
                        <img className="w-full max-w-xl mx-auto" src={images['./images/hero.png']} alt="Digital marketing illustration" />
                    </div>
                </div>

                    <ScrollAnmation type="fade" direction="right" delay={100}>
                <div className="flex flex-col lg:flex-row gap-x-15 gap-y-5 py-10 overflow-hidden md:overflow-visible">
                        <div className="flex gap-x-10 ms-auto lg:ms-0">
                            <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/amazon.png']} alt="Amazon Logo" />
                            <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/company_logo.png']} alt="Company Logo" />
                            <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/hubspot.png']} alt="HubSpot Logo" />
                        </div>
                    <div className="flex gap-x-10 me-auto lg:me-0">
                        <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/netflix.png']} alt="Netflix Logo" />
                        <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/notion.png']} alt="Notion Logo" />
                        <img className="w-30 sm:w-34 lg:w-38 grayscale" src={images['./images/zoom.png']} alt="Zoom Logo" />
                    </div>
                </div>
                    </ScrollAnmation>


            </div>
        </section>
    );
}

export default Hero;