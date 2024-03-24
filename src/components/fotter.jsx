import styles from "./foote.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completed todos: {completedTodos}</span>
      <span className={styles.item}>total todos: {totalTodos}</span>
    </div>
  );
}
