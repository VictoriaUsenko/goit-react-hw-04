import css from "./ImageCard.module.css";

export default function ImageCard({ photo, modal, onOpen }) {
  const clickHandler = () => {
    if (!modal) {
      onOpen(photo);
    }
  };

  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={modal ? photo.fullImg : photo.thumbImg}
        alt={photo.alt}
        onClick={clickHandler}
      />
    </div>
  );
}
