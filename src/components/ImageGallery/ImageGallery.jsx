import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onOpen }) {
  return (
    <ul className={css.ul}>
      {photos.map((photo) => (
        <li key={photo.id} className={css.li}>
          <ImageCard photo={photo} modal={false} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
}
