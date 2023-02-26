export const ImageItem = ({ webformatURL, tags, onImgClick, id }) => {
  return (
    <li
      className="basis-1/6 hover:scale-[1.2] transition-transform"
      onClick={() => {
        onImgClick(id);
      }}
    >
      <img
        src={webformatURL}
        alt={tags}
        className="w-full h-full object-cover"
      />
    </li>
  );
};
