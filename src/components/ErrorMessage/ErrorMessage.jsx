import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={styles.error}>
      Error!! Please, try to use our service a bit later.
    </p>
  );
}
