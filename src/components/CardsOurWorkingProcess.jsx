import { useState } from 'react';
import {ourWorkingProcess} from "../constants/index";
import { CirclePlus } from 'lucide-react';
import { CircleMinus } from 'lucide-react';


const CardsOurWorkingProcess = () => {

    const [openCards, setOpenCards] = useState([]);

    const toggleCardOurWorking = (index) => {
      
        if(openCards.includes(index)){
            setOpenCards(openCards.filter(i => i !== index));
        } else {
            setOpenCards([...openCards, index]);
        }
    }



    return (
        <div className="">
            {ourWorkingProcess.map((item, index) => (
                <div className={`
                    
                    px-6 md:px-14 mb-10 dark:text-color-dark dark:text-neutral-400
                    ${openCards.includes(index) ? 'bg-color-primary' : 'dark:bg-color-dark'} 
                    border border-b-6 border-color-dark rounded-4xl`}>
                    <div className="py-8 md:py-15 flex gap-5 items-center">
                        <span className="text-4xl lg:text-5xl inline-block">0{index + 1}</span>
                        <h2 className="text-2xl lg:text-3xl">{item.title}</h2>
                        <button type="button" onClick={()=>toggleCardOurWorking(index)}
                         className="ms-auto cursor-pointer active:scale-110 active:rotate-10">
                            {openCards.includes(index) ? <CircleMinus size={50} /> : <CirclePlus size={50} className="" />}
                        </button>
                    </div>
                    <div className={`
                        transition-all delay-50 duration-300 ease-in-out
                        ${openCards.includes(index) ? "max-h-[500px] py-10 border-t" : 'max-h-0'} 
                        overflow-hidden `}>
                        <p>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsOurWorkingProcess;