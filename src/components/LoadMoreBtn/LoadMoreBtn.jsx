import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoading, handleLoadMoreClick }) {
  return (
    <button
      type="button"
      className={css.btn}
      onClick={handleLoadMoreClick}
      disabled={onLoading}
    >
      Load more
    </button>
  );
}
