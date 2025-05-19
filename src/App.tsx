// import { useState, useRef, useEffect, use } from "react";
import i4 from "./assets/4.png";
import i7 from "./assets/7.png";
import i8 from "./assets/8.png";
import i15 from "./assets/15.png";
import i23 from "./assets/23.png";
import i26 from "./assets/26.png";
// import "./App.css";
import styles from "./App.module.css";

import Letter from "./components/letter/index.tsx";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.flexGrid}>
        <div className={styles.flexRow}>
          <Letter image={i4} gridSize={5} className={styles.flexCell} />
          <Letter image={i7} gridSize={5} className={styles.flexCell} />
          <Letter image={i23} gridSize={5} className={styles.flexCell} />
          <Letter image={i4} gridSize={5} className={styles.flexCell} />
        </div>
        <div className={styles.flexRow}>
          <Letter image={i8} gridSize={5} className={styles.flexCell} />
          <Letter image={i15} gridSize={5} className={styles.flexCell} />
          <Letter image={i4} gridSize={5} className={styles.flexCell} />
          <Letter image={i26} gridSize={5} className={styles.flexCell} />
        </div>
      </div>
    </div>
  );
}

export default App;
