import { useState } from "react";
import Card from "./components/Card";
import video from "./assets/background.mp4";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroPart from "./components/HeroPart";
import Hero from "./components/Hero";
gsap.registerPlugin(useGSAP);

const App = () => {
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
  const [Page, setPage] = useState("HOME");

  let content;

  if (Page === "HOME") {
    content = <Hero setPage={setPage}/>;
  } else if (Page === "Card") {
    content = Data.map((val) => (
      <div key={val.id} className="card">
        <Card key={val.id} data={val} />
      </div>
    ));
  } else {
    content = <Form setData={setData} />;
  }

  console.log(Data);
  console.log(Page);

  useGSAP(() => {
    gsap.from(".card", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.2,
    });
  });

  return (
    <div className={Page === "HOME"|| Page==="CREATE" ? "w-full overflow-y-hidden h-screen":"w-full h-screen"}>
      <div>
          <video className="w-full h-screen object-cover fixed top-0" autoPlay loop muted playsInline   src={video}></video>
      </div>
      <div className="flex w-full z-30 justify-center fixed bottom-5 items-center">
        <NavBar setPage={setPage} Page={Page} />

      </div>
          <div className="mb-15">{Page === "Card" && <HeroPart />}</div>
          <div className="flex flex-wrap gap-15 justify-center">{content}</div>
    </div>
  );
};

export default App;
