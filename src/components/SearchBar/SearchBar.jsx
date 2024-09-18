import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  function submitHandler(e) {
    e.preventDefault();
    const { search } = e.target.elements;

    const searchString = search.value.trim();

    if (!searchString) {
      return toast("Your query is empty!!!", {
        duration: 3000,
        position: "top-right",
        icon: "⚠️",
      });
    }

    onSubmit(searchString);
  }

  return (
    <header className={css.header}>
      <form onSubmit={submitHandler} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
