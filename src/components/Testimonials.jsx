import {testimonialsData} from "../constants/index";
import { useRef, useState, useEffect } from "react";
import ScrollAnmation from "./ScrollAnmation"
import Header from "./Header"
import { ArrowRight } from 'lucide-react';



const Testimonials = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        if (cardRef.current) {
            const style = window.getComputedStyle(cardRef.current);
            const margin =
            parseFloat(style.marginLeft) + parseFloat(style.marginRight);

            setCardWidth(cardRef.current.offsetWidth + margin);
        }
    }, []);

    useEffect(() => {
    const calculateWidth = () => {
        if (cardRef.current) {
        const style = window.getComputedStyle(cardRef.current);
        const margin =
            parseFloat(style.marginLeft) + parseFloat(style.marginRight);

        setCardWidth(cardRef.current.offsetWidth + margin);
        }
    };

    calculateWidth(); // أول تحميل
    window.addEventListener("resize", calculateWidth);

    return () => window.removeEventListener("resize", calculateWidth);
    }, []);



    const scrollToIndex = (index) => {
        sliderRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
            });
            setActiveIndex(index);
    };

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
    };

    const next = () => {
        if (activeIndex < testimonialsData.length - 1) {
        scrollToIndex(activeIndex + 1);
        }
    };

    const prev = () => {
        if (activeIndex > 0) {
        scrollToIndex(activeIndex - 1);
        }
    }


    return (
        <section className="py-10">
            <div className="container mx-auto mb-5 px-4">
                <Header title="Testimonials" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi maiores sit odit perferendis iusto nisi quasi unde ducimus, officiis possimus repellat suscipit enim vel, nemo nulla corporis esse similique." />
                 <ScrollAnmation type="fade" direction="top" delay={700}>
                    <div className="pt-20 pb-5 bg-color-dark rounded-4xl">
                        <div onScroll={handleScroll}  ref={sliderRef}  className="flex overflow-x-scroll mb-10 scroll-smooth">


                            {testimonialsData.map((item,index) => (

                                <div ref={index === 0 ? cardRef : null} className="mx-5 flex flex-col">
                                    <div className="relative p-5 md:p-15 grow mb-5 border border-color-primary rounded-4xl w-[350px]  sm:w-[400px] md:w-[500px] lg:w-[600px]">
                                        <p className="text-white md:text-lg leading-6">{item.text}</p>
                                        <span 
                                            style={{
                                                clipPath: "polygon(51% 49%, 0% 100%, 100% 100%)"
                                            }}
                                            className="block w-[50px] h-[50px] rotate-180 absolute bottom-[-50px] left-[50px]  bg-color-primary"></span>
                                        
                                        <span 
                                            style={{
                                                clipPath: "polygon(51% 49%, 0% 100%, 100% 100%)"
                                            }}
                                            className="block w-[50px] h-[50px] rotate-180 absolute bottom-[-43px] left-[50px]  bg-color-dark"></span>

                                            
                                    </div>
                                    <div className="ps-10 py-5">
                                        <h3 className="text-lg font-bold text-color-primary">{item.user}</h3>
                                        <p className="text-white text-lg">{item.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* <ScrollAnmation style="flex basis-full lg:basis-[calc(50%-20px)] xl:basis-[calc(33%-20px)]"  type="fade" direction="right" delay={100}>
                            </ScrollAnmation> */}

                        {/* Pagination */}
                        <div className="flex justify-center items-center py-10">
                            <button onClick={prev}>
                            <ArrowRight className="text-white rotate-180 mx-5 cursor-pointer" />
                            </button>

                            <div className="flex gap-4">
                            {testimonialsData.map((_, i) => (
                                <span
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                className={`
                                    w-[14px] h-[14px] rounded-full cursor-pointer transition-all
                                    ${activeIndex === i 
                                    ? "bg-color-primary scale-125" 
                                    : "bg-white/30 hover:bg-white"}
                                `}
                                />
                            ))}
                            </div>

                            <button onClick={next}>
                            <ArrowRight className="text-white mx-5 cursor-pointer" />
                            </button>
                        </div>
                        
                    </div>

                 </ScrollAnmation>
            </div>

        </section>
    );
}

export default Testimonials;