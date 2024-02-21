import "./overley.css";

type OverlayProps = {
  children: React.ReactNode; //👈 children prop typr
};
export default function Overlay(props: OverlayProps) {
  return <div className="overlay">test</div>;
}
