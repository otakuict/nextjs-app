import styles from "./overley.module.css";

type OverlayProps = {
  children: React.ReactNode; //👈 children prop typr
};
export default function Overlay(props: OverlayProps) {
  return <div className={styles.overlay}>test</div>;
}
