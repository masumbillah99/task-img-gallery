const SingleImage = ({ img, index, selectedImg, setSelectedImg }) => {
  const handleImageClick = () => {
    setSelectedImg((items) => {
      if (items.includes(img)) {
        return items.filter((item) => item !== img);
      } else {
        return [...items, img];
      }
    });
  };

  return (
    <div
      className={`${
        index === 0 ? "col-span-2 row-span-2" : ""
      } box-img border border-slate-500 overflow-hidden relative rounded-lg cursor-grab`}
    >
      <img src={img} alt="image" className="object-cover h-full w-full" />
      <div className="img-layer absolute top-0 left-0 p-5 h-full w-full bg-slate-900 bg-opacity-50 cursor-pointer">
        <input
          type="checkbox"
          className="h-5 w-5 cursor-pointer"
          checked={selectedImg.includes(img)}
          onChange={handleImageClick}
        />
      </div>
    </div>
  );
};

export default SingleImage;
