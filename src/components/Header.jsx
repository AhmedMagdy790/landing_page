import ScrollAnmation from "./ScrollAnmation";

const Header = ({title, desc}) =>{
    return (
        <ScrollAnmation type="fade" direction="top" delay={100}>
            <div className="flex flex-col md:flex-row items-center mb-20">
                <h2 className="text-4xl p-1 mb-5 bg-color-primary">{title}</h2>
                <p className="ps-12 text-lg max-w-4xl">{desc}</p>
            </div>
        </ScrollAnmation>
    );
}

export default Header;