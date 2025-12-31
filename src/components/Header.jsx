import ScrollAnmation from "./ScrollAnmation";

const Header = ({title, desc}) =>{
    return (
        <ScrollAnmation type="fade" direction="top" delay={100}>
            <div className="flex flex-col lg:flex-row items-center mb-20">
                <div className="mb-5">
                    <h2 className="inline text-4xl p-1 bg-color-primary box-decoration-clone">{title}</h2>
                </div>
                <p className="ps-12 text-lg lg:max-w-2/3">{desc}</p>
            </div>
        </ScrollAnmation>
    );
}

export default Header;