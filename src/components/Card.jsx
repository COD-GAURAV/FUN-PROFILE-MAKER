import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { IoMdContact } from "react-icons/io";
gsap.registerPlugin(useGSAP)

const Card = ({ data }) => {

    const date = new Date()
    const AnimatedCard = useRef()

    useGSAP(()=>{
      gsap.from(AnimatedCard.current,{
        y:-50,
        duration:1,
        delay:0.2,
        opacity:0,
        stagger:0.1 
      })
    },{scope:AnimatedCard})

  return (
    <div className=" bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50  w-85  rounded-2xl " id="#Card" ref={AnimatedCard}>
      <div className=" flex justify-center items-center">
        <img
          className=" rounded-2xl h-40 w-[95%] object-cover mt-2"
          src={data.ThumbnailFiles instanceof File ? URL.createObjectURL(data.ThumbnailFiles) : data.ThumbnailFiles}
          alt=""
        />
      </div>
      <div className=" absolute top-33 ml-5 rounded-full border-4 border-white">
        <img
          className=" object-cover h-20 w-20 rounded-full"
          src={data.PhotoFiles instanceof File? URL.createObjectURL(data.PhotoFiles) : data.PhotoFiles}
          alt=""
        />
      </div>

      <div className="mt-12 py-3 px-4 flex justify-between flex-col">
        <div className=" flex justify-between">
          <h1 className="font-extrabold text-lg text-yellow-300">{ data.FirstName} {data.LastName}</h1>
          <h3 className=" bg-gray-300 text-blue-600 px-2 py-0.5 rounded-full flex justify-center items-center text-sm">{data.field}</h3>
        </div>
        <div className=" leading-5">
          <p className="text-white">
            {data.bio}
          </p>
        </div>
        <div>
          <span className="w-full flex flex-wrap  gap-1 mt-2 text-sm">
            {data.hashtags.map((val)=> <p  key={val} className="bg-black text-white px-4 py-1 rounded-full ">{val}</p>)}
        
          </span>
          <div className="mt-3 flex justify-between items-center">
            <h3 className="text-yellow-300">{date.toLocaleDateString()}</h3>
          <button className="bg-white text-black rounded-xl py-1 px-5  flex justify-center items-center gap-1">Contact <span className="text-xl mt-0.5"><IoMdContact /></span></button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
