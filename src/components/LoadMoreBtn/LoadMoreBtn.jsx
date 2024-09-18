import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoading, setPage }) {
  return (
    <button
      type="button"
      className={css.btn}
      onClick={() => setPage((prevPage) => prevPage + 1)}
      disabled={onLoading}
    >
      Load more
    </button>
  );
}
