import { useState, useCallback } from "react";
import { nearest, differenceHyab } from "culori";
import "./App.css";
import colors from "./assets/colors.json";

const finishMap = {
  G: "GLOSS",
  SG: "SEMI-GLOSS",
  F: "FLAT",
  M: "METALLIC",
  PA: "PEARL",
};

const diff = nearest(colors, differenceHyab(), (a) => a.value);

function App() {
  const [colorVal, setColorVal] = useState<string>("");
  const [bestMatches, setBestMatches] = useState<(typeof colors)[0][]>(colors);
  const onColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const newColor = e.currentTarget.value;
      setColorVal(newColor);
      if (newColor === "") {
        setBestMatches(colors);
      }
      if (/#[A-Fa-f0-9]{6}/.test(newColor)) {
        const closestMatches = diff(newColor, 10);
        console.log(closestMatches);
        setBestMatches(closestMatches);
      }
    },
    [setColorVal, setBestMatches]
  );

  return (
    <div className="container">
      <div className="controls">
        <input value={colorVal} onChange={onColorChange}></input>
        <input type="color" value={colorVal} onChange={onColorChange}></input>
      </div>
      <div className="color-list">
        {bestMatches.map((match) => (
          <li key={`match-${match.key ?? "def"}-${match.id}`} className="wrapper">
            <div className="key">{match.key ?? ""}</div>
            <div className={`id${match.brand ? ` brand-${match.brand.toLowerCase()}` : ''}`}>{match.id}</div>
            <div className="finish">
              {finishMap[match.finish as keyof typeof finishMap] ?? match.finish}
            </div>
            <div className="name">{match.name}</div>
            <div className="swatch" style={{ background: match.value }}>
              <span className="brand">{match.brand ?? ""} </span>
              <span>{match.value}</span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
