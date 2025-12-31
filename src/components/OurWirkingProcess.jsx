import Header from "./Header";
import CardsOurWorkingProcess from "./CardsOurWorkingProcess";

const OurWirkingProcess = () => {
    return (
         <section className="py-10">
            <div className="container mx-auto mb-5 px-4">

                <Header 
                    title="Our Working Process" 
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi maiores sit odit perferendis iusto nisi quasi unde ducimus, officiis possimus repellat suscipit enim." />
              
                <CardsOurWorkingProcess />

            </div>
        </section>
    );
}

export default OurWirkingProcess;