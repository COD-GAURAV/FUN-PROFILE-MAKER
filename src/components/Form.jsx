import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
gsap.registerPlugin(useGSAP);

const Form = ({ setData }) => {
  const Trigger1 = useRef(null);
  const Trigger2 = useRef(null);
  const FirstName = useRef("");
  const LastName = useRef("");
  const Bio = useRef("");
  const [HashTags, setHashTags] = useState([]);
  const [Id, setId] = useState(0);
  const Field = useRef("");
  const [UploadedPhotoFile, setUploadedPhotoFile] = useState(null);
  const [UploadedThumbnailFile, setUploadedThumbnailFile] = useState(null);
  const [BioLength, setBioLength] = useState(0);
  const AnimatedFroms = useRef();

  useGSAP(
    () => {
      gsap.from(AnimatedFroms.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "bounce",
      });
    },
    { scope: AnimatedFroms },
  );

  const Trigger1Upload = (event) => {
    Trigger1.current.click();
  };
  const Trigger2Upload = (event) => {
    Trigger2.current.click();
  };

  const UploadPhotoFileValue = (ev) => {
    const File = ev.target.files[0];
    setUploadedPhotoFile(File);
  };
  const UploadThumbnailFileValue = (ev) => {
    const File = ev.target.files[0];
    console.log(URL.createObjectURL(ev.target.files[0]));
    setUploadedThumbnailFile(File);
  };

  const HashtagValue = (ev) => {
    const SplitHash = ev.target.value.split(",");
    setHashTags([...SplitHash]);
    console.log(HashTags);
  };

  const SubmitOpration = (event) => {
    event.preventDefault();

    if (FirstName.current.value === "" ) {
      alert("Enter your First Name");
    } 
    else if(LastName.current.value === ""){
      alert("Enter your Last Name");
    }
    else if(Bio.current.value === ""){
      alert("Enter your Bio Name");
    }
    else if(HashTags.length === 0){
      alert("Enter your Hashtag Name");
    }
    else if(Field.current.value === ""){
      alert("Enter your Field Name");
    }
    else if(UploadedPhotoFile === null){
      alert("Please Upload Your Photo");
    }
    else if(UploadedThumbnailFile === null){
      alert("Please Upload Your Thumbnail");
    }
    else {
      setData((prev) => [
        ...prev,
        {
          id: setId(Id + 1),
          FirstName: FirstName.current.value,
          LastName: LastName.current.value,
          bio: Bio.current.value,
          PhotoFiles: UploadedPhotoFile,
          ThumbnailFiles: UploadedThumbnailFile,
          hashtags: HashTags,
          field: Field.current.value,
        },
      ]);
      FirstName.current.value = "";
      LastName.current.value = "";
      Bio.current.value = "";
      HashTags.current.value = "";
      Field.current.value = "";
      setUploadedPhotoFile(null);
      setUploadedThumbnailFile(null);
    }
  };

  const FirstNameValue = (ev) => {
    FirstName.current.value = ev.target.value;
  };
  const FieldValue = (ev) => {
    Field.current.value = ev.target.value;
  };
  const LastNameValue = (ev) => {
    LastName.current.value = ev.target.value;
  };
  const BioValue = (ev) => {
    Bio.current.value = ev.target.value;
    setBioLength(Bio.current.value.length);
    if (BioLength >= 150) {
    }
  };

  return (
    <div
      className="  sm:h-screen w-[99vw] absolute top-0  text-white flex justify-center items-center"
      ref={AnimatedFroms}
    >
      <div className=" bg-black/10 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50 p-10 sm:w-[50%] flex justify-center flex-col items-center rounded-2xl ">
        <div>
          <h1 className="text-xl font-bold sm:text-4xl sm:font-bold mb-10">
            Create Your Professional Card
          </h1>
        </div>
        <form
          action=""
          className=" flex flex-col gap-5 "
          onSubmit={SubmitOpration}
        >
          <div className="flex gap-3">
            <div className=" flex flex-col gap-2">
              <h3>First Name</h3>
              <input
                className=" w-[40vw] sm:w-[20vw] p-3 border"
                type="text"
                placeholder="First Name"
                ref={FirstName}
                onChange={FirstNameValue}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h3>Last Name</h3>
              <input
                className="  w-[40vw] sm:w-[20vw] p-3 border"
                type="text"
                placeholder="Last Name"
                ref={LastName}
                onChange={LastNameValue}
              />
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <h3>BIO</h3>
            <textarea
              className=" resize-none px-3 py-2 h-[15vh] border w-full"
              name=""
              id=""
              ref={Bio}
              placeholder="Enter your BIO"
              onChange={BioValue}
            ></textarea>
            <div>
              <h3 className="italic text-end">
                {BioLength}/{150}
              </h3>
            </div>
          </div>
          <div className="flex gap-2">
            <div className=" flex flex-col gap-2">
              <h3>{`HASHTAGS (OPT)`}</h3>
              <input
                type="text"
                className="w-[40vw] sm:w-[20vw] p-3 border"
                placeholder="Enter Hashtags"
                onChange={HashtagValue}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h3>FLEID</h3>
              <input
                type="text"
                className="w-[40vw] sm:w-[20vw] p-3 border"
                placeholder="Enter Hashtags"
                ref={Field}
                onChange={FieldValue}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <input
                type="file"
                name=""
                id=""
                className=" hidden"
                ref={Trigger1}
                onChange={UploadPhotoFileValue}
              />
              <div
                className=" bg-black  sm:w-[20vw] text-white px-3 py-2 rounded-lg flex justify-center items-center gap-2 "
                onClick={Trigger1Upload}
              >
                {UploadedPhotoFile ? UploadedPhotoFile.name : "UPLOAD PHOTO"}{" "}
                <span className=" text-lg">
                  <IoCloudUploadOutline />
                </span>
              </div>
            </div>
            <div>
              <input
                type="file"
                name=""
                id=""
                className=" hidden"
                ref={Trigger2}
                onChange={UploadThumbnailFileValue}
              />
              <div
                className=" bg-black  sm:w-[20vw] text-white px-3 py-2 rounded-lg flex justify-center items-center gap-2 "
                onClick={Trigger2Upload}
              >
                {UploadedThumbnailFile
                  ? UploadedThumbnailFile.name
                  : "UPLOAD THUMBNAIL"}{" "}
                <span className=" text-lg">
                  <IoCloudUploadOutline />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className=" bg-black  w-[20vw] text-white px-3 py-2"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
