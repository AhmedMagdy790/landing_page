import Header from "./Header";
import {caseStudiesData} from "../constants/index";
import ScrollAnmation from "./ScrollAnmation";
import { ArrowUpRight } from 'lucide-react';


const CaseStudies = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto mb-5 px-4">
                <Header title="Case Studies" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi maiores sit odit perferendis iusto nisi quasi unde ducimus, officiis possimus repellat suscipit enim vel, nemo nulla corporis esse similique." />
                <div className="rounded-3xl">  

                    <div className="pt-15 pb-5 bg-color-dark rounded-3xl text-white ">
                        <div className="flex overflow-x-scroll pb-10">
                                {caseStudiesData.map((item) => (
                                    <div className="px-20 basis-4/12 min-h-[150px] min-w-[600px]">
                                        <p className="text-lg mb-5">
                                            {item.text}
                                        </p>
                                        <a href={item.href} className="inline-flex gap-5 p-2 text-color-primary" href="#">Learn more <ArrowUpRight /> </a>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default CaseStudies;