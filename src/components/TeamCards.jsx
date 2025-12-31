import { ArrowUpRight } from 'lucide-react';
import ScrollAnmation from "./ScrollAnmation";
import { Linkedin } from 'lucide-react';
import maskVector from "../assets/images/team/Vector.png";

const TeamCards = ({name, subTitle, description, image, href }) => {


    return (
        <div className={`px-5 border border-b-8 rounded-4xl border-color-dark bg-main-color`}>

            <div className="py-8 flex gap-8 border-b border-color-dark">
                <div className='  filter drop-shadow-[10px_8px_0_rgba(0,0,0)]'>
                    <div className={`
                            relative 
                            w-[120px] h-[120px] 
                            mask-[url(${maskVector})]
                            mask-center mask-no-repeat mask-contain 
                            `}>
                      
                        <img 
                            className='
                                w-full h-full object-cover 
                                grayscale brightness-70 contrast-110' 
                            src={image} alt="" 
                        />

                        <div className='absolute inset-0 bg-color-primary mix-blend-overlay'></div>
                    </div>                    
                </div>

                <div className='pt-8'>
                    <h3 className='font-bold text-lg'>{name}</h3>
                    <p>{subTitle}</p>
                </div>
                
                <a className="a absolute top-5 right-8 font-extrabold text-2xl border w-[45px] h-[45px] leading-[45px] text-center rounded-full bg-color-dark text-color-primary cursor-pointer" href={href}>
                    in
                </a>
            </div>
            <div className='py-10'>
                <p>{description}</p>
            </div>
        </div>
    );

}

export default TeamCards;