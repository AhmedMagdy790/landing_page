import {teamData} from "../constants/index";
import Header from "./Header";
import TeamCards from "./TeamCards";
import ScrollAnmation from "./ScrollAnmation";


const Team = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto mb-5 px-4">
                <Header title="Team" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi maiores sit odit perferendis iusto nisi quasi unde ducimus, officiis possimus repellat suscipit enim vel, nemo nulla corporis esse similique." />
                <div className="flex flex-wrap gap-y-5 gap-x-8 mb-30 ">

                {teamData.map((item) => (
                    <ScrollAnmation style="flex basis-full lg:basis-[calc(50%-20px)] xl:basis-[calc(33%-20px)]"  type="fade" direction="right" delay={100}>
                            <TeamCards 
                                name={item.name}
                                subTitle={item.subTitle}
                                image={item.image} 
                                description={item.description}
                                href="#"  />
                    </ScrollAnmation>

                ))}

                </div>
            </div>
        </section>
    );
}

export default Team;