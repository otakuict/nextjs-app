import Overlay from "@/components/slidOverleys/overlay";

export default function Home() {
  return (
    <div className="container">
      <div className="left-overlay">
        <div className="faiz-icon">( Faize</div>
      </div>
      <div className="somthing">
        <svg width="600" height="220" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 0,190 100,190" fill="lime" stroke="red" />
          <rect
            width="150"
            height="100"
            x="120"
            y="50"
            fill="yellow"
            stroke="red"
          />
          <circle r="45" cx="350" cy="100" fill="pink" stroke="blue" />
          <text x="420" y="100" fill="red" stroke="blue">
            I love SVG!
          </text>
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
      <div className="right-overlay">
        <div className="faiz-icon-right">)</div>
      </div>
    </div>
  );
}
