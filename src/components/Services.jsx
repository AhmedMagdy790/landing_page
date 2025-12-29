import images from "../assets/index";
import Header from "./Header";
import { ArrowUpRight } from 'lucide-react';
import ServicesCards from "./ServicesCards";

const Services = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto mb-5 px-4">
                <Header title="Services" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi maiores sit odit perferendis iusto nisi quasi unde ducimus, officiis possimus repellat suscipit enim vel, nemo nulla corporis esse similique." />
                <div className="flex flex-wrap gap-y-5 gap-x-8 mb-30 ">
                    <ServicesCards 
                        title="Search engine optimiztion" 
                        image={images['./images/services/image6.png']} 
                        href="#" mode="light" />
                     <ServicesCards 
                        title={ <>Pay-per-click <br /> adverting </>}
                        image={images['./images/services/image6.png']} 
                        href="#" mode="primary" />
                     <ServicesCards 
                        title={<>Social Media <br /> Marketing </>}
                        image={images['./images/services/image4.png']} 
                        href="#" mode="dark" />
                    
                    <ServicesCards 
                        title={ <>Email <br /> Marketing</>}
                        image={images['./images/services/image2.png']} 
                        href="#" mode="light" />

                    <ServicesCards 
                        title={<>Content <br /> Greation</>} 
                        image={images['./images/services/image2.png']} 
                        href="#" mode="primary" />

                    <ServicesCards 
                        title={<>Analytics and <br /> Tracking</>} 
                        image={images['./images/services/image1.png']} 
                        href="#" mode="dark" />

                </div>

                <div>
                    <div className=" lg:flex items-center justify-between gap-20 rounded-4xl bg-main-color">
                        <div className="p-12 lg:basis-2/4">
                            <h2 className="text-2xl mb-5">Let's make things happen</h2>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt placeat ad earum ipsa harum dolores odio magni rem inventore! Fugiat perferendis a voluptate corporis laboriosam! Id recusandae laborum officiis!</p>
                            <a className="inline-block py-3 px-4 bg-color-dark text-white rounded-2xl" href="#">Get your free proposal</a>
                        </div>
                        
                        <img className="hidden lg:block max-w-md scale-120" src={images['./images/services/image7.png']} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;