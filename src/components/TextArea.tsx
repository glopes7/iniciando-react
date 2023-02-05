import styles from "./TextArea.module.css";
type TextAreaprops = {
  text?: string;
};

export function TextArea(props: TextAreaprops) {
  return <h1 className={styles.TextAreaContainer}>{props.text}</h1>;
}
