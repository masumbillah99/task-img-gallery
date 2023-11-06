import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

import img1 from "../../assets/images/image-1.webp";
import img2 from "../../assets/images/image-2.webp";
import img3 from "../../assets/images/image-3.webp";
import img4 from "../../assets/images/image-4.webp";
import img5 from "../../assets/images/image-5.webp";
import img6 from "../../assets/images/image-6.webp";
import img7 from "../../assets/images/image-7.webp";
import img8 from "../../assets/images/image-8.webp";
import img9 from "../../assets/images/image-9.webp";
import img10 from "../../assets/images/image-10.jpeg";
import img11 from "../../assets/images/image-11.jpeg";
import { BsFillImageFill } from "react-icons/bs";

import Photo from "../Photo/Photo";

const PhotoGallery = () => {
  const [imgArrays, setImgArrays] = useState([
    img11,
    img2,
    img1,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ]);
  const [selectedImg, setSelectedImg] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setImgArrays((prevImg) => {
        const oldIndex = prevImg.indexOf(active.id);
        const newIndex = prevImg.indexOf(over.id);

        return arrayMove(prevImg, oldIndex, newIndex);
      });
    }
  };

  const handleDeleteImg = () => {
    const deletedImg = imgArrays.filter((item) => !selectedImg.includes(item));
    setImgArrays(deletedImg);
    setSelectedImg([]);
  };

  return (
    <section className="max-w-screen-xl mx-auto my-10 p-10 bg-gray-200 rounded-lg">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={imgArrays} strategy={rectSortingStrategy}>
          {/* heading part */}
          <div className="">
            {selectedImg.length > 0 ? (
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">
                    <input
                      type="checkbox"
                      className="h-4 w-4 me-2"
                      checked={true}
                    />
                    {selectedImg.length}{" "}
                    {selectedImg.length > 0 && selectedImg.length < 2
                      ? "File"
                      : "Files"}{" "}
                    Selected
                  </h2>
                </div>
                <div>
                  <button
                    onClick={handleDeleteImg}
                    disabled={selectedImg.length === 0}
                    className="delete-btn"
                  >
                    Delete{" "}
                    {selectedImg.length > 0 && selectedImg.length < 2
                      ? "file"
                      : "files"}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold">Gallery</h2>
              </>
            )}
            <hr className="border border-slate-300 mt-5 mb-10" />
          </div>

          {/* grid image part */}
          {imgArrays && imgArrays.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {imgArrays.map((imgUrl, index) => (
                <Photo
                  key={index}
                  index={index}
                  imgUrl={imgUrl}
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                />
              ))}
              <div className="flex flex-col items-center gap-3 text-center py-20 border-dashed border-2 border-slate-500 rounded-lg cursor-pointer">
                <BsFillImageFill />
                <span className="font-semibold">Add Images</span>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-5xl text-red-500 font-bold uppercase my-40 text-center">
                Reload / Refresh the Browser
              </h2>
            </div>
          )}
        </SortableContext>
      </DndContext>
    </section>
  );
};

export default PhotoGallery;
