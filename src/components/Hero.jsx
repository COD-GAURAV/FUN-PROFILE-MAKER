import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { IoMdContact } from "react-icons/io";

gsap.registerPlugin(useGSAP);

const Hero = ({ setPage }) => {
  const [Data, setData] = useState([
    {
      id: 101,
      FirstName: "RITIKA",
      LastName: "PARSWAL",
      bio: "Uma seleção especial de prompts da comunidade do Midjourney. #chatgpt4 #ia #dsgn #conteudo #ui #ux #figma #figmadesigner #figmadesign #midjourneyaiart #midjourneycommunity",
      PhotoFiles:
        "https://i.pinimg.com/vwebp/1200x/0d/16/8e/0d168e2fd560157618bd701d346a4d9b.webp",
      ThumbnailFiles:
        "https://i.pinimg.com/vwebp/736x/91/97/ef/9197ef339224ad11b8b670a0762d745a.webp",
      hashtags: ["Java", "Photoshop", "Html", "hinid", "english", "maths"],
      field: "Frontent Devloper",
    },
    {
      id: 102,
      FirstName: "Hemant",
      LastName: "Yadav",
      bio: "Uma seleção especial de prompts da comunidade do Midjourney. #chatgpt4 #ia #dsgn #conteudo #ui #ux #figma #figmadesigner #figmadesign #midjourneyaiart #midjourneycommunity",
      PhotoFiles:
        "https://i.pinimg.com/736x/5e/ef/88/5eef88e453bae0dd62ee4627d94b5559.jpg",
      ThumbnailFiles:
        "https://i.pinimg.com/736x/65/ee/ff/65eeff4c209bf9c7badcd8a688136363.jpg",
      hashtags: ["Java", "Photoshop", "Html"],
      field: "Software Engineer",
    },
    {
      id: 103,
      FirstName: "Rohit",
      LastName: "Nigam",
      bio: "Uma seleção especial de prompts da comunidade do Midjourney. #chatgpt4 #ia #dsgn #conteudo #ui #ux #figma #figmadesigner #figmadesign #midjourneyaiart #midjourneycommunity",
      PhotoFiles:
        "https://i.pinimg.com/736x/e2/52/40/e2524035b14eef4e013041a7e4710328.jpg",
      ThumbnailFiles:
        "https://i.pinimg.com/vwebp/1200x/6c/ff/ce/6cffcef48d2b7bffbd1deca2841e5896.webp",
      hashtags: ["Java", "Photoshop", "Html"],
      field: "UX/UI Designer",
    },
    {
      id: 104,
      FirstName: "Mohit",
      LastName: "Chauhan",
      bio: "Uma seleção especial de prompts da comunidade do Midjourney. #chatgpt4 #ia #dsgn #conteudo #ui #ux #figma #figmadesigner #figmadesign #midjourneyaiart #midjourneycommunity",
      PhotoFiles:
        "https://i.pinimg.com/vwebp/1200x/6c/ff/ce/6cffcef48d2b7bffbd1deca2841e5896.webp",
      ThumbnailFiles:
        "https://i.pinimg.com/736x/9f/9b/13/9f9b13db6e1a7add576ad0ea85dbecc3.jpg",
      hashtags: ["Java", "Photoshop", "Html"],
      field: "UX/UI Designer",
    },
    {
      id: 105,
      FirstName: "LavLesh",
      LastName: "Panchal",
      bio: "Uma seleção especial de prompts da comunidade do Midjourney. #chatgpt4 #ia #dsgn #conteudo #ui #ux #figma #figmadesigner #figmadesign #midjourneyaiart #midjourneycommunity",
      PhotoFiles:
        "https://i.pinimg.com/vwebp/1200x/4b/29/e2/4b29e2ce2ffb7bac3ad62b24660a3935.webp",
      ThumbnailFiles:
        "https://i.pinimg.com/vwebp/1200x/07/7f/b0/077fb067e19104f24384549bca63aace.webp",
      hashtags: ["Java", "Photoshop", "Html"],
      field: "UX/UI Designer",
    },
    {
      id: 106,
      FirstName: "Rohini",
      LastName: "Rout",
      bio: "Uma seleção especial de prompts da comunidade do Midjourney. #chatgpt4 #ia #dsgn #conteudo #ui #ux #figma #figmadesigner #figmadesign #midjourneyaiart #midjourneycommunity",
      PhotoFiles:
        "https://i.pinimg.com/vwebp/1200x/e5/7f/73/e57f73e11fe24884ae8f68ca066d09f4.webp",
      ThumbnailFiles:
        "https://i.pinimg.com/736x/bc/db/9e/bcdb9e9b3caeab962d62779de671771c.jpg",
      hashtags: ["Java", "Photoshop", "Html"],
      field: "UX/UI Designer",
    },
    {
      id: 107,
      FirstName: "Hritik",
      LastName: "Pancholi",
      bio: "Uma seleção especial de prompts da comunidade do Midjourney. #chatgpt4 #ia #dsgn #conteudo #ui #ux #figma #figmadesigner #figmadesign #midjourneyaiart #midjourneycommunity",
      PhotoFiles:
        "https://i.pinimg.com/vwebp/1200x/fd/c5/6b/fdc56bc09192c4e4e905075f720cf0e3.webp",
      ThumbnailFiles:
        "https://i.pinimg.com/736x/4c/d4/0b/4cd40bd9415a1c92be6707e8261d6a96.jpg",
      hashtags: ["Java", "Photoshop", "Html"],
      field: "UX/UI Designer",
    },
  ]);
  const [index, setindex] = useState(0)

  useEffect(()=>{
    let interval = setInterval(() => {
        setindex((prev)=>{ 
          if(prev >= Data.length - 1){
            return 0
          }
          return prev + 1
        })
    }, 6000);
    
    return () => clearInterval(interval)
  },[Data.length])


 console.log(index)
  

  useGSAP(() => {
    gsap.from("#HeroSectionText", {
      y: -100,
      duration: 1,
      opacity: 0,
      delay: 0.2,
      stagger: 0.2,
    });

    gsap.from("#cardPro",{
      x:100,
      duration: 1,
      opacity: 0,
      delay: 0.40,
      stagger: 0.40,
      ease: "circ",
      repeat:-1,
      yoyo:true
    })
  });

  return (
    <div className="w-full h-screen flex flex-col text-white sm:flex-row">
      <div
        className=" h-[30%] w-full flex flex-col text-sm justify-center items-center  py-3 px-10 pb-5  gap-5 sm:w-[50%] sm:h-[90%]  sm:flex sm:flex-col sm:justify-center sm:items-start sm:py-5 sm:px-15 sm:pb-30"
        id="HeroSectionText"
      >
        <h1 className=" text-[10vw] font-extrabold  sm:text-8xl sm:font-extrabold" id="HeroSectionText">
          Profile Maker
        </h1>
        <h3 className=" text-[7.5vw] sm:text-4xl sm:font-bold" id="HeroSectionText">
          LET's MAKE SOME FUN
        </h3>
        <button
          className="py-3 px-6 rounded-lg bg-blue-400 sm:py-2 sm:px-4 sm:bg-blue-400 sm:text-white sm:rounded-lg"
          id="HeroSectionText"
          onClick={() => setPage("CREATE")}
        >
          GET STARTED
        </button>
        <p className=" hidden text-[3vw] sm:text-xl sm:block " id="HeroSectionText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          necessitatibus dolor itaque est sunt omnis adipisci obcaecati, vero
          hic consequatur illum, sit velit cumque similique distinctio! Corrupti
          non eveniet ipsum!
        </p>
      </div>
      <div className=" h-[90%] w-full flex justify-center pt-5 items-start sm:h-[90%] sm:w-[50%] sm:flex sm:justify-center sm:items-center">
        <div
          className=" bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl  shadow-black/50  w-[80%] rounded-2xl sm:bg-black/60 sm:backdrop-blur-2xl sm:border-white/10 sm:shadow-2xl sm:shadow-black/50 sm:w-85 sm:rounded-2xl "
          id="cardPro"
        >
          <div className=" flex justify-center items-center" id="cardPro">
            <img
              className=" rounded-2xl h-40 w-[95%] object-cover mt-2"
              src={Data[index].ThumbnailFiles}
              alt=""
            />
          </div>
          <div className=" absolute top-33 ml-5 rounded-full border-4 border-white" id="cardPro">
            <img
              className=" object-cover h-20 w-20 rounded-full"
              src={Data[index].PhotoFiles}
              alt=""
            />
          </div>

          <div className="mt-12 py-3 px-4 flex justify-between flex-col" id="cardPro">
            <div className=" flex justify-between">
              <h1 className="text-[4vw] font-extrabold sm:text-lg text-yellow-300">
                {Data[index].FirstName} {Data[index].LastName}
              </h1>
              <h3 className=" bg-gray-300 text-blue-600 px-2 py-0.5 rounded-full flex justify-center items-center text-sm">
                {Data[index].field}
              </h3>
            </div>
            <div className=" leading-5">
              <p className="text-sm sm:text-white">{Data[index].bio}</p>
            </div>
            <div id="cardPro">
              <span className="w-full flex flex-wrap  gap-1 mt-2 text-sm">
                {Data[index].hashtags.map((val) => {
                  return (
                    <p className="bg-black text-white px-4 py-1 rounded-full ">
                      {val}
                    </p>
                  );
                })}
              </span>
              <div className="mt-3 flex justify-between items-center " id="cardPro">
                <h3 className="text-yellow-300"></h3>
                <button className="bg-white text-black rounded-xl py-1 px-5  flex justify-center items-center gap-1">
                  Contact{" "}
                  <span className="text-xl mt-0.5">
                    <IoMdContact />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
