
const Header = ({title, desc}) =>{
    return (
        <div className="flex items-start mb-12">
            <h2 className="text-4xl p-1 bg-color-primary">{title}</h2>
            <p className="ps-12 text-lg max-w-4xl">{desc}</p>
        </div>
    );
}

export default Header;