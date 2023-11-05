import { useState } from "react";
import {
  DndContext,
  closestCenter,
  // useSensors,
  // useSensor,
  // TouchSensor,
  // MouseSensor,
  // DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

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
import SingleImage from "./SingleImage";
// import { SortableItem } from "./SortableItem";

const Gallery = () => {
  const [imgArr, setImgArr] = useState([
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
  // const [activeId, setActiveId] = useState(null);

  // const sensors = useSensors(
  //   useSensor(MouseSensor),
  //   useSensor(TouchSensor, {
  //     activationConstraint: {
  //       distance: 8,
  //     },
  //   })
  // );

  // const handleDragStart = (event) => {
  //   const { active } = event;
  //   setActiveId(active.id);
  // };

  const handleDragEnd = (event) => {
    console.log(imgArr);
    const { active, over } = event;

    if (active.id !== over.id) {
      setImgArr((prevImages) => {
        const oldIndex = prevImages.findIndex((img) => img.id === active.id);
        const newIndex = prevImages.findIndex((img) => img.id === over.id);
        return arrayMove(prevImages, oldIndex, newIndex);
      });
      console.log(imgArr);
    }
    // setActiveId(null);
  };

  // const handleDragCancel = () => {
  //   setActiveId(null);
  // };

  const handleDeleteImg = () => {
    console.log("delete img");
  };

  return (
    <section className="max-w-screen-xl mx-auto my-5 md:my-10 bg-white rounded-md">
      <div>
        {selectedImg.length > 0 ? (
          <div className="flex justify-between items-center px-10 pt-10">
            <div>
              <h2 className="text-2xl font-bold">
                <input
                  type="checkbox"
                  className="h-4 w-4 me-2"
                  checked={true}
                />
                {selectedImg.length} File Selected
              </h2>
            </div>
            <div>
              <button onClick={handleDeleteImg} className="delete-btn">
                Delete file
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold px-10 pt-10">Gallery</h2>
          </>
        )}
        <hr className="border border-slate-300 my-5" />
      </div>

      <DndContext
        // sensors={sensors}
        collisionDetection={closestCenter}
        // onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        // onDragCancel={handleDragCancel}
      >
        <SortableContext items={imgArr} strategy={rectSortingStrategy}>
          {/* we need components that use the useSortable hook */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-5 md:p-10">
            {imgArr?.map((img, index) => (
              // <SortableItem
              //   key={index}
              //   index={index}
              //   img={img}
              //   selectedImg={selectedImg}
              //   setSelectedImg={setSelectedImg}
              // />
              <SingleImage
                key={index}
                img={img}
                index={index}
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
              />
            ))}
            <div className="flex flex-col items-center gap-3 text-center py-20 border-dashed border-2 border-slate-500 rounded-lg cursor-pointer">
              <BsFillImageFill />
              <span className="font-semibold">Add Images</span>
            </div>
          </div>
        </SortableContext>

        {/* <DragOverlay adjustScale style={{ transformOrigin: "0 0" }}>
          {activeId ? <SingleImage img={activeId} isDragging /> : null}
        </DragOverlay> */}
      </DndContext>
    </section>
  );
};

export default Gallery;
