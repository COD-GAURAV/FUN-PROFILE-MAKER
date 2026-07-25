import { useGSAP } from "@gsap/react";
import gsap from "gsap";


gsap.registerPlugin(useGSAP)
const HeroPart = () => {

useGSAP(()=>{
     gsap.from("#h1", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.6,
    });
})

  return (
    <div className=" flex flex-col gap-4 sm:gap-7 mt-10 text-white ">
     
        <h1 className=" text-center text-4xl font-extrabold sm:text-center sm:text-6xl sm:font-extrabold" id="h1">
          The Right Talent
        </h1>
     
      
        <h1 className="text-center text-3xl font-extrabold sm:text-center sm:text-6xl sm:font-extraboldd" id="h1">
          The Right Opportunity
        </h1>
      
     
        <h3 className="text-center text-lg p-2 sm:text-center sm:text-2xl sm:font-bold sm:tracking-widest" id="h1">
          Discover verified professionals with real skills,
          <br /> proven experience, and the passion to help your business grow.{" "}
          <br /> Find the perfect candidate for your next opportunity.
        </h3>
     
    </div>
  );
};

export default HeroPart;
