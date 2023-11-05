import { useState } from "react";
// import {
//   DndContext,
//   closestCenter,
//   MouseSensor,
//   TouchSensor,
//   DragOverlay,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   rectSortingStrategy,
// } from "@dnd-kit/sortable";

import img1 from "./assets/images/image-1.webp";
import img2 from "./assets/images/image-2.webp";
import img3 from "./assets/images/image-3.webp";
import img4 from "./assets/images/image-4.webp";
import img5 from "./assets/images/image-5.webp";
import img6 from "./assets/images/image-6.webp";
import img7 from "./assets/images/image-7.webp";
import img8 from "./assets/images/image-8.webp";
import img9 from "./assets/images/image-9.webp";
import img10 from "./assets/images/image-10.jpeg";
import img11 from "./assets/images/image-11.jpeg";
import { BsFillImageFill } from "react-icons/bs";
import SingleImage from "./pages/SingleImage";

const App = () => {
  const [imgArr, setImgArr] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ]);
  const [selectedImg, setSelectedImg] = useState([]);

  const handleDeleteImg = () => {
    const deletedImgArr = imgArr.filter((item) => !selectedImg.includes(item));
    setImgArr(deletedImgArr);
    setSelectedImg([]);
  };

  // console.log(selectedImg);

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-200 rounded-xl">
      <div className="p-4 md:p-8 mx-4 md:mx-0 my-8">
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
                  {selectedImg.length}{" "}
                  {selectedImg.length > 0 && selectedImg.length < 2
                    ? "File"
                    : "Files"}{" "}
                  Selected
                </h2>
              </div>
              <div>
                <button onClick={handleDeleteImg} className="delete-btn">
                  Delete{" "}
                  {selectedImg.length > 0 && selectedImg.length < 2
                    ? "file"
                    : "files"}
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

        {/* <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext items={imgArr} strategy={rectSortingStrategy}> */}
        {imgArr?.length !== 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            {imgArr.map((img, index) => (
              <SingleImage
                key={index}
                img={img}
                index={index}
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
              />
            ))}
            <div className="h-[200px] md:h-[260px] lg:h-[230px] flex flex-col gap-2 rounded-[10px] cursor-pointer border-2 border-dashed border-slate-300 justify-center items-center bg-slate-100">
              <BsFillImageFill />
              <h4>Add Images</h4>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <h2 className="text-5xl font-bold uppercase my-40 text-center">
              Reload / Refresh the Browser
            </h2>
          </div>
        )}
        {/* </SortableContext>
          <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
            {activeId ? <SingleImage id={activeId} isDragging /> : null}
          </DragOverlay>
        </DndContext> */}
      </div>
    </div>
  );
};

export default App;
