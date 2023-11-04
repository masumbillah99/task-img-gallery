import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SingleImage = ({ index, img, selectedImg, setSelectedImg }, props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div
        className={`${
          index === 0 ? "col-span-2 row-span-2" : ""
        } box-img border border-slate-500 overflow-hidden relative rounded-lg cursor-grab`}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <img src={img} alt="image" className="object-cover h-full w-full" />
        <div className="img-layer absolute top-0 left-0 p-5 h-full w-full bg-slate-900 bg-opacity-50 cursor-pointer">
          <input type="checkbox" className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default SingleImage;
