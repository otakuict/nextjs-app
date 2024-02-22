import "./circuit.css";
var posX = 30;
var posY = 20;
var scale = 4;
const adjustPosition = (numX: number, numY: number, scale: number) => {
  let path = `translate(${100 + numX}, ${160 + numY}) scale(${scale})`;
  let circle = `translate(${67 + numX}, ${145 + numY}) scale(${scale})`;
  return { path: path, circle: circle };
};

export default function Circuit() {
  return (
    <div className="container">
      <svg
        width="1200px"
        height="1200px"
        viewBox="0 0 800 800"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="paths"
          className="path"
          stroke="#FFAE0C"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-opacity="1"
          stroke-dasharray="30,150"
          stroke-dashoffset="2000"
        >
          <g id="left" transform={adjustPosition(posX, posY, scale).path}>
            <polyline points="18 0 27 0 55 28 95 28 115 48 127 48"></polyline>
            <polyline points="18 23 27 23 47 43 86 43 107 64 127 64"></polyline>
            <polyline points="-8.03677904e-06 10.9791757 26.9791757 10.9791757 51 35 90 35 111 56 127 56"></polyline>
            <polyline points="72 92 98 92 110 80 127 80"></polyline>
            <polyline points="84 80 99 80 107 72 127 72"></polyline>
          </g>
        </g>
        <g
          id="paths-bg"
          stroke="#ff2600"
          stroke-width="1.5"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g id="left" transform={adjustPosition(posX, posY, scale).path}>
            <polyline points="18 0 27 0 55 28 95 28 115 48 127 48"></polyline>
            <polyline points="18 23 27 23 47 43 86 43 107 64 127 64"></polyline>
            <polyline points="-8.03677904e-06 10.9791757 26.9791757 10.9791757 51 35 90 35 111 56 127 56"></polyline>
            <polyline points="72 92 98 92 110 80 127 80"></polyline>
            <polyline points="84 80 99 80 107 72 127 72"></polyline>
          </g>
          <g
            id="elements"
            transform={adjustPosition(posX, posY, scale).circle}
            stroke="#FFAE0C"
          >
            <circle cx="87" cy="84" r="4"></circle>
            <circle cx="75" cy="96" r="4"></circle>
            <circle cx="22" cy="4" r="4"></circle>
            <circle cx="22" cy="27" r="4"></circle>
            <circle cx="4" cy="15" r="4"></circle>
            <circle cx="193" cy="15" r="4"></circle>
            <circle cx="323" cy="52" r="4"></circle>
            <circle cx="323" cy="68" r="4"></circle>
            <circle cx="311" cy="80" r="4"></circle>
            <circle cx="282" cy="80" r="4"></circle>
            <circle cx="179" cy="163" r="4"></circle>
            <circle cx="191" cy="152" r="4"></circle>
            <circle cx="163" cy="163" r="4"></circle>
            <circle cx="147" cy="163" r="4"></circle>
            <circle cx="299" cy="91" r="4"></circle>
          </g>
        </g>
      </svg>
    </div>
  );
}
