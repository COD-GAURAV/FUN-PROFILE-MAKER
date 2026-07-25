import { GoHomeFill } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import {  FaPlus } from "react-icons/fa6";
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react";
gsap.registerPlugin(useGSAP)
const NavBar = ({ setPage, Page }) => {

  const NavAnimation = useRef()


  useGSAP(()=>{
    gsap.from(NavAnimation.current,{
      y:-100,
      duration:1,
      opacity:0,
      delay:0.2
    })
  },{scope : NavAnimation})

  return (
    <div className="love  h-[8vh] z-10 rounded-lg bg-white/50 backdrop:blue-2xl border-black/10  flex justify-center items-center p-5 gap-3 " ref={NavAnimation}>
      <div>
        <img className="w-10 h-10 object-cover" src="https://cdn.vectorstock.com/i/1000v/09/91/ncx-letter-logo-design-on-black-background-vector-41260991.jpg" alt="" />
      </div>
       <div className="  rounded-lg h-[6vh] flex justify-center  gap-1.5 items-center py-2 px-5">
      <button
        className={
          Page === "HOME"
            ? "border font-extralight p-3  text-lg rounded-lg border-amber-400 text-amber-400"
            : "  rounded-lg p-3 active:scale-95 hover:transition delay-75 duration-75 ease-in-out hover:border hover:border-black  text-lg font-extralight active:border-amber-400 active:text-amber-400  text-black"
        }
        onClick={() => setPage("HOME")}
      >
        <GoHomeFill/> 
      </button>
      <button
        className={
          Page === "Card"
            ? "border font-extralight p-3  text-lg rounded-lg border-amber-400 text-amber-400"
            : " rounded-lg p-3 active:scale-95 hover:transition delay-75 duration-75 ease-in-out hover:border hover:border-black  text-lg font-extralight active:border-amber-400 active:text-amber-400  text-black"
        }
        onClick={() => setPage("Card")}
      >
        <GoPersonFill />
      </button>
      <button
        className={
          Page === "CREATE"
            ? "border font-extralight p-3  text-lg rounded-lg border-amber-400 text-amber-400"
            : " rounded-lg p-3 active:scale-95 hover:transition delay-75 duration-75 ease-in-out hover:border hover:border-black  text-lg font-extralight active:border-amber-400 active:text-amber-400  text-black"
        }
        onClick={() => setPage("CREATE")}
      >
        <FaPlus/>
      </button>
    </div>
    </div>
 
  );
};

export default NavBar;
