import { ArrowUpRight } from 'lucide-react';

const ServicesCards = ({title, image, href, mode }) => {

    const style = `
        flex justify-between
        p-14 border border-b-8 rounded-4xl border-color-dark
        basis-full lg:basis-[48%]
    `;
    switch (mode) {
        case 'light':
            return (
                <div className={`${style} bg-main-color`}>
                    <div className="flex flex-col justify-between">
                        <div>
                        <p className="inline p-1 text-2xl bg-color-primary box-decoration-clone">{title}</p>
                        </div>
                        <a className="flex items-center gap-4" href={href}><span className="inline-block p-1.5 bg-color-dark text-color-primary rounded-full"><ArrowUpRight /></span> Learn more</a>
                    </div>
                    <img className='h-full' src={image} alt="" />
                </div>
            );
        case 'primary':
            return (
                <div className={`${style}  bg-color-primary`}>
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="inline p-1 text-2xl bg-main-color box-decoration-clone">{title}</p>
                        </div>
                        <a className="flex items-center gap-4" href={href}><span className="inline-block p-1.5 bg-color-dark text-color-primary rounded-full"><ArrowUpRight /></span> Learn more</a>
                    </div>
                    <img src={image} alt="" />
                </div>

            );
        case 'dark':
            return (
                <div className={`${style}   bg-color-dark`}>
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="inline p-1 text-2xl bg-main-color box-decoration-clone">{title}</p>
                        </div>
                        <a className="text-main-color flex items-center gap-4" href={href}><span className="inline-block p-1.5 bg-main-color text-color-dark rounded-full"><ArrowUpRight /></span> Learn more</a>
                    </div>
                    <img src={image} alt="" />
                </div>

            );
    }

}

export default ServicesCards;