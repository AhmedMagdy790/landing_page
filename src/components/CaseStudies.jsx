import Header from "./Header";
import ScrollAnmation from "./ScrollAnmation";
import { ArrowUpRight } from 'lucide-react';


const CaseStudies = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto mb-5 px-4">
                <Header title="Case Studies" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi maiores sit odit perferendis iusto nisi quasi unde ducimus, officiis possimus repellat suscipit enim vel, nemo nulla corporis esse similique." />
                <div className="flex  items-center mb-30 overflow-x-auto rounded-3xl">                        
                    <div className="flex min-w-max shrink-0 py-15 bg-color-dark rounded-3xl text-white">
                        <div className="px-20 basis-4/12">
                            <p className="mb-5 max-w-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit voluptas voluptates natus corporis ex, culpa ullam iusto nobis ipsum itaque officia doloremque alias molestiae. Facere provident nobis eos quia!
                            </p>
                            <a className="inline-flex gap-5 p-2 text-color-primary" href="#">Learn more <ArrowUpRight /> </a>
                        </div>
                        <div className="basis-4/12 px-20 border-r border-l border-gray-400">
                            <p className="mb-5 max-w-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit voluptas voluptates natus corporis ex, culpa ullam iusto nobis ipsum itaque officia doloremque alias molestiae. Facere provident nobis eos quia!
                            </p>
                            <a className="inline-flex gap-5 p-2 text-color-primary" href="#">Learn more <ArrowUpRight /> </a>
                        </div>
                         <div className="basis-4/12 px-20">
                            <p className="mb-5 max-w-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit voluptas voluptates natus corporis ex, culpa ullam iusto nobis ipsum itaque officia doloremque alias molestiae. Facere provident nobis eos quia!
                            </p>
                            <a className="inline-flex gap-5 p-2 text-color-primary" href="#">Learn more <ArrowUpRight /> </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CaseStudies;