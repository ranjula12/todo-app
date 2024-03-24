import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleClick1(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick2(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);

    console.log(todos);
  }
  const className = item.done ? styles.complete : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick2(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleClick1(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line_one}></hr>
    </div>
  );
}
