import "./page.css";

export default function Home() {
  document.onmousemove = function (e) {
    var x = e.pageX;
    var y = e.pageY;

    console.log(x, y);
  };
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
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-opacity="1"
          stroke-dasharray="30,150"
          stroke-dashoffset="2000"
        >
          <g id="left" transform="translate(0.000000, 160.000000) scale(4)">
            <polyline points="18 0 27 0 55 28 95 28 115 48 127 48"></polyline>
            <polyline points="18 23 27 23 47 43 86 43 107 64 127 64"></polyline>
            <polyline points="-8.03677904e-06 10.9791757 26.9791757 10.9791757 51 35 90 35 111 56 127 56"></polyline>
            <polyline points="72 92 98 92 110 80 127 80"></polyline>
            <polyline points="84 80 99 80 107 72 127 72"></polyline>
          </g>
        </g>
        <g
          id="paths-bg"
          stroke="#FFAE0C"
          stroke-width="1.5"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g id="left" transform="translate(0, 160.000000) scale(4)">
            <polyline points="18 0 27 0 55 28 95 28 115 48 127 48"></polyline>
            <polyline points="18 23 27 23 47 43 86 43 107 64 127 64"></polyline>
            <polyline points="-8.03677904e-06 10.9791757 26.9791757 10.9791757 51 35 90 35 111 56 127 56"></polyline>
            <polyline points="72 92 98 92 110 80 127 80"></polyline>
            <polyline points="84 80 99 80 107 72 127 72"></polyline>
          </g>
        </g>
      </svg>
    </div>
  );
}
