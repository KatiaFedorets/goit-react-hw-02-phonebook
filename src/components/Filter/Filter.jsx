import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <div className={styles.div}>
    <label className={styles.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      ></input>
    </label>
  </div>
);

export default Filter;
