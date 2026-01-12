import { ArrowUpRight } from 'lucide-react';
import ScrollAnmation from "./ScrollAnmation";

const ServicesCards = ({title, image, href, mode }) => {

    const style = `
        flex justify-between
        py-8 px-6 md:py-12 md:px-10 border border-b-8 rounded-4xl border-color-dark
        w-full
    `;
    switch (mode) {
        case 'light':
            return (
                <div className={`${style} bg-main-color dark:bg-white`}>
                    <div className="flex flex-col justify-between">
                        <div className='mb-10'>
                        <p className="inline p-1 text-lg  md:text-2xl bg-color-primary box-decoration-clone">{title}</p>
                        </div>
                        <a className="dark:text-color-dark flex text-sm md:text-base items-center gap-4" href={href}><span className="inline-block p-1.5 bg-color-dark text-color-primary rounded-full"><ArrowUpRight /></span> Learn more</a>
                    </div>
                    <img className='max-sm:max-w-2/5' src={image} alt="" />

                </div>
            );
        case 'primary':
            return (
                <div className={`${style}  bg-color-primary`}>
                    <div className="flex flex-col justify-between">
                        <div className='mb-10'>
                            <p className="inline p-1 text-lg md:text-2xl bg-main-color box-decoration-clone">{title}</p>
                        </div>
                        <a className="text-color-dark flex text-sm md:text-base items-center gap-4" href={href}><span className="inline-block p-1.5 bg-color-dark text-color-primary rounded-full"><ArrowUpRight /></span> Learn more</a>
                    </div>
                    <img className='max-sm:max-w-2/5' src={image} alt="" />
                </div>

            );
        case 'dark':
            return (
                <div className={`${style}   bg-color-dark`}>
                    <div className="flex flex-col justify-between">
                        <div className='mb-10'>
                            <p className="inline p-1 text-lg md:text-2xl bg-main-color box-decoration-clone">{title}</p>
                        </div>
                        <a className="text-white text-sm md:text-base flex items-center gap-4" href={href}><span className="inline-block p-1.5 bg-main-color text-color-dark dark:text-white rounded-full"><ArrowUpRight /></span> Learn more</a>
                    </div>
                    <img className='max-sm:max-w-2/5' src={image} alt="" />
                </div>

            );
    }

}

export default ServicesCards;