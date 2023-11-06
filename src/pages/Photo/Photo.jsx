import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Photo.css";

const Photo = ({ index, imgUrl, selectedImg, setSelectedImg }) => {
  const { setNodeRef, listeners, transform, transition } = useSortable({
    id: imgUrl,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleImageSelect = () => {
    setSelectedImg((imgItems) => {
      if (imgItems.includes(imgUrl)) {
        return imgItems.filter((item) => item !== imgUrl);
      } else {
        return [...imgItems, imgUrl];
      }
    });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      className={`${
        index === 0 ? "col-span-2 row-span-2" : ""
      } img-box-layer relative bg-white border border-slate-500 rounded-lg overflow-hidden cursor-pointer`}
    >
      <img src={imgUrl} alt="image" className="object-cover h-full w-full" />
      <div className="check-layer absolute top-0 left-0 p-5 h-full w-full hover:bg-slate-900 hover:bg-opacity-60">
        <input
          type="checkbox"
          className="h-5 w-5 cursor-pointer"
          checked={selectedImg.includes(imgUrl)}
          onInputCapture={handleImageSelect}
        />
      </div>
    </div>
  );
};

export default Photo;
