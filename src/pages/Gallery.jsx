import img1 from "../assets/images/image-1.webp";
import img2 from "../assets/images/image-2.webp";
import img3 from "../assets/images/image-3.webp";
import img4 from "../assets/images/image-4.webp";
import img5 from "../assets/images/image-5.webp";
import img6 from "../assets/images/image-6.webp";
import img7 from "../assets/images/image-7.webp";
import img8 from "../assets/images/image-8.webp";
import img9 from "../assets/images/image-9.webp";
import img10 from "../assets/images/image-10.jpeg";
import img11 from "../assets/images/image-11.jpeg";
import { BsFillImageFill } from "react-icons/bs";

const Gallery = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-10 bg-white rounded-md">
      <h2 className="text-2xl font-bold px-10 py-5">Gallery</h2>
      <hr className="border my-5" />

      {/* gallery section starts */}
      {/* <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-10">
        <div className="row-span-2 ">
          <img className="img-style" src={img11} alt="gallery-img" />
        </div>
        <div className="">
          <img src={img3} className="img-style" alt="gallery-img" />
        </div>
        <div className="">
          <img className="img-style" src={img2} alt="gallery-img" />
        </div>
        <div className="">
          <img className="img-style" src={img7} alt="gallery-img" />
        </div>
        <div className="">
          <img className="img-style" src={img5} alt="gallery-img" />
        </div>
        <div className="relative">
          <div className="form-control absolute left-4 top-4">
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary cursor-pointer"
              />
            </label>
          </div>
          <img className="img-style" src={img9} alt="gallery-img" />
        </div>
        <div className="">
          <img className="img-style" src={img10} alt="gallery-img" />
        </div>
      </div> */}

      {/* <div className="grid grid-cols-5 px-10 pb-10 gap-3">
        <div className="">
          <img className="img-style" src={img4} alt="gallery-img" />
        </div>
        <div className="">
          <img className="img-style" src={img8} alt="gallery-img" />
        </div>
        <div className="">
          <img className="img-style" src={img1} alt="gallery-img" />
        </div>
        <div className="">
          <img className="img-style" src={img6} alt="gallery-img" />
        </div>
        <div className="border border-dashed">Add Images</div>
      </div> */}

      <div className="grid grid-rows-3 grid-flow-row grid-cols-5 gap-3 p-10">
        <img
          src={img11}
          alt="gallery img"
          className="gallery-img col-span-2 row-span-2 hover-background"
        />
        <img
          src={img3}
          alt="gallery img"
          className="gallery-img hover-background"
        />
        <img src={img4} alt="gallery img" className="gallery-img" />
        <img src={img7} alt="gallery img" className="gallery-img" />
        <img src={img5} alt="gallery img" className="gallery-img" />
        <img src={img9} alt="gallery img" className="gallery-img" />
        <img src={img10} alt="gallery img" className="gallery-img" />
        <img src={img4} alt="gallery img" className="gallery-img" />
        <img src={img8} alt="gallery img" className="gallery-img" />
        <img src={img1} alt="gallery img" className="gallery-img" />
        <img src={img6} alt="gallery img" className="gallery-img" />
        
        <div className="border-2 border-dashed py-10 text-center flex flex-col items-center gap-3">
          <BsFillImageFill /> <span className="font-semibold">Add Images</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
