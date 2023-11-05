import { useState, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
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
import SortableItem from "./pages/SortableItem";
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
  const [deletedImg, setDeletedImg] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [selectedImg, setSelectedImg] = useState([]);

  const handleDeleteImg = () => {
    const filteredArray1 = imgArr.filter((item) => !deletedImg.includes(item));
    setDeletedImg([]);
    setImgArr(filteredArray1);
  };

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setImgArr((prevImg) => {
        const oldIndex = prevImg.indexOf(active?.id);
        const newIndex = prevImg.indexOf(over?.id);
        return arrayMove(prevImg, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

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
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext items={imgArr} strategy={rectSortingStrategy}>
            {imgArr?.length !== 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
                {imgArr.map((img, index) => (
                  <SortableItem
                    key={index}
                    id={img}
                    index={index}
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                    deletedImg={deletedImg}
                    setDeletedImg={setDeletedImg}
                  />
                ))}
                <div className="flex flex-col gap-2 rounded-[10px] cursor-pointer border-2 border-dashed border-slate-300 justify-center items-center bg-slate-100">
                  <BsFillImageFill />
                  <h4>Add Images</h4>
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <h2 className="text-5xl font-bold uppercase my-40 text-center">
                  Reload the page
                </h2>
              </div>
            )}
          </SortableContext>
          <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
            {activeId ? <SingleImage id={activeId} isDragging /> : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default App;


// --------------------------------

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SingleImage from "./SingleImage";

const SortableItem = (props) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return (
    <SingleImage
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortableItem;


// ------------------------------------

/* eslint-disable react/display-name */
import { forwardRef, useEffect, useState } from "react";
import { Checkbox } from "@chakra-ui/react";

const SingleImage = forwardRef(
  (
    {
      id,
      index,
      deletedImg,
      setDeletedImg,
      withOpacity,
      isDragging,
      style,
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(deletedImg?.includes(id));

    useEffect(() => {
      setSelected(deletedImg?.includes(id));
    }, [deletedImg, id]);

    const handleDeletedImages = () => {
      const updatedDeletedImg = [...deletedImg];
      const isCurrentlySelected = updatedDeletedImg?.includes(id);

      if (isCurrentlySelected) {
        updatedDeletedImg?.splice(updatedDeletedImg?.indexOf(id), 1);
      } else {
        updatedDeletedImg?.push(id);
      }

      setDeletedImg(updatedDeletedImg);
      setSelected(!isCurrentlySelected);
    };

    const inlineStyles = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "0% 0%",
      height: `${index === 0 ? "300px" : "140px"}`,
      width: `${index === 0 ? "300px" : "140px"}`,
      borderRadius: "12px",
      gridColumn: `${index === 0 ? "1 / span 2" : ""}`,
      gridRow: `${index === 0 ? "1 / span 2" : ""}`,
      cursor: isDragging ? "grabbing" : "grab",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      touchAction: "none",
      alignItems: "center",
      boxShadow: isDragging
        ? "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px"
        : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      ...style,
    };

    return (
      <>
        <div
          ref={ref}
          style={inlineStyles}
          {...props}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative hidden md:flex ${
            selected ? "border-2 border-sky-600" : ""
          }`}
        >
          <img className="rounded-[10px]" src={id} alt="" />
          <Checkbox
            isChecked={selected}
            name={id}
            id={id}
            className={`absolute top-2 left-2 ${
              selected ? "selectedImg" : ""
            } ${hovered ? "" : "md:hidden"}`}
            onChange={handleDeletedImages}
          ></Checkbox>
          {hovered && (
            <div
              className={`absolute ${
                index === 0 ? "hidden" : ""
              } rounded-[10px] inset-0 bg-black bg-opacity-50 pointer-events-none z-10`}
            ></div>
          )}
        </div>
      </>
    );
  }
);

export default SingleImage;
