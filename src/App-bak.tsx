// import { useState, useRef, useEffect, use } from "react";
import fourtyFive from "./assets/4.png";
// import "./App.css";
import styles from "./App.module.css";

const gridSize = 5;
const grid = Array.from({ length: gridSize }, (_, i) => i);

function App() {
  // const [dimensions, setDimensions] = useState([0, 0]);

  // const gridRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log("Grid", gridRef.current);
  //   const handleResize = () => {
  //     if (gridRef.current) {
  //       const width = gridRef.current.offsetWidth;
  //       const height = gridRef.current.offsetHeight;
  //       setDimensions([width, height]);
  //     }
  //   };
  //   handleResize(); // Set initial dimensions
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [gridRef]);

  return (
    <div className={styles.app}>
      <div
        className={styles.flexGrid}
        // ref={gridRef}
        // data-width={dimensions[0]}
        // data-height={dimensions[1]}
      >
        {grid.map((rowIndex) => (
          <div key={rowIndex} className={styles.flexRow}>
            {grid.map((cellIndex) => {
              // const randomNumber = Math.floor(Math.random() * 10);
              const xPos = (cellIndex / (gridSize - 1)) * 100;
              const yPos = (rowIndex / (gridSize - 1)) * 100;
              // const expanded = randomNumber === 1 ? styles.expanded : "";
              const expanded = "";
              const cellStyle = {
                backgroundImage: `url(${fourtyFive})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${xPos}% ${yPos}%`,
                backgroundSize: gridSize * 100 + "% " + gridSize * 100 + "%",
              };
              return (
                <div
                  key={cellIndex}
                  className={`${styles.flexCell} ${expanded}`}
                  style={cellStyle}
                >
                  {/* <img src={fourtyFive} className={styles.logo} /> */}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
