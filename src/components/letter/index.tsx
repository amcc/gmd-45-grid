import styles from "./Letter.module.css";

interface LetterProps {
  image: string;
  gridSize: number;
  className?: string;
}

function Letter({ image, gridSize, className }: LetterProps) {
  const grid = Array.from({ length: gridSize }, (_, i) => i);
  return (
    <div className={`${styles.letter} ${className}`}>
      <div className={styles.flexGrid}>
        {grid.map((rowIndex) => (
          <div key={rowIndex} className={styles.flexRow}>
            {grid.map((cellIndex) => {
              const xPos = (cellIndex / (gridSize - 1)) * 100;
              const yPos = (rowIndex / (gridSize - 1)) * 100;
              const expanded = "";
              const cellStyle = {
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${xPos}% ${yPos}%`,
                backgroundSize: gridSize * 100 + "% " + gridSize * 100 + "%",
              };
              return (
                <div
                  key={cellIndex}
                  className={`${styles.flexCell} ${expanded}`}
                  style={cellStyle}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Letter;
